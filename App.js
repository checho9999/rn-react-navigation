import 'react-native-gesture-handler';
import React from 'react';
import Inicio from './views/Inicio';
import Nosotros from './views/Nosotros';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//aqui tendremos todos los metodos para la navegacion tipo Stack
const Stack = createStackNavigator(); 

//Cada hijo de Stack.Navigator equivaldria a una pagina o componente
//initialRouteName es para especificar la pagina inicial de la aplicacion por defecto
//el screenOptions(NavigationContainer) es para darte estilo global al header...
//el options(Stack.Screen) es para darle estilo personalizado a cada componente
const App = () => {
  return (
    <>
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName='Inicio'
          screenOptions={{
            headerStyle: {
                backgroundColor: '#F4511E'
              },
            headerTintColor: '#FFF',
            headerTitleAlign: 'center',
            headerTitleStyle: 'bold'
          }} 
        >

          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{
              title: 'Componente Principal',
              headerStyle: {
                backgroundColor: 'violet'
              },
              headerTitleAlign: 'left',
            }}
          />

          <Stack.Screen
            name='Nosotros'
            component={Nosotros}
            options={ ( { route } ) => ({
              title: route.params.clienteId
            }) }                       
          />

        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

export default App;
