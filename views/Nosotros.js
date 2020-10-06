import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

//const Nosotros = ( props ) => {
const Nosotros = ( { navigation, route } ) => {

    //estas son las props(navigation y route) que se generan automaticamente con NavigationContainer y Stack.Navigator
    //console.log(props);
    //console.log(navigation);

    const { clienteId } = route.params;

    //redireccionamos hacia el componente Inicio
    const visitarInicio = () => {        
        navigation.navigate('Inicio'); 
        //navigation.goBack(); //vuelve siempre a la pagina o componente anterior, sin importar el nombre
        //navigation.push('Inicio'); //la transicion, a diferencia de navigate, es de derecha a izquierda(creo que solo en IOS se ve este efecto)
    }    

    return (  
        <View style={styles.contenedor}>
            <Text> {clienteId} </Text>
            <Button 
                title='Volver'
                onPress={ () => visitarInicio() }
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9e6ba'
    }
  });
 
export default Nosotros;