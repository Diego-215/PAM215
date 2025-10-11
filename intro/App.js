// 1. imports: zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

// 2. main: zona de componentes
export default function App() {

  const[contador, setContador]= useState(0);

  return (
    
    <View style={styles.container}>

      <Text>contador: {contador}</Text>
      <Button title='Incrementar' onPress={()=>setContador(contador + 1)}> </Button>
      <Button title='Quitar' onPress={()=>setContador(contador - 1)}></Button>
      <Button title='reiniciar' onPress={()=>setContador(contador - contador)}></Button>
      <StatusBar style="auto" />

    </View>

  );
}

// 3. estilos : zona de estilos y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
