// 1. imports: zona de importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

// 2. main: zona de componentes
export default function App() {

  const[contador, setContador]= useState(0);

  return (
    
    <View style={styles.container}>

      <Text style={styles.text}>contador:</Text>
      <Text style={styles.text2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="red" title='Incrementar' onPress={()=>setContador(contador + 1)}> </Button>
      <Button color="green" title='Quitar' onPress={()=>setContador(contador - 1)}></Button>
      <Button color="purple" title='reiniciar' onPress={()=>setContador(contador - contador)}></Button>
      </View>
      
      <StatusBar style="auto" />
    </View>

  );
}

// 3. estilos : zona de estilos y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1, //
    backgroundColor: '#28b234ff',// color del fondo
    alignItems: 'center', // para trabajar sobre el eje x
    justifyContent: 'center', //para trabajar sobre el eje y
  },
  text: {
    fontFamily:"Times New Roman",
    fontSize:30,
    color:'#a71313ff',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine: 'line-through',
  },
  text2: {
    fontFamily:"Courier",
    fontSize:40,
    color:'#cb3985ff',
    fontWeight:'1000',
    textDecorationLine: 'underline',
  },
  contenedorBotones: {
    marginTop: 30,
    flexDirection: "row",
    gap:20,

  },

});