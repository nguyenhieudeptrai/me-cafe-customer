import * as React from 'react';
import { View, Text, LogBox } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/home/HomeScreen";
import DetailShopScreen from "./screens/detail_shop/DetailShopScreen";
import WelcomeScreen from "./screens/welcome/WelcomeScreen";
import LoginScreen from "./screens/login/LoginScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import ConfirmRegisterScreen from "./screens/confirmregister/ConfirmRegisterScreen";
import ShopInfoScreen from "./screens/shopinfo/ShopInfoScreen";
import BookingScreen from "./screens/booking/BookingScreen";
import moment from "moment";
import "moment/locale/vi";

const Stack = createStackNavigator();
moment.locale("vi");
// LogBox.ignoreAllLogs();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DetailShop" component={DetailShopScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmRegister" component={ConfirmRegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ShopInfo" component={ShopInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}