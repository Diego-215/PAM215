import { Text, StyleSheet, View, Pressable, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen () {

    const [mostrar, setMostrar] = useState (null)

    return (
      <View style={styles.container}>
        <Text>Bienvenido</Text>

        <Pressable style={styles.boton} onPress={()=> setMostrar('login')}>
          <Text style={styles.text}>Iniciar Sesion</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=> setMostrar('Registro')}>
          <Text style={styles.text}>Registrarse</Text>
        </Pressable>

        <Pressable style={styles.boton} onPress={()=> setMostrar('Alerta')}>
          <Text style={styles.text}>Alerta</Text>
        </Pressable>

        <Modal
        animationType='slide'
        transparent= {false}
        visible={mostrar === 'login'}
        onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}> Formulario de inicio de Sesion</Text>
            <TextInput style={styles.input}
            placeholder='Ingrese su usuario'
            ></TextInput>

            <TextInput style={styles.input}
            placeholder='Ingrese su contraseña'
            secureTextEntry={true}
            ></TextInput>

            <Pressable 
            onPress={()=> setMostrar (null)}
            style={styles.boton}
            >
              <Text>Iniciar Sesion</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
        animationType='slide'
        transparent= {false}
        visible={mostrar === 'Registro'}
        onRequestClose={()=> setMostrar(null)}
        >
          <View style={styles.container2}>
            <Text style={styles.titulo}> Formulario de Registro</Text>
            <TextInput style={styles.input}
            placeholder='Ingrese su usuario'
            ></TextInput>

            <TextInput style={styles.input}
            placeholder='Ingrese su Email'
            secureTextEntry={true}
            ></TextInput>

            <TextInput style={styles.input}
            placeholder='Ingrese su contraseña'
            secureTextEntry={true}
            ></TextInput>

            <Pressable 
            onPress={()=> setMostrar (null)}
            style={styles.boton}
            >
              <Text>Iniciar Sesion</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
        animationType='fade'
        transparent={false}
        visible={mostrar === 'Alerta'}
        onRequestClose={()=> setMostrar (null)}
        >
          <View style={styles.container3}>
            <View style={styles.containerAlerta}>
              <Text style={styles.textAlerta}> Esto es una alerta :D</Text>
              <View style={styles.containerBoton}>

                <Pressable 
            onPress={()=> setMostrar (null)}
            style={styles.boton1}
            >
              <Text>OK</Text>
            </Pressable>

            <Pressable 
            onPress={()=> setMostrar (null)}
            style={styles.boton2}
            >
              <Text>Cerrar</Text>
            </Pressable>
              </View>
            </View>
          </View>
        </Modal>

      </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#ffffff'
  },
  container2:{
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f11717ff'
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: 'blue', 
  }, 
  boton: {
    backgroundColor: '#39e9e9', 
    padding: 15, 
    borderRadius: 20, 
    marginBottom: 15,
    width: '70%', 
    alignItems: 'center', 
  },
  text: {
    color: 'white', 
    fontSize: 18, 
    fontWeight: '500'
  },
  titulo: {
    fontSize: 25, 
    marginBottom: 20, 
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#0000', 
    borderRadius: 10,
    marginBottom: 20, 
    padding: 15, 
    backgroundColor: 'white'
  },
  containerAlerta: {
    width: 300,
    height: 200, 
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20
  },
  textAlerta: {
    fontSize: 20,
    color: 'black', 
  },
  boton1: {
    backgroundColor: '#516bedff',
    padding: 15, 
    borderRadius: 20, 
    marginRight: 10, 
    alignItems: 'center',
    width: 100
  },
  boton2: {
    backgroundColor: '#ed51d6ff',
    padding: 15, 
    borderRadius: 20, 
    marginRight: 10, 
    alignItems: 'center',
    width: 100
  }, 
  containerBoton: {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    marginTop: 25, 
    width:'80%'
  }
})