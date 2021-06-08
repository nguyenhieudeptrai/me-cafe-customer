import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const LoginScreen = ({ navigation }) => {

  const onPressLogin = () => {
    navigation.navigate("Home")
  }
  const onPressRegister = () => {
    navigation.navigate("Register")
  }
  return (
    <ScrollView style={styles.login}>
      <View style={styles.login_group1}>
        <View style={styles.login_group1_group117}>
          <ReactImage source={require('./assets/logoPng.png')} style={styles.login_group1_group117_logoPng} />
          <ReactImage source={require('./assets/asset1.png')} style={styles.login_group1_group117_asset1} />
        </View>
        <Text style={styles.login_group1_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
      </View>
      <View style={styles.login_name}>
        <View style={styles.login_name_rectangle114}></View>
        <TextInput style={styles.login_name_tenNgNhpsInThoi} placeholder="Tên đăng nhập/Số điện thoại" />
        <Svg style={styles.login_name_icon} preserveAspectRatio="none" viewBox="-6120 -16089.998046875 15.99853515625 15.9990234375" fill="rgba(83, 71, 65, 1)"><SvgPath d="M -6120 -16073.9990234375 L -6120 -16075.998046875 C -6120 -16078.19921875 -6116.3984375 -16080 -6112.0009765625 -16080 C -6107.59912109375 -16080 -6104.00146484375 -16078.19921875 -6104.00146484375 -16075.998046875 L -6104.00146484375 -16073.9990234375 L -6120 -16073.9990234375 Z M -6115.99853515625 -16086 C -6115.99853515625 -16088.208984375 -6114.20947265625 -16089.998046875 -6112.0009765625 -16089.998046875 C -6109.7919921875 -16089.998046875 -6107.9990234375 -16088.208984375 -6107.9990234375 -16086 C -6107.9990234375 -16083.7919921875 -6109.7919921875 -16081.9990234375 -6112.0009765625 -16081.9990234375 C -6114.20947265625 -16081.9990234375 -6115.99853515625 -16083.7919921875 -6115.99853515625 -16086 Z" /></Svg>
      </View>
      <View style={styles.login_password}>
        <View style={styles.login_password_rectangle116}></View>
        <TextInput style={styles.login_password_x6e3b5542} placeholder="psassassa"></TextInput>
        <View style={styles.login_password_lock}>
          <Svg style={styles.login_password_lock_path49} preserveAspectRatio="none" viewBox="0 0 14 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 7 8 C 8.100000381469727 8 9 8.899999618530273 9 10 C 9 11.10000038146973 8.100000381469727 12 7 12 C 5.899999618530273 12 5 11.10000038146973 5 10 C 5 8.899999618530273 5.900000095367432 8 7 8 Z M 7 2 C 5.900000095367432 2 5 2.900000095367432 5 4 L 9 4 C 9 2.900000095367432 8.100000381469727 2 7 2 Z M 12 16 L 2 16 C 0.8999999761581421 16 0 15.10000038146973 0 14 L 0 6 C 0 4.900000095367432 0.8999999761581421 4 2 4 L 3 4 C 3 1.799999952316284 4.800000190734863 0 7 0 C 9.199999809265137 0 11 1.799999952316284 11 4 L 12 4 C 13.10000038146973 4 14 4.900000095367432 14 6 L 14 14 C 14 15.10000038146973 13.10000038146973 16 12 16 Z" /></Svg>
        </View>
      </View>
      <TouchableOpacity onPress={onPressLogin} style={styles.login_continue}>
        <Svg style={styles.login_continue_path643} preserveAspectRatio="none" viewBox="0 0 327 48" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 4 0 L 323 0 C 325.2091369628906 0 327 1.790860891342163 327 4 L 327 44 C 327 46.20914077758789 325.2091369628906 48 323 48 L 4 48 C 1.790860891342163 48 0 46.20914077758789 0 44 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z" /></Svg>
        <View style={styles.login_continue_ngNhp}>
          <Text style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "900", "fontStyle": "bold", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>
            ĐĂNG NHẬP
            </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressRegister} style={styles.login_register}>
        <Text style={styles.login_ngKTaiKhon}>Đăng ký tài khoản</Text>
      </TouchableOpacity> 
      <View style={styles.login_hoc}>
        <Text style={{ "marginTop": -1.5, "color": "rgba(51, 51, 51, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>Hoặc</Text>
      </View>
      <View style={styles.login_another}>
        <View style={styles.login_facebook}>
          <View style={styles.login_facebook_component1}>
            <View style={styles.login_facebook_component1_rectangle1458}></View>
            <Svg style={styles.login_g52720df5_g_path51} preserveAspectRatio="none" viewBox="0 0 16 10.20001220703125" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 16 4.400000095367432 L 16 5.900000095367432 L 14.5 5.900000095367432 L 14.5 7.400000095367432 L 13 7.400000095367432 L 13 5.800000190734863 L 11.5 5.800000190734863 L 11.5 4.400000095367432 L 13 4.400000095367432 L 13 2.900000095367432 L 14.5 2.900000095367432 L 14.5 4.400000095367432 L 16 4.400000095367432 Z M 5.099999904632568 4.400000095367432 L 9.899999618530273 4.400000095367432 C 9.899999618530273 4.700000286102295 10 4.900000095367432 10 5.200000286102295 C 10 8.100000381469727 8.100000381469727 10.20000076293945 5.099999904632568 10.20000076293945 C 2.299999952316284 10.19999980926514 0 7.900000095367432 0 5.099999904632568 C 0 2.299999952316284 2.299999952316284 0 5.099999904632568 0 C 6.5 0 7.599999904632568 0.5 8.5 1.299999952316284 L 7.099999904632568 2.700000047683716 C 6.699999809265137 2.299999952316284 6.099999904632568 1.900000095367432 5.099999904632568 1.900000095367432 C 3.399999856948853 1.900000095367432 1.899999856948853 3.300000190734863 1.899999856948853 5.100000381469727 C 1.899999856948853 6.90000057220459 3.299999713897705 8.300000190734863 5.099999904632568 8.300000190734863 C 7.099999904632568 8.300000190734863 7.899999618530273 6.900000095367432 8 6.100000381469727 L 5.099999904632568 6.100000381469727 L 5.099999904632568 4.400000095367432 Z" /></Svg>
          </View>
        </View>
        <View style={styles.login_facebook}>
          <View style={styles.login_facebook_component1}>
            <View style={styles.login_facebook_component1_rectangle1458}></View>
            <Svg style={styles.login_facebook_component1_path1} preserveAspectRatio="none" viewBox="80 0 8.3555908203125 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 85.42222595214844 16 L 85.42222595214844 8.711111068725586 L 87.91111755371094 8.711111068725586 L 88.26667785644531 5.8666672706604 L 85.42222595214844 5.8666672706604 L 85.42222595214844 4.088889122009277 C 85.42222595214844 3.288889169692993 85.68890380859375 2.666667222976685 86.84445190429688 2.666667222976685 L 88.35556030273438 2.666667222976685 L 88.35556030273438 0.08888889104127884 C 88 0.08888889104127884 87.11111450195313 0 86.13333129882813 0 C 84 0 82.4888916015625 1.333333373069763 82.4888916015625 3.733333110809326 L 82.4888916015625 5.866666793823242 L 80 5.866666793823242 L 80 8.711111068725586 L 82.4888916015625 8.711111068725586 L 82.4888916015625 16 L 85.42222595214844 16 Z" /></Svg>
          </View>
        </View>
      </View>
      <Text style={styles.login_quenMtKhu}>Quên mật khẩu</Text>
    </ScrollView>
  );
}

export default LoginScreen; const styles = StyleSheet.create({
  "login": {
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "login_group1": {
    "position": "absolute",
    "width": 268,
    "height": 191,
    alignSelf: "center",
    "top": 0
  },
  "login_group1_group117": {
    "position": "absolute", "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "login_group1_group117_logoPng": {
    "position": "absolute",
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "login_group1_group117_asset1": {
    "position": "absolute",
    "width": 118,
    "height": 38,
    "left": 134,
    "top": 121
  },
  "login_group1_giiPhapTTrcChNgi": {
    "position": "absolute", "color": "rgba(83, 71, 65, 1)",
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
  "login_continue": {
    "position": "absolute", "width": 327,
    "height": 48,
    alignSelf: "center",
    "top": 420
  },
  "login_continue_path643": {
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 200,
    "height": 48,
    "left": 60,
    "top": 0
  },
  "login_continue_ngNhp": {
    "opacity": 100,
    "position": "absolute",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "900",
    "lineHeight": 16.5,
    "width": 90,
    "height": 18,
    "left": 119,
    "top": 19
  },
  "login_password": {
    "position": "absolute",
    "width": 327,
    "height": 36,
    alignSelf: "center",
    "top": 340
  },
  "login_password_rectangle116": {
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
    "width": 327,
    "height": 1,
    "left": 0,
    "top": 35
  },
  "login_password_x6e3b5542": {
    "position": "absolute",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "width": 270,
    "height": 19,
    "left": 36,
    "top": 0,
    border: 0,
  },
  "login_password_lock": {
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 0,
    "top": 2
  },
  "login_password_lock_path49": {
    "position": "absolute",
    "width": 14,
    "height": 16,
    "left": 1,
    "top": 0
  },
  "login_name": {
    "position": "absolute", "width": 327,
    "height": 34,
    alignSelf: "center",
    "top": 270
  },
  "login_name_rectangle114": {
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
    "width": 327,
    "height": 1,
    "left": 0,
    "top": 33
  },
  "login_name_tenNgNhpsInThoi": {
    "position": "absolute",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 270,
    "height": 17,
    "left": 36,
    "top": 0
  },
  "login_name_icon": {
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_quenMtKhu": {
    "position": "relative", "color": "rgba(112, 112, 112, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 90,
    "height": 29,
    alignSelf: "center",
    "top": 630
  },
  "login_register": {
    "position": "absolute",
    alignSelf: "center",
    "top": 490
  },
  "login_ngKTaiKhon": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
  },
  "login_another": {
    "position": "absolute",
    "top": 550,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row"
  }, "login_g52720df5_g": {
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 20,
    "top": 20
  },
  "login_g52720df5_g_rectangle121": {
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_g52720df5_g_path51": {
    "position": "absolute",
    "width": 16,
    "height": 10.2,
    "left": 0,
    "top": 3
  },
  "login_facebook": {
    "width": 56,
    "height": 56,
    borderWidth: 1,
    borderRadius: 27,
    margin: 10
  },
  "login_facebook_component1": {
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 20,
    "top": 20
  },
  "login_facebook_component1_rectangle1458": {
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_facebook_component1_path1": {
    "position": "absolute",
    "width": 8.36,
    "height": 16,
    "left": 4,
    "top": 0
  },
  "login_hoc": {
    "position": "absolute", "color": "rgba(51, 51, 51, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    alignSelf: "center",
    "top": 530
  }
});