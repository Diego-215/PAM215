import { Text, StyleSheet, View, ImageBackground,Animated,Easing, ScrollView} from 'react-native'
import React,{useEffect,useState} from 'react';
import { Button, Switch } from 'react-native-web';

export default function PantallaPScreen () {
    
    const [esEncendido, cambiarEncendido] = useState (false)
    
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
        <ScrollView>
            <ImageBackground style={styles.Background}
            source={require('../assets/Imagen3.jpg')}
            resizeMode='cover'
        >
                <Text style={styles.titulo}>Mis Deberes</Text>
                <Text style={styles.subtitulo}>07 - 11 - 2025</Text>
                <View style={styles.cuadro}>
                    <Text style={styles.tarea}>Matematicas</Text>
                    <View>
                        <Text style={styles.tarea2}>1.- Ejercicios de la pagina 20</Text>
                        <Text style={styles.tarea2}>2.- Investigacion de una funcion trigonometrica</Text>
                    </View>
                    <View style={styles.nose}>
                        <Switch 
                        value = {esEncendido}
                        onValueChange={()=> cambiarEncendido (!esEncendido)}
                        trackColor={{true: 'white', false:'gray'}}
                        ></Switch>
                        <Text style={styles.luz}>
                        {esEncendido ? 'Completada' : 'Pendiente'}
                        </Text>
                        
                    </View>
                </View>
                <View style={styles.cuadro}>
                    <Text style={styles.tarea}>Arte</Text>
                    <View>
                        <Text style={styles.tarea2}>1.- Compara materiales</Text>
                        <Text style={styles.tarea2}>2.- Hacer dibujo incocluso en clase</Text>
                    </View>
                    <View style={styles.nose}>
                        <Switch 
                        value = {esEncendido}
                        onValueChange={()=> cambiarEncendido (!esEncendido)}
                        trackColor={{true: 'white', false:'gray'}}
                        ></Switch>
                        <Text style={styles.luz}>
                        {esEncendido ? 'Completada' : 'Pendiente'}
                        </Text>
                        
                    </View>
                </View>
                <View style={styles.cuadro}>
                    <Text style={styles.tarea}>Historia</Text>
                    <View>
                        <Text style={styles.tarea2}>1.- Realizar linea del tiempo</Text>
                        <Text style={styles.tarea2}>2.- Terminar resumen</Text>
                    </View>
                    <View style={styles.nose}>
                        <Switch 
                        value = {esEncendido}
                        onValueChange={()=> cambiarEncendido (!esEncendido)}
                        trackColor={{true: 'white', false:'gray'}}
                        ></Switch>
                        <Text style={styles.luz}>
                        {esEncendido ? 'Completada' : 'Pendiente'}
                        </Text>
                        
                    </View>
                </View>
                <Button color='green' title='REINICIAR' onPress={()=> cambiarColor(!cambiarEncendido)}></Button>
        </ImageBackground>
        </ScrollView>

            

        
    )

}

const styles = StyleSheet.create({
    Background:{
        width: '100%',
        height: '100%',
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: 40
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
        fontSize: 50,
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
        height: '45%',
        width: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0.67)',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'start',
        justifyContent: 'start',
        marginBottom: 10,
        padding: 20
    },
    tarea:{
        fontSize:40,
        fontWeight:'bold',
        color: 'white',
        marginBottom:20,
    },
    tarea2:{
        alignItems:'start',
        justifyContent: 'start',
        fontSize: 27,
        fontWeight:'bold',
        color: 'white',
        marginBottom:15,
    },
    luz: {
    fontSize: 20,
    marginBottom: 40,
    color: 'white',
    marginLeft: 30
    },
    nose:{
        flexDirection: 'row',
    }
})