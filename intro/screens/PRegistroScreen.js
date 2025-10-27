import { Text, StyleSheet, View, ImageBackground, Animated,Easing, TextInput, Alert, Switch, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function PRegistroScreen () {
    
    const[nombre, setNombre]=useState('');
    const[correo, setCorreo]=useState('');
    const [esEncendido, cambiarEncendido] = useState (false);
    const[cargando, setCargando] = useState (true);
    const desvanecido = new Animated.Value(1);


    const mostrarAlerta = ()=>{
        if(nombre.trim()==='' || correo.trim()===''){
            Alert.alert("ERROR  \n" + "Rellena todos los campos")
        }else if(esEncendido == false){
            Alert.alert("ERROR \n" + "Terminos no aceptados")
        }else{
            Alert.alert('Datos Ingresados: \n', 
                `Nombre: ${nombre}\n` +
                `Email: ${correo}`)
        }
    }
    

    useEffect(()=>{
        const timer=setTimeout(()=>{
            Animated.timing(desvanecido,{
            toValue:0,
            duration: 800,
            easing: Easing.out(Easing.ease),
            }).start(()=> setCargando(false));
    
        },2000);
        return () => clearTimeout(timer)
        },[]);

    if(cargando){
        return(
        <Animated.View style={[styles.splashCont, {opacity:desvanecido}]}>
            <ImageBackground style={styles.splashImage}
            source={require('../assets/Fondo-R.jpg')}
            resizeMode='cover'
            >
                <Text style={styles.splashText}>Cargando...</Text>
            </ImageBackground>
        </Animated.View>
        );
    }

    return (
        <ImageBackground style={styles.fondoImg}
        source={require('../assets/Fondo-R.jpg')}
        resizeMode='cover'
        >
            <View style={styles.cuadro}>

            <Text style={styles.titulo}>REGISTRO DE USUARIO</Text>    
            <TextInput style={styles.input}
            placeholder='Nombre completo'
            value={nombre}
            onChangeText={setNombre}>    
            </TextInput>
            
            <TextInput style={styles.input}
            placeholder='Correo Electronico'
            value={correo}
            onChangeText={setCorreo}>    
            </TextInput>

            <View style={styles.terminos}>
            <Text style={styles.texto}>Aceptar terminos y condiciones</Text>
            <Switch
            value = {esEncendido}
            onValueChange={()=> cambiarEncendido (!esEncendido)}
            trackColor={{true: 'gray', false:'black'}}
            thumbColor={esEncendido ? '#fff' : '#000'}
            ></Switch>   
            </View>

            <Button color='gray' title='Registrarse' onPress={mostrarAlerta}></Button>
            </View>
            
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    fondoImg:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: '100%',
    },
    titulo:{
        color: '#ffffffff',
        fontWeight:'bold',
        fontSize:20,
        padding: 30,
        
    },
    cuadro:{
        height: '50%',
        width: '90%',
        backgroundColor: 'rgba(57, 48, 48, 0.67)',
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'start',
        
    },
    input:{
        width: '80%', 
        borderWidth: 2,
        borderColor: 'white', 
        borderRadius: 10, 
        padding: 10,
        backgroundColor: 'transparent', 
        marginTop:20,
        marginBottom:10,
        color:'#ffff'
    },
    terminos:{
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        marginBottom: 10,
    },
    texto:{
        color:'white'
    },
    splashCont:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: 50
    },
    splashImage:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    splashText:{
        position:'absolute',
        marginBottom:50,
        fontSize:30,
        color:'#97e9ffff'
    }
});