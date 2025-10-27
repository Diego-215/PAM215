import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputcreen from './TextScreen';
import ImageBackroundScreen from './ImageScreen';
import ScrollViewcreen from './ScrollView';
import IndicatorScreen from './IndicatorScreen';
import FlatScreen from './FlatScreen';
import ModalScreen from './ModalScreen';
import SheetScreen from './SheetScreen';
import PRegistroScreen from './PRegistroScreen';

export default function MenuScreen (){
    const[screen, setScreen] = useState('menu');

    switch (screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>; 
        case 'text':
            return<TextInputcreen/>;
        case 'image':
            return <ImageBackroundScreen/>;
        case 'scroll':
            return <ScrollViewcreen/>; 
        case 'indicator':
            return <IndicatorScreen/>;  
        case 'flat':
            return <FlatScreen/>; 
        case 'modal':
            return <ModalScreen/>; 
        case 'sheet':
            return <SheetScreen/>;  
        case 'registro': 
            return <PRegistroScreen/>
        case 'menu':
            default:
                return (
                    <View style={styles.fondo}>
                        <Text style={styles.titulo}>MenuScreen</Text>
                        <View style={styles.botones}>
                                <Button color= 'green' onPress={()=>setScreen ('contador')} title='Pract: Contador'> </Button>
                                <Button color= 'green' onPress={()=>setScreen ('botones')} title='Pract: Buttons'> </Button>
                                <Button color= 'green' onPress={()=>setScreen ('text')} title='Pract: Text Input'></Button>
                                <Button color= 'green' onPress={()=>setScreen ('image')} title='Pract: Image Backround'></Button>
                                <Button color= 'green' onPress={()=>setScreen ('scroll')} title='Pract: Scroll View'></Button>
                                <Button color= 'green' onPress={()=>setScreen ('indicator')} title='Pract: Activity Indicator'></Button>
                                <Button color= 'green' onPress={()=>setScreen ('flat')} title='Pract: FlatList'></Button>
                                <Button color= 'green' onPress={()=>setScreen ('modal')} title='Pract: Modal'></Button>
                                <Button color= 'green' onPress={()=>setScreen ('sheet')} title='Pract: Button Sheet'></Button>
                                <Button color= 'green' onPress={()=>setScreen ('registro')} title='Pract PRegistro'></Button>
                        </View>
                    </View>
        )        
    }

    
}

const styles =  StyleSheet.create({
    fondo: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    },
    botones: {
        marginTop:20,
        gap: 20,
    },
    titulo: {
        fontFamily: 'Times New Roman',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#c20d0dff'
    }
});