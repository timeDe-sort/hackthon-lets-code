import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';
import SelectRole from './screens/SelectRole';
import LoginOrRegister from './screens/LoginOrRegister';
import RegisterUser from './screens/Register';
import RegisterServiceCenter from './screens/RegisterServiceCenter';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName='SelectRole'>
      <Stack.Screen name="SelectRole" component={SelectRole} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginOrRegister" component={LoginOrRegister} />
      <Stack.Screen name="RegisterUser" component={RegisterUser} />
      <Stack.Screen name="RegisterServiceCenter" component={RegisterServiceCenter} />
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
