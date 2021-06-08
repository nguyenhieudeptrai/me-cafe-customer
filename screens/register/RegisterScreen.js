import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const RegisterScreen = ({navigation}) => {

  const onPressRegister=()=>{
    navigation.navigate("ConfirmRegister");
  }
  const onPressBack=()=>{
    navigation.goBack();
  }

  return (
    <View style={styles.register}>
      <TouchableOpacity style={styles.register_group134} onPress={onPressBack}>
        <View style={styles.register_group134_group133}>
          <View style={styles.register_group134_group133_component6}>
            <Svg style={styles.register_group134_group133_component6_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z" /></Svg>
          </View>
        </View>
        <Text style={styles.register_group134_quayLi}>Quay lại </Text>
      </TouchableOpacity>
      <View style={styles.register_group1}>
        <View style={styles.register_group1_group117}>
          <ReactImage source={require('./assets/logoPng.png')} style={styles.register_group1_group117_logoPng} />
          <ReactImage source={require('./assets/asset1.png')} style={styles.register_group1_group117_asset1} />
        </View>
        <Text style={styles.register_group1_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
      </View>
      
      <View style={styles.register_group137}>
        <View style={styles.register_group137_group136}>
          <View style={styles.register_group137_group136_continue}>
            <Svg style={styles.register_group137_group136_continue_path643} preserveAspectRatio="none" viewBox="-1.5 -1.5 330 51" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 4 0 L 323 0 C 325.2091369628906 0 327 1.790860891342163 327 4 L 327 44 C 327 46.20914077758789 325.2091369628906 48 323 48 L 4 48 C 1.790860891342163 48 0 46.20914077758789 0 44 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z" /></Svg>
          </View>
          <View style={styles.register_group137_group136_group156}>
            <View style={styles.register_group137_group136_group156_x84}><Text style={{ "marginTop": -1.5, "color": "rgba(0, 0, 0, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>+84</Text></View>
            <View style={styles.register_group137_group136_group156_nhpSInThoi}>
              <TextInput style={{ "marginTop": -1.5, "fontSize": 15, "fontWeight": "bold", "fontStyle": "normal", "fontFamily": "Roboto",  "lineHeight": 16.5 }} placeholder="Nhập số điện thoại..." />
            </View>
            <Svg style={styles.register_group137_group136_group156_vnLogo} preserveAspectRatio="none" viewBox="0 0 26 26" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-vnLogo" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/vnLogo.png')} x="0" y="0" width="26.00px" height="26.00px" /></Pattern></Defs><SvgPath d="M 13 0 C 20.17970085144043 0 26 5.820298671722412 26 13 C 26 20.17970085144043 20.17970085144043 26 13 26 C 5.820298671722412 26 0 20.17970085144043 0 13 C 0 5.820298671722412 5.820298671722412 0 13 0 Z" fill="url(#img-vnLogo)" /></Svg>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.register_continue561b655c} onPress={onPressRegister}>
        <View style={styles.register_continue561b655c_group135}>
          <Svg style={styles.register_continue561b655c_group135_path6432dd58261} preserveAspectRatio="none" viewBox="0 0 128 33" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.565749287605286 0 L 126.4342575073242 0 C 127.2989883422852 0 128 1.231216907501221 128 2.75 L 128 30.25 C 128 31.76878356933594 127.2989883422852 33 126.4342575073242 33 L 1.565749287605286 33 C 0.7010097503662109 33 0 31.76878356933594 0 30.25 L 0 2.75 C 0 1.231216907501221 0.7010097503662109 0 1.565749287605286 0 Z" /></Svg>
          <View style={styles.register_continue561b655c_group135_ngK}><Text data-layer="166cb8ab-87b5-495e-af8f-f2c49223f670" style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>ĐĂNG  KÝ</Text></View>
        </View>
      </TouchableOpacity>

      <ReactImage source={require('./assets/coffeebeansandcoffeecupbackgroundConverted.png')} style={styles.register_coffeebeansandcoffeecupbackgroundConverted} />
    </View>
  );
}
export default RegisterScreen;



const styles = StyleSheet.create({
  "register": {
    flex: 1
  },
  "register_group1": {
    "width": 268,
    "height": 191,
    alignSelf: "center",
  },
  "register_group1_group117": {
    "position": "absolute", "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "register_group1_group117_logoPng": {
    "position": "absolute",
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "register_group1_group117_asset1": {
    "position": "absolute",
    "width": 118,
    "height": 38,
    "left": 130,
    "top": 121
  },
  "register_group1_giiPhapTTrcChNgi": {
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
    "left": 39,
    "top": 176
  },
  "register_continue561b655c": {
    "width": 128,
    "height": 33,
    marginTop: "10%",
    alignSelf: "center",
  },
  "register_continue561b655c_group135": {
    "position": "absolute", "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "register_continue561b655c_group135_path6432dd58261": {
    "position": "absolute",
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "register_continue561b655c_group135_ngK": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    "width": 67,
    "height": 18,
    "left": 31,
    "top": 11
  },
  "register_group134": {
    "width": "100%",
    "height": 16,
    marginTop: 40,
    marginLeft: 15,
    alignSelf: "center",
  },
  "register_group134_group133": {
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "register_group134_group133_component6": {
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "register_group134_group133_component6_path10": {
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "register_group134_quayLi": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 49,
    "height": 15,
    "left": 29,
    "top": 1
  },
  "register_group137": {
    "width": 327,
    "height": 48,
    marginTop: "10%",
    alignSelf: "center",
  },
  "register_group137_group136": {
    "position": "absolute", "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "register_group137_group136_continue": {
    "position": "absolute", "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "register_group137_group136_continue_path643": {
    "position": "absolute",
    "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "register_group137_group136_group156": {
    "position": "absolute",
     "width": 215,
    "height": 26,
    "left": 18,
    "top": 11
  },
  "register_group137_group136_group156_x84": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    "width": 26,
    "height": 18,
    "left": 30,
    "top": 7
  },
  "register_group137_group136_group156_nhpSInThoi": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(204, 204, 204, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    "width": "80%",
    "height": 18,
    "left": 77,
    "top": 7
  },
  "register_group137_group136_group156_vnLogo": {
    "position": "absolute",
    "width": 26,
    "height": 26,
    "left": 0,
    "top": 0
  },
  "register_coffeebeansandcoffeecupbackgroundConverted": {
    "position": "absolute",
    "width": "100%",
    "height": 236,
    "left": 0,
    "bottom": 0
  }
});