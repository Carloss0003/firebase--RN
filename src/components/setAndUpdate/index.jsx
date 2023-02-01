import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from '../../services/firebaseConnection';

console.disableYellowBox = true

export default function UpdateAndSet() {
  const [nome, setNome] = useState('carregando..')
  const [idade, setIdade] = useState('carregando..')
  useEffect(()=>{
    dados() 
  }, [])

  async function dados(){
    //criar um nó
    //  await firebase.database().ref('tipo').set('Vendedor')

    // remover nó
    // await firebase.database().ref('tipo').remove()

    // await firebase.database().ref('MeuApp/usuarios').child(3).set({
    //   nome: 'Carlos',
    //   cargo: 'Programador'
    // })
    
    // await firebase.database().ref('MeuApp/usuarios').child(3)
    // .update({
    //    cargo: 'Desenvolvedor Mobile Júnior'
    // })
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
