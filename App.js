import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';
import { StackComponent } from './src/routes';

console.disableYellowBox = true

export default function App() {

 return (
     <NavigationContainer>
        <StackComponent/>
     </NavigationContainer>
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
