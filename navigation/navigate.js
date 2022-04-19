import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/Signup';

import dashboard from '../screens/dashboard';
import Data from '../screens/product';
 import Home from '../screens/home';



const Stack = createNativeStackNavigator();

function NavigateApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        
      <Stack.Screen   options={{ headerShown: false }} name="home" component={Home} /> 
      <Stack.Screen    name="signup" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="product" component={Data} /> 
         <Stack.Screen name="dashboard" component={dashboard} />
 
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default NavigateApp;