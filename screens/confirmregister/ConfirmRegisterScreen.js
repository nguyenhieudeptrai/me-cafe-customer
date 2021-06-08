import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';
   



const ConfirmRegisterScreen = ({navigation}) => {

  const onPressBack=()=>{
    navigation.goBack();
  }

    return (
    <ScrollView style={styles.confirmregister}>
        <TouchableOpacity style={styles.confirmregister_group134} onPress={onPressBack}>
            <View style={styles.confirmregister_group134_group133}>
                <View style={styles.confirmregister_group134_group133_component6}>
                    <Svg style={styles.confirmregister_group134_group133_component6_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
                </View>
            </View>
            <Text style={styles.confirmregister_group134_quayLi}>Quay lại </Text>
        </TouchableOpacity>
        <View style={styles.confirmregister_group1}>
            <View style={styles.confirmregister_group1_group117}>
                <ReactImage source={require('./assets/logoPng.png')} style={styles.confirmregister_group1_group117_logoPng} />
                <ReactImage source={require('./assets/asset1.png')} style={styles.confirmregister_group1_group117_asset1} />
            </View>
            <Text style={styles.confirmregister_group1_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
        </View>
        <View style={styles.confirmregister_group139}>
            <Text style={styles.confirmregister_group139_xacNhnMaOtp}>Xác nhận Mã OTP</Text>
        </View>
        <Text style={styles.confirmregister_mtMaXacThcGm6ChSACGiNSInThoiCaBn}>Một mã xác thực gồm 6 chữ số đã được gửi đến số điện thoại của bạn</Text>
        <View style={styles.confirmregister_group140}>
            <View style={styles.confirmregister_group140_rectangle1485}></View>
            <View style={styles.confirmregister_group140_rectangle1486}></View>
            <View style={styles.confirmregister_group140_rectangle1487}></View>
            <View style={styles.confirmregister_group140_rectangle1488}></View>
            <View style={styles.confirmregister_group140_rectangle1489}></View>
            <View style={styles.confirmregister_group140_rectangle1490}></View>
        </View>
        <Text style={styles.confirmregister_nhpMaTipTc}>Nhập mã để tiếp tục</Text>
        <Text style={styles.confirmregister_bnKhongNhanCMaGiLi}>Bạn không nhận được mã? Gửi lại</Text>
        <View style={styles.confirmregister_continue}>
            <View style={styles.confirmregister_continue_group135}>
                <View style={styles.confirmregister_continue_group135_group142}>
                    <Svg style={styles.confirmregister_continue_group135_group142_path643} preserveAspectRatio="none" viewBox="0 0 128 33" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.565749287605286 0 L 126.4342575073242 0 C 127.2989883422852 0 128 1.231216907501221 128 2.75 L 128 30.25 C 128 31.76878356933594 127.2989883422852 33 126.4342575073242 33 L 1.565749287605286 33 C 0.7010097503662109 33 0 31.76878356933594 0 30.25 L 0 2.75 C 0 1.231216907501221 0.7010097503662109 0 1.565749287605286 0 Z"  /></Svg>
                    <View style={styles.confirmregister_continue_group135_group142_xacThc}><Text style={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>Xác thực</Text></View>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}
export default ConfirmRegisterScreen;

const styles = StyleSheet.create({
  "confirmregister": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "confirmregister_group134": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 78,
    "height": 16,
    "left": 19,
    "top": 39
  },
  "confirmregister_group134_group133": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "confirmregister_group134_group133_component6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "confirmregister_group134_group133_component6_path10": {
    "opacity": 1,
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "confirmregister_group134_quayLi": {
    "opacity": 1,
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
  "confirmregister_group1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 200,
    "height": 200,
    "left": 100,
    "top": 30
  },
  "confirmregister_group1_group117": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 173,
    "height": 124,
    "left": 0,
    "top": 0
  },
  "confirmregister_group1_group117_logoPng": {
    "opacity": 1,
    "position": "absolute",
    "width": 173,
    "height": 124,
    "left": 0,
    "top": 0
  },
  "confirmregister_group1_group117_asset1": {
    "opacity": 1,
    "position": "absolute",
    "width": 76,
    "height": 25,
    "left": 87,
    "top": 78
  },
  "confirmregister_group1_giiPhapTTrcChNgi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 300,
    "height": 15,
    "left": 5,
    "top": 114
  },
  "confirmregister_group139": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 120,
    "height": 18,
    "left": 110,
    "top": 200
  },
  "confirmregister_group139_xacNhnMaOtp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 25,
    "left": 0,
    "top": 0
  },
  "confirmregister_mtMaXacThcGm6ChSACGiNSInThoiCaBn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 11,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 269,
    "height": 29,
    "left": 55,
    "top": 230
  },
  "confirmregister_group140": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 240,
    "height": 33,
    "left": 40,
    "top": 330
  },
  "confirmregister_group140_rectangle1485": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 42,
    "height": 43,
    "left": 0,
    "top": 0
  },
  "confirmregister_group140_rectangle1486": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 42,
    "height": 43,
    "left": 50,
    "top": 0
  },
  "confirmregister_group140_rectangle1487": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 42,
    "height": 43,
    "left": 100,
    "top": 0
  },
  "confirmregister_group140_rectangle1488": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 42,
    "height": 43,
    "left": 150,
    "top": 0
  },
  "confirmregister_group140_rectangle1489": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 42,
    "height": 43,
    "left": 200,
    "top": 0
  },
  "confirmregister_group140_rectangle1490": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 42,
    "height": 43,
    "left": 250,
    "top": 0
  },
  "confirmregister_nhpMaTipTc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 269,
    "height": 29,
    "left": 55,
    "top": 300
  },
  "confirmregister_bnKhongNhanCMaGiLi": {
    "opacity": 0.8399999737739563,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 269,
    "height": 29,
    "left": 58,
    "top": 390
  },
  "confirmregister_continue": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 128,
    "height": 33,
    "left": 120,
    "top": 420
  },
  "confirmregister_continue_group135": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmregister_continue_group135_group142": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmregister_continue_group135_group142_path643": {
    "opacity": 1,
    "position": "absolute",
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmregister_continue_group135_group142_xacThc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    "width": 60,
    "height": 18,
    "left": 35,
    "top": 11
  }
});