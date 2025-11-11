import { Text, StyleSheet, View, FlatList, SectionList, ScrollView} from 'react-native'
import React, { useState } from 'react'

export default function FlatScreen () {

    const datos =[
      {id: '1', nombre: 'manzana'},
      {id: '2', nombre: 'platano'},
      {id: '3', nombre: 'naraja'},
      {id: '4', nombre: 'uva'},
      {id: '5', nombre: 'fresa'},
      {id: '6', nombre: 'sandia'},
    ]

    const secciones = [
      {
        titulo: 'frutas',
        data: [
          {nombre: 'manzana'},
          {nombre: 'platano'},
          {nombre: 'naranja'},
          {nombre: 'uva'},
          
        ]
      }, 
      {
        titulo: 'verdura',
        data: [
          {nombre: 'zanahoria'},
          {nombre: 'lechuga'},
          {nombre: 'tomate'},
          {nombre: 'brocoli'},
        ]
      },
    ]

    return (
      <ScrollView style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.Titulo}>EJMPLO DE FlatList</Text>
        <FlatList
        data={datos}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) =>(
          <View style={styles.elementos}>
            <Text style={styles.Text}> {item.nombre}</Text>
          </View>
        )}
        scrollEnabled={false}
        ItemSeparatorComponent={()=><View style={styles.separador}/>}
        ></FlatList>
        <Text style={styles.Titulo2}>EJMPLO DE FlatList</Text>
        <SectionList
        sections={secciones}
        keyExtractor={(item, index)=> item.nombre + index}
        renderItem={({item}) =>(
          <View style={styles.itemSeccion}>
            <Text style={styles.textItem}> {item.nombre}</Text>
          </View>
        )}
        renderSectionHeader={({section: {titulo}}) =>( <View style={styles.encabezado}>
          <Text style={styles.tituloSeccion}> {titulo}</Text>
        </View>)}
        scrollEnabled={false}
        stickySectionHeadersEnabled={false}
        ></SectionList>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'rgba(81, 81, 236, 1)'
  },
  content:{
    padding: 20,
    paddingBottom: 40
  },
  Titulo:{
    fontSize: 30,
    fontWeight: 'bold', 
    marginBottom: 20,
    marginTop: 20,
    textAlign: 20,
    color: '#ffff',
  },
  Titulo2:{
    fontSize: 30,
    fontWeight: 'bold', 
    marginBottom: 20,
    marginTop: 20,
    textAlign: 20,
    color: '#ffffffff'
  },
  elementos: {
    width: '100%',
    height: 80,
    backgroundColor: '#19d3daff',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5, 
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  Text:{
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: 'white',
    fontWeight: 900,
    textDecorationLine: 'underline'
  },
  separador: {
    height: 10,
  },
  encabezado:{
    backgroundColor: '#17a982',
    padding: 15,
    borderRadius: 12, 
    marginTop: 10,
    marginBottom: 10, 
    shadowColor: 'black',
    shadowOffset:{
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  tituloSeccion: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Timees New Roman',
  },
  itemSeccion:{
    backgroundColor: '#bd15ecff', 
    padding: 15,
    marginVertical: 5,
    borderRadius: 10, 
    marginLeft: 10,
    shadowColor: 'black',
    shadowOffset:{
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3
  },
  textItem: {
    fontSize: 20, 
    fontWeight: '700', 
    color: 'black', 
    fontFamily: 'Times New Roman'
  }
})