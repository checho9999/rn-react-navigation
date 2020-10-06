import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

//const Inicio = ( props ) => {
const Inicio = ( { navigation } ) => {
      
    //estas son las props(navigation y route) que se generan automaticamente con NavigationContainer y Stack.Navigator
    //console.log(props);
    //console.log(navigation);

    //Definimos la informacion que sera pasada como parametro a Nosotros
    const informacion = {
        clienteId: 20,
        totalPago: 300
    }

    //redireccionamos hacia el componente Nosotros
    const visitarNosotros = () => {        
        navigation.navigate('Nosotros', informacion); 
    }    

    return (
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
            <Button 
                title='Ir a Nosotros'
                onPress={ () => visitarNosotros() }
            />
        </View>  
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#95dee3'
    }
  });
 
export default Inicio;