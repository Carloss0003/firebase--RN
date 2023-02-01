import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import firebase from '../../services/firebaseConnection';

console.disableYellowBox = true

export default function Login() {
 const navigate = useNavigation()   
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [user, setUser] = useState('')
 async function cadastrar(){
   await firebase.auth().signInWithEmailAndPassword(email, password)
   .then((value)=>{
      alert('Bem Vindo '+ value.user.email)
      setUser(value.user.email)
      setEmail('')
      setPassword('')
      navigate.navigate('home')
   })
   .catch((err)=>console.log(err))
 }
 async function logout(){
   await firebase.auth().signOut()
   .then(()=>{
    setUser('')
    alert('deslogado')
   })
 }
 return (
    <View style={styles.container}>
        <TextInput
           value={email}
           placeholder='Email'
           keyboardType={'email-address'}
           onChangeText={setEmail}
           style={styles.input}
        />
        <TextInput
           value={password}
           placeholder='Senha'
           onChangeText={setPassword}
           style={styles.input}
        />
        <Button
          title='Acessar'
          onPress={cadastrar}
        />
        <Button
          title='Ir para cadastro'
          color={'#FF0000'}
          onPress={()=>navigate.navigate('cadastro')}
        />
        {
          user.length > 0 ?
          (
            <>
              <Text style={{fontSize: 20}}>
                {user}
              </Text>
              <Button
                title='Sair'
                onPress={logout}
              />
            </>
          )
          :
          (
            <Text>Nenhum user logado</Text>
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
