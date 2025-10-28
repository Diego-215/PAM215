import { Text, StyleSheet, View, ScrollView, Button } from 'react-native';
import React, { useRef, useState } from 'react';

export default function ScrollViewScreen() {
  const scrollRef = useRef(); // referencia al ScrollView
  const [scrollY, setScrollY] = useState(0); // guarda la posición del scroll vertical
  //esto es lo del boton, lo mencionamos primero
  const irAlFinal = () => {
    scrollRef.current.scrollToEnd({ animated: true }); // función para ir al final
  };

  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    setScrollY(yOffset);
    console.log('Scroll vertical:', yOffset); 
  };

  return (
    <ScrollView
      ref={scrollRef}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={true}
      onScroll={handleScroll}       
      scrollEventThrottle={16}     
    >
      

      <Text style={styles.Titulo}>Práctica: ScrollView</Text>
      <Text style={styles.Titulo2}>Ejemplo de desplazamiento vertical</Text>

      <View style={{ marginVertical: 10 }}>
        <Button color= '#a9a2e4ff' title="Ir al final del scroll" onPress={irAlFinal} />
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 1</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 2</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 3</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 4</Text>
      </View>

      <View style={styles.elementos}>
        <Text style={styles.text}>Elemento 5</Text>
      </View>

      <Text style={styles.Titulo2}>Ejemplo de desplazamiento horizontal</Text>

      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={styles.scrollhorizontal}
        showsHorizontalScrollIndicator={true}
      >
        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 1</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 2</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 3</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 4</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 5</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 6</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 7</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 8</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 9</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 10</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 11</Text>
        </View>

        <View style={styles.elementos2}>
          <Text style={styles.text}>Cuadro 12</Text>
        </View>
      </ScrollView>

      
      <Text style={styles.scrollInfo}>Posición vertical: {scrollY.toFixed(0)} px</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
  backgroundColor: '#f8f4c4' 
},
  content: { 
    padding: 20, 
    paddingBottom: 40 
  },
  Titulo: {
    fontSize: 30,
    fontWeight: 'bold', 
    marginBottom: 10, 
    color: '#333', 
    textAlign: 'center' 
  },
  Titulo2: {
  fontSize: 26,
  fontWeight: 'bold', 
  marginTop: 20, 
  marginBottom: 10, 
  textAlign: 'center' 
  },
  elementos: {
    width: '100%',
    height: 100,
    backgroundColor: '#a5c3a7',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  scrollhorizontal: {
    marginVertical: 10,
    width: '100%' 
    },
  elementos2: {
    width: 120,
    height: 120,
    backgroundColor: '#608dabff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 10,
  },
  text: { 
    fontSize: 16,
    fontFamily: 'Courier',
      color: '#000000ff', 
      fontWeight: '900', 
      textDecorationLine: 'underline' 
    },
  parrafoContainer: { 
    marginVertical: 10, 
    backgroundColor: '#e6f0d4',
    padding: 15, 
    borderRadius: 10 },
  
  parrafo: { 
    fontSize: 16, 
    lineHeight: 24, 
    textAlign: 'justify', 
    color: '#333', 
    fontFamily: 'Courier' },

    scrollInfo: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },
});