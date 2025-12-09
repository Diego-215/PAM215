import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, Button, ScrollView, Alert, ImageBackground, Image, Animated,Easing } from "react-native";

export default function RecetarioScreen (){

    const[cargando,setcargador]=useState(true);
    const desvanecido = new Animated.Value(1);

    useEffect(()=>{
      const timer=setTimeout(()=>{
        Animated.timing(desvanecido,{
          toValue:0,
          duration: 800,
          easing: Easing.out(Easing.ease),
        }).start(()=> setcargador(false));

      },2000);
      return () => clearTimeout(timer)
    },[]);

  if(cargando){
    return(
      <Animated.View style={[styles.splashCont, {opacity:desvanecido}]}>
        <ImageBackground style={styles.splashImage}
        source={require('../assets/Intro.jpg')}
        resizeMode='cover'
        >
          <Text style={styles.splashtext}>Mis recetas</Text>
        </ImageBackground>
      </Animated.View>
    );
  }










    const Receta1 = () => {
        alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano");
        Alert.alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano")
    }

    const Receta2 = () => {
        alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano");
        Alert.alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano")
    }

    const Receta3 = () => {
        alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano");
        Alert.alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano")
    }

    const Receta4 = () => {
        alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano");
        Alert.alert("1.- Pasta \n 2.-Jitomate \n 3.-Cilantro \n 4.-Rabano")
    }

    return (
        <ScrollView>
            <ImageBackground style={styles.Image}
        source={require('../assets/fondo.jpeg')}
        >
            <View style={styles.cuadro}>
               <Text style={styles.titulo}> Mis recetas</Text> 
            </View>

            <View style={styles.cuadro2}>
                <View >
                    <Image style={styles.platillo} source={require('../assets/platillo.jpg')}></Image>
                   
                        <Text style={styles.titulo2}>Pasta</Text>
                        <Text style={styles.contenido}>tiempo: 1 hora</Text>
                        <Text style={styles.contenido}>Pasta con jitomate</Text>
                        <Button title='Mostrar receta' onPress={Receta1}></Button>
                    
                </View>
            </View>

            <View style={styles.cuadro2}>
                <View >
                    <Image style={styles.platillo} source={require('../assets/platillo.jpg')}></Image>
                   
                        <Text style={styles.titulo2}>Pasta</Text>
                        <Text style={styles.contenido}>tiempo: 1 hora</Text>
                        <Text style={styles.contenido}>Pasta con jitomate</Text>
                        <Button title='Mostrar receta' onPress={Receta2}></Button>
                    
                </View>
            </View>

            <View style={styles.cuadro2}>
                <View >
                    <Image style={styles.platillo} source={require('../assets/platillo.jpg')}></Image>
                   
                        <Text style={styles.titulo2}>Pasta</Text>
                        <Text style={styles.contenido}>tiempo: 1 hora</Text>
                        <Text style={styles.contenido}>Pasta con jitomate</Text>
                        <Button title='Mostrar receta' onPress={Receta3}></Button>
                    
                </View>
            </View>

            <View style={styles.cuadro2}>
                <View >
                    <Image style={styles.platillo} source={require('../assets/platillo.jpg')}></Image>
                   
                        <Text style={styles.titulo2}>Pasta</Text>
                        <Text style={styles.contenido}>tiempo: 1 hora</Text>
                        <Text style={styles.contenido}>Pasta con jitomate</Text>
                        <Button title='Mostrar receta' onPress={Receta4}></Button>
                    
                </View>
            </View>
            
        </ImageBackground>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    Image:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginBottom: 20,
    },
    cuadro:{
        height: 100,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 30,
        fontFamily: 'calibri',
        fontWeight: 'bold',
    },
    cuadro2:{
        height: 400,
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    platillo: {
        height: 230,
        width: 230,
        marginLeft: 20,
        marginTop: 33
    },
    titulo2: {
        fontSize: 30,
        fontFamily: 'calibri',
        fontWeight: 'bold',
    },
    contenido:{
        fontSize: 20,
        fontFamily: 'calibri',
    },
    splashCont:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding: 50,
  },
  splashImage:{
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
  },
  splashtext:{
    position:'absolute',
    marginBottom:50,
    fontSize:30,
    color:'#97e9ffff'
  },
})