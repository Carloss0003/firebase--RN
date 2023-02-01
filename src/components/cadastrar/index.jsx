import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import firebase from '../../services/firebaseConnection';

console.disableYellowBox = true

export default function Cadastrar() {
 const navigate = useNavigation()   
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const [name, setName] = useState('')
 
 async function cadastrar(){
   await firebase.auth().createUserWithEmailAndPassword(email, password)
   .then((value)=>{
      setEmail('')
      setPassword('')
      firebase.database().ref('MeuApp/user').child(value.user.uid)
      .set({
        nome: name,
        email: email
      })
   })
   .then(()=>navigate.navigate('home'))
   .catch((err)=>console.log(err))
 }

 return (
     <View style={styles.container}>
        <TextInput
           value={name}
           placeholder='Name'
           keyboardType={'default'}
           onChangeText={setName}
           style={styles.input}
        />
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
          title='Cadastrar'
          onPress={cadastrar}
        />
        <Button
          title='Acessar login'
          onPress={()=>navigate.navigate('login')}
        />
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
