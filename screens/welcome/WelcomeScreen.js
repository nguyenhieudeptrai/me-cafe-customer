import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


const WelcomeScreen = () => {
    
    return (
    <ScrollView style={styles.welcome}>
        <View style={styles.welcome_group138}>
            <ReactImage source={require('./assets/logoPng.png')} style={styles.welcome_group138_logoPng} />
            <ReactImage source={require('./assets/asset1.png')} style={styles.welcome_group138_asset1} />
        </View>
        <Text style={styles.welcome_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
        <ReactImage  source={require('./assets/coffeebeansandcoffeecupbackgroundConverted.png')} style={styles.welcome_coffeebeansandcoffeecupbackgroundConverted} />
    </ScrollView>
    );

}
export default WelcomeScreen;


const styles = StyleSheet.create({
  "welcome": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "welcome_group138": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 268,
    "height": 191,
    "left": "50%",
    "top": 150
  },
  "welcome_group138_logoPng": {
    "opacity": 1,
    "position": "absolute",
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "welcome_group138_asset1": {
    "opacity": 1,
    "position": "absolute",
    "width": 118,
    "height": 38,
    "left": 134,
    "top": 120
  },
  "welcome_giiPhapTTrcChNgi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 189,
    "height": 15,
    "left": 102,
    "top": 320
  },
  "welcome_coffeebeansandcoffeecupbackgroundConverted": {
    "opacity": 1,
    "position": "absolute",
    "width": "auto",
    "height": 236,
    "top":430,
    "bottom": 0
  }
});