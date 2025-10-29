import { Text, StyleSheet, View, ActivityIndicator, Button} from 'react-native'
import React, { useState } from 'react'

export default function IndicatorScreen () {


    const [loading, setLoading] = useState (false);
    const startLoading = () =>{
      setLoading(true);
      setTimeout(()=> setLoading(false), 3000)
    };

    if(loading){
      return(
      <View style={styles.container}>
        <View style={styles.loaderContainer}>
          <ActivityIndicator
              size="large"
              color="white"
              animating={true}
              hidesWhenStopped={true}
          />
          <Text style={styles.text}>Cargando...</Text>
        </View>
      </View>
      );
    }
    return(
      <View style={styles.container}>
        <Text style={styles.text}>ActivityIndicator</Text>
        <Button
        title="carga de datos" onPress={startLoading}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  title:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loaderContainer: {
    alignItems: 'center',
  },
  text:{
    color: 'white'
  }
})