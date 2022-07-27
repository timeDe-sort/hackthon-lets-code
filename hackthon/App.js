import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './telas/Login';
import TelaInicial from './telas/TelaInicial';
import Selecao from './telas/Selecao';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Selecao'>
      <Stack.Screen name="Selecao" component={Selecao} />
      <Stack.Screen name="Tela de Login" component={Login} />
      <Stack.Screen name="TelaInicial" component={TelaInicial} />

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>

      <MyStack />
      
    </NavigationContainer>
  );
}
