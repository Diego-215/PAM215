import { Text, StyleSheet, View, Button, TextInput, Alert } from 'react-native'
import React,{useState} from 'react'


export default function TextScreen () {

    const[nombre, setNombre] = useState('')
    const[password, setPassword] = useState('')
    const[telefono, setTelefono] = useState('')

    const mostrarAlerta = () => {
      if(nombre.trim()=== '' || password.trim()=== '' || telefono.trim()===''){
        Alert.alert("Error. Por favor rellena todos los campos (mobile)")
        alert("Error. Por favor rellena todos los campos (web)")
      } else {
        Alert.alert('Datos ingresados \n' + `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`)

        alert('Datos ingresados \n' + `Nombre: ${nombre}\nPassword: ${password}\nTelefono: ${telefono}`)  
      }
    }


    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Text Input Alert</Text>

        <Text style={styles.etiquetas}>Nombre: </Text>
        <TextInput style={styles.input}
        placeholder='Escribe tu nombre'
        value={nombre}
        onChangeText={setNombre}
        />

        <Text style={styles.etiquetas}>password:</Text>
        <TextInput style={styles.input}
        placeholder='Escribe tu password'
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        />

        <Text style={styles.etiquetas}>telefono:</Text>
        <TextInput style={styles.input}
        placeholder='Escribe tu telefono'
        keyboardType='phone-pad'
        value={telefono}
        onChangeText={setTelefono}
        />

        <Button
        color={'#17a0ceff'}
        title='mostrar alerta'
        onPress={mostrarAlerta}

        />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(69, 241, 123, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontFamily: 'Times New Roman' ,
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  etiquetas:{
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
  },
  input:{
    width: '50%', 
    borderWidth: 2,
    borderColor: 'black', 
    borderRadius: 10, 
    padding: 10,
    backgroundColor: 'white'
  }
})