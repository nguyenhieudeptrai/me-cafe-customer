import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/home/home";
import MainScreen from "./screens/main/main";
import WelcomeScreen from "./screens/welcome/welcome";
import LoginScreen_Main from "./screens/login/login";
import LoginScreen_Register from "./screens/register/register";
import LoginScreen_Confirm from "./screens/confirmregister/confirmregister";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen_Main" component={LoginScreen_Main} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}