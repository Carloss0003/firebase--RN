import { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Lista } from '../lista/index';
import firebase from '../../services/firebaseConnection';

console.disableYellowBox = true

export default function Add(){
  const [nome, setNome] = useState('')
  const [Cargo, setCargo] = useState('')
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    dados() 
  }, [])

  async function dados(){
    setLoading(true)
    await firebase.database().ref('MeuApp/usuarios').on('value', (snapshot)=>{
      setUser([])
       snapshot.forEach((item)=>{
          let data = {
            key: item.key,
            nome: item.val().nome,
            cargo: item.val().cargo
          }

          setUser(oldArray => [...oldArray, data].reverse())
          setLoading(false)
       })
    })
  }

  async function cadastrar(){
       if(nome !== '' & Cargo !== ''){
         let usuarios = await firebase.database().ref('MeuApp/usuarios')
         let chave = usuarios.push().key

         usuarios.child(chave).set({
           nome: nome,
           cargo: Cargo
         })
         .then(()=>{
            alert('cadastrado com sucesso')
            setCargo('')
            setNome('')
         })
         .catch((err)=>{
           alert('entre em contato com o suporte para mais informação')
           console.log(err)
         })
       }
  }

  return (
    <View style={styles.container}>
       <Text style={styles.texto}>Nome</Text>
       <TextInput
         style={styles.input}
         value={nome}
         underlineColorAndroid="transparent"
         onChangeText={(texto)=>setNome(texto)}
       />
       <Text style={styles.texto}>Cargo</Text>
       <TextInput
         style={styles.input}
         value={Cargo}
         underlineColorAndroid="transparent"
         onChangeText={(texto)=>setCargo(texto)}
       />
       <Button
          title='Novo funcionario'
          onPress={cadastrar}
       />
        {
          loading ?
          (
            <ActivityIndicator size={45} color="#121212"/>
          ):
          (

            <FlatList
              keyExtractor={item => item.key}
              data={user}
              renderItem = {({item})=><Lista data={item}/>}
            />
          )
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  texto: {
     fontSize: 20
  },
  input:{
    width: '90%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    borderRadius: 5
  }
});
