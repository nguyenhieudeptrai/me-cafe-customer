import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Line as SvgLine } from 'react-native-svg';
import { Circle as SvgCircle } from 'react-native-svg';
import { Rect as SvgRect } from 'react-native-svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from "./tabs/HomeTab";
import BookingTab from "./tabs/BookingTab";
import VoucherScreen from "./tabs/VoucherTab";
import SettingTab from './tabs/SettingTab';

const Tab = createBottomTabNavigator();


const HomeScreen = ({ navigation, route }) => {
  const initialRoute  = route?.params?.initialRoute;
  return (
    <View style={{ backgroundColor: "rgba(220, 220, 220, 1)", flex: 1 }}>
      <Tab.Navigator initialRouteName={initialRoute == null ? "Trang chủ" : initialRoute} tabBar={(props) => {
        const { state, descriptors, navigation } = props;
        return (
          <View style={styles.menu}>
            {state.routes.map((route, index) => {
              const label = route.name;

              const { options } = descriptors[route.key];
              const img = options.img;
              const isFocused = state.index === index;
              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };
              return (
                <TouchableOpacity
                  key={index}
                  accessibilityRole="button"
                  accessibilityStates={isFocused ? ['selected'] : []}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  style={{ flex: 1, alignItems: "center" }}
                >

                  <View style={styles.menu_item}>
                    <ReactImage source={img} style={styles.menu_item_icon} />
                    <Text style={styles.menu_item_title}>{label}</Text>
                  </View>

                </TouchableOpacity>
              )


            })}
          </View>
        )

      }}>
        <Tab.Screen
          name="Trang chủ"
          options={{
            img: require('../../assets/tabHome.png')
          }}
          component={HomeTab} />
        <Tab.Screen
          name="Đặt chỗ"
          options={{
            img: require('../../assets/booking.png')
          }}
          component={BookingTab} />
        <Tab.Screen
          name="Tích điểm"
          options={{
            img: require('../../assets/tab3.png')
          }}
          component={VoucherScreen} />
        <Tab.Screen
          name="Cài đặt"
          options={{
            img: require('../../assets/setting2.png')
          }}
          component={SettingTab} />
      </Tab.Navigator>
    </View>
  );
}

export default HomeScreen;



const styles = StyleSheet.create({

  "menu": {
    "backgroundColor": "#FFF",
    "borderTopLeftRadius": 30,
    "borderTopRightRadius": 30,
    "width": "100%",
    "height": 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  "menu_group57": {
    "position": "absolute",

    "width": 393,
    "height": 79,

  },
  "menu_group57_path5": {
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.3411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 393,
    "height": 79,


  },
  "menu_item": {
    flex: 1,
    "height": 51,
    alignItems: "center",
  },
  "menu_item_rectangle11": {
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "menu_item_icon": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 33,
    "height": 33,

  },
  "menu_item_title": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",

  },
  "menu_group7_rectangle12": {
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -29,
    "top": -14
  },
  "menu_group8_rectangle13": {
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "menu_group8_group12": {
    "position": "absolute",

    "width": 50,
    "height": 51,


  },
  "menu_group9_rectangle14": {
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -30,
    "top": -14
  },
  "menu_group9_group11": {
    "position": "absolute",

    "width": 36,
    "height": 51,


  },
});