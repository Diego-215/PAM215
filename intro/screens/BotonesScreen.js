import { Text, StyleSheet, View, Button, Switch } from 'react-native'
import React, { use, useState } from 'react'

export default function BotonesScreen () {
    const [esEncendido, cambiarEncendido] = useState (false)
    const [color, cambiarColor] = useState ('yellow')
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Control de luz</Text>

      {/* Operador ternario
      {condicional? valor true : valor false }
      */}

        <Text style={[styles.luz, {color: esEncendido? color: 'black'}]}>
          {esEncendido ? 'Luz Encendidad' : 'Luz Apagada'}
        </Text>
        <Switch 
          value = {esEncendido}
          onValueChange={()=> cambiarEncendido (!esEncendido)}
          trackColor={{true: 'white', false:'gray'}}
        ></Switch>


        <View style={styles.cajaBotones}>
        <Button 
          title='Amarillo'
          onPress={()=> esEncendido && cambiarColor ('yellow')}
          color='#c6dd19ff'
        ></Button>
        <Button 
          title='Azul'
          onPress={()=> esEncendido && cambiarColor ('blue')}
        ></Button>
        <Button 
          title='rojo'
          onPress={()=> esEncendido && cambiarColor ('red')}
          color ='#cf2020ff'
        ></Button>


        </View>
        
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //
    backgroundColor: '#8c8787ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cajaBotones:{
    flexDirection: 'row',
    gap: 10,
    marginTop: 15,
  },
  titulo: {
    fontSize: 40, 
    color: 'white',
    marginBotton: 20, 
    fontweight: 'bold',
  },
  luz: {
    fontSize: 30,
    marginBottom: 15,
  }
});