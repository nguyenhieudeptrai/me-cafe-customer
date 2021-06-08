import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import LoginScreen from "./screens/home/home";
import VoucherScreen from "./screens/voucher/voucher";
=======
import HomeScreen from "./screens/home/home";
import MainScreen from "./screens/main/main";
import WelcomeScreen from "./screens/welcome/welcome";
import LoginScreen_Main from "./screens/login/login";
import LoginScreen_Register from "./screens/register/register";
import LoginScreen_Confirm from "./screens/confirmregister/confirmregister";
>>>>>>> cebfacb75d6f02ba9344e60ae84fa336224b2355

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator  initialRouteName="Voucher"> 
        <Stack.Screen name="Home" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Voucher" component={VoucherScreen} options={{ headerShown: false }}/>
=======
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen_Main" component={LoginScreen_Main} options={{ headerShown: false }} />
>>>>>>> cebfacb75d6f02ba9344e60ae84fa336224b2355
      </Stack.Navigator>
    </NavigationContainer>
  );
}