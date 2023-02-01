import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../../services/firebaseConnection';

console.disableYellowBox = true

export default function Base() {
  const [nome, setNome] = useState('carregando..')
  const [idade, setIdade] = useState('carregando..')
  useEffect(()=>{
     getName()
  }, [])
  async function getName(){
    //com olheiro 24 horas
    //  await firebase.database().ref('MeuApp/nome').on('value', (snapshot)=>{
    //     setNome(snapshot.val())
    //  })

    // requisição única quando inicia o app
    // await firebase.database().ref('MeuApp/nome').once('value', (snapshot)=>{
    //    setNome(snapshot.val())
    // })

    await firebase.database().ref('MeuApp/usuarios/1').on('value', (snapshot)=>{
      setNome(snapshot.val().name)
      setIdade(snapshot.val().idade)
    })
  }
  return (
    <View style={styles.container}>
      <Text>Olá, {nome}</Text>
      <Text>Idade {idade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
