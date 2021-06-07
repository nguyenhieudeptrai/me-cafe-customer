import * as React from 'react';
import {  View,Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/login/login";
import HomeScreen from "./screens/home/home";
import MainScreen from "./screens/main/main";

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}