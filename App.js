import * as React from 'react';
import {  View,Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./screens/home/home";
import VoucherScreen from "./screens/voucher/voucher";

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Voucher"> 
        <Stack.Screen name="Home" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Voucher" component={VoucherScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}