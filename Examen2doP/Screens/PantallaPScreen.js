import { Text, StyleSheet, View, ImageBackground,Animated,Easing, ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react';

export default function PantallaPScreen () {
    
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
        source={require('../assets/Imagen2.jpeg')}
        resizeMode='contain'
        >
        <Text style={styles.splashtext}>Quien tiene miedo, Muere a diario...</Text>
        </ImageBackground>
    </Animated.View>
    );
}

    return (

            <ImageBackground style={styles.Background}
            source={require('../assets/Imagen3.jpg')}
            resizeMode='cover'
        >
                <Text style={styles.titulo}>Mis Deberes</Text>
                <Text style={styles.subtitulo}>07 - 11 - 2025</Text>
                <View style={styles.cuadro}>
                    <Text style={styles.tarea}>Matematicas</Text>
                    <Text>Ejercicios de la pagina 20</Text>
                    <Text>Investigacion de una funcion trigonometrica</Text>
                </View>
        </ImageBackground>

        
    )

}

const styles = StyleSheet.create({
    Background:{
        width: '100%',
        height: '100%',
        justifyContent: 'start',
        alignItems: 'center',
        padding: 30
    },
    splashCont:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
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
    color:'black'
},
    titulo: {
        fontSize: 30,
        fontFamily: 'calibri',
        fontWeight: 'bold',
        color: 'black'
    },
    subtitulo:{
        fontSize: 20,
        fontFamily: 'calibri',
        fontWeight: 'bold',
        color: 'black'
    },
    cuadro:{
        height: '20%',
        width: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0.67)',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'start',
        
    },
    tarea:{
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
        marginBottom:20,
    }
})