import React, { useRef, useState } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function SheetScreen() {
  
  
  const modalSheetRef = useRef(null);
  
  const [abierto, setAbierto] = useState(false);

  const modalSnapPoints = ['50%'];
 

  
  const accionModalSheet = () => {
    if (abierto) {
      modalSheetRef.current?.close();
    } else {
      modalSheetRef.current?.expand();
    }
    setAbierto(!abierto);
  };
  

const persistentSheetRef = useRef(null);
  const persistentSnapPoints = ['15%', '50%'];

  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View style={styles.container}>
        <Text style={styles.title}>Tipos de BottomSheet</Text>

     
        <Button
          title={abierto ? 'Cerrar Modal BottomSheet' : 'Abrir Modal BottomSheet'}
          onPress={accionModalSheet}
          color="#1E90FF"
        />
        
        <BottomSheet ref={modalSheetRef} index={-1} snapPoints={modalSnapPoints}>
          
          
          <BottomSheetView style={styles.modalContent}>
            <Text style={styles.sheetTitle}>BottomSheet Modal</Text>
            <Text style={styles.sheetText}>
              Cubre parte de la pantalla y se cierra deslizando o tocando fuera.
            </Text>
          </BottomSheetView>
        </BottomSheet>

        
        
        <BottomSheet
          ref={persistentSheetRef}
          index={0} // visible por defecto
          snapPoints={persistentSnapPoints}
          enablePanDownToClose={false} // no se puede cerrar
          backgroundStyle={{ backgroundColor: '#fff' }}
          handleIndicatorStyle={{ backgroundColor: '#aaa' }}
        >
          <BottomSheetView style={styles.persistentContent}>
            <Text style={styles.sheetTitle}>BottomSheet Persistent</Text>
            <Text style={styles.sheetText}>
              Este panel permanece siempre visible y se puede expandir o contraer.
            </Text>
          </BottomSheetView>
        </BottomSheet>
      </View>

    </GestureHandlerRootView>
    
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF2F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 120,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2c3e50',
  },
  sheetText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
  modalContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  persistentContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});