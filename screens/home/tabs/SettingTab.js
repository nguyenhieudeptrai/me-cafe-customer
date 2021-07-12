import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const SettingTab = ({ navigation }) => {
  const onLogoutPress = () => {
    navigation.navigate('Login')
  }
  return (
    <ScrollView style={styles.account}>

      <View style={styles.account_hotro}>
        <View style={styles.account_hotro_rectangle1501}></View>
        <Svg style={styles.account_hotro_line11} preserveAspectRatio="none" viewBox="-0.0009765625 -0.25 309.501953125 1.5" fill="transparent"><SvgPath d="M 309.5 0 L 0 1" /></Svg>
        <Svg style={styles.account_hotro_line12} preserveAspectRatio="none" viewBox="-0.0009765625 -0.25 309.501953125 1.5" fill="transparent"><SvgPath d="M 309.5 0 L 0 1" /></Svg>
        <Svg style={styles.account_hotro_line13} preserveAspectRatio="none" viewBox="-0.0009765625 -0.25 309.501953125 1.5" fill="transparent"><SvgPath d="M 309.5 0 L 0 1" /></Svg>
        <View style={styles.account_hotro_feedback}>
          <Svg style={styles.account_hotro_feedback_iconMaterialStar} preserveAspectRatio="none" viewBox="3 3 22.02587890625 20.924560546875" fill="rgba(231, 139, 36, 1)"><SvgPath d="M 14.01293849945068 19.81675910949707 L 20.81893730163574 23.92458534240723 L 19.01281547546387 16.18248748779297 L 25.02587890625 10.97336769104004 L 17.10757637023926 10.30157852172852 L 14.01293849945068 3 L 10.91830253601074 10.30157852172852 L 3 10.97336769104004 L 9.013064384460449 16.18248748779297 L 7.206942081451416 23.92458534240723 L 14.01293849945068 19.81675910949707 Z" /></Svg>
          <Text style={styles.account_hotro_feedback_anhGiaSKin}>Đánh giá sự kiện</Text>
        </View>
        <View style={styles.account_hotro_contact}>
          <Svg style={styles.account_hotro_contact_iconMaterialComment} preserveAspectRatio="none" viewBox="3 3 16.849609375 16.849365234375" fill="rgba(231, 139, 36, 1)"><SvgPath d="M 19.84094047546387 4.6849365234375 C 19.84094047546387 3.758221387863159 19.09114456176758 3 18.1644287109375 3 L 4.6849365234375 3 C 3.758221387863159 3 3 3.758221387863159 3 4.6849365234375 L 3 14.7945556640625 C 3 15.72126960754395 3.758221387863159 16.4794921875 4.6849365234375 16.4794921875 L 16.4794921875 16.4794921875 L 19.849365234375 19.849365234375 L 19.84094047546387 4.6849365234375 Z M 16.4794921875 13.10961818695068 L 6.369872093200684 13.10961818695068 L 6.369872093200684 11.42468166351318 L 16.4794921875 11.42468166351318 L 16.4794921875 13.10961818695068 Z M 16.4794921875 10.58221340179443 L 6.369872093200684 10.58221340179443 L 6.369872093200684 8.897276878356934 L 16.4794921875 8.897276878356934 L 16.4794921875 10.58221340179443 Z M 16.4794921875 8.054808616638184 L 6.369872093200684 8.054808616638184 L 6.369872093200684 6.369872093200684 L 16.4794921875 6.369872093200684 L 16.4794921875 8.054808616638184 Z" /></Svg>
          <Text style={styles.account_hotro_contact_lienHVaGop}>Liên hệ và góp ý</Text>
        </View>
        <View style={styles.account_hotro_setting}>
          <Text style={styles.account_hotro_setting_caiT0ef87a9f}>Cài đặt</Text>
          <Svg style={styles.account_hotro_setting_iconIonicIosSettings} preserveAspectRatio="none" viewBox="4.5 4.5 20.0771484375 20.082275390625" fill="rgba(231, 139, 36, 1)"><SvgPath d="M 22.91962623596191 14.53851318359375 C 22.91962623596191 13.44055080413818 23.60454559326172 12.50466823577881 24.5770263671875 12.12822437286377 C 24.32083511352539 11.05640316009521 23.89733695983887 10.05255222320557 23.33789825439453 9.14281177520752 C 23.00328063964844 9.289206504821777 22.64774894714355 9.367631912231445 22.28699111938477 9.367631912231445 C 21.62821388244629 9.367631912231445 20.96943664550781 9.116669654846191 20.46228218078613 8.614744186401367 C 19.68325042724609 7.835714340209961 19.51071357727051 6.690696239471436 19.92898559570312 5.739128589630127 C 19.02447509765625 5.179691314697266 18.01539421081543 4.756191253662109 16.94880104064941 4.5 C 16.57758712768555 5.467252731323242 15.63647556304932 6.157400608062744 14.53851318359375 6.157400608062744 C 13.44055080413818 6.157400608062744 12.49944019317627 5.467252731323242 12.12822437286377 4.5 C 11.05640316009521 4.756191253662109 10.05255222320557 5.179691314697266 9.14281177520752 5.739129066467285 C 9.566311836242676 6.685467720031738 9.388546943664551 7.835714340209961 8.609516143798828 8.614745140075684 C 8.107589721679688 9.116670608520508 7.44358491897583 9.367632865905762 6.784807205200195 9.367632865905762 C 6.42404842376709 9.367632865905762 6.068517684936523 9.294435501098633 5.73390007019043 9.142812728881836 C 5.179691314697266 10.05778026580811 4.756191253662109 11.06163215637207 4.5 12.13345241546631 C 5.467252731323242 12.50466823577881 6.157400608062744 13.44055080413818 6.157400608062744 14.54374122619629 C 6.157400608062744 15.64170360565186 5.472480773925781 16.57758712768555 4.505228519439697 16.95402908325195 C 4.761419773101807 18.02585029602051 5.184919834136963 19.02970123291016 5.744357585906982 19.9394416809082 C 6.078974723815918 19.79304695129395 6.434505462646484 19.7198486328125 6.790036201477051 19.7198486328125 C 7.448813438415527 19.7198486328125 8.107590675354004 19.97081184387207 8.614745140075684 20.47273826599121 C 9.388546943664551 21.24654006958008 9.566312789916992 22.39678573608398 9.148041725158691 23.34312629699707 C 10.05778121948242 23.90256309509277 11.06686115264893 24.32606315612793 12.13345336914062 24.58225440979004 C 12.50466918945312 23.6150016784668 13.44055080413818 22.93008422851562 14.53851318359375 22.93008422851562 C 15.63647556304932 22.93008422851562 16.57235908508301 23.6150016784668 16.94357299804688 24.58225440979004 C 18.01539421081543 24.32606315612793 19.01924705505371 23.90256309509277 19.92898559570312 23.34312629699707 C 19.51071357727051 22.39678764343262 19.68848037719727 21.25176811218262 20.46228218078613 20.47273826599121 C 20.96420669555664 19.97081184387207 21.62298583984375 19.7198486328125 22.28699111938477 19.7198486328125 C 22.64252281188965 19.7198486328125 23.00328254699707 19.79304695129395 23.33267021179199 19.9394416809082 C 23.89210891723633 19.02970123291016 24.31560707092285 18.02062034606934 24.57180023193359 16.95402908325195 C 23.60977363586426 16.57758712768555 22.91962623596191 15.64170360565186 22.91962623596191 14.53851318359375 Z M 14.58556938171387 18.71599960327148 C 12.26939105987549 18.71599960327148 10.40285491943359 16.8390064239502 10.40285491943359 14.53328514099121 C 10.40285491943359 12.22756385803223 12.26939105987549 10.35057163238525 14.58556938171387 10.35057163238525 C 16.90174674987793 10.35057163238525 18.76828384399414 12.22756385803223 18.76828384399414 14.53328514099121 C 18.76828384399414 16.8390064239502 16.90174674987793 18.71599960327148 14.58556938171387 18.71599960327148 Z" /></Svg>
        </View>
        <TouchableOpacity onPress={onLogoutPress} style={styles.account_hotro_dangxuat}>
          <Text style={styles.account_hotro_dangxuat_ngXut}>Đăng xuất</Text>
          <Svg style={styles.account_hotro_dangxuat_dangxuaticon} preserveAspectRatio="none" viewBox="0 0 18.3525390625 16.05859375" fill="rgba(231, 139, 36, 1)"><SvgPath d="M 6.882247924804688 0 L 6.882247924804688 2.294082641601562 L 16.05857849121094 2.294082641601562 L 16.05857849121094 13.76449584960938 L 6.882247924804688 13.76449584960938 L 6.882247924804688 16.05857849121094 L 18.3526611328125 16.05857849121094 L 18.3526611328125 0 L 6.882247924804688 0 Z M 4.588165283203125 4.588165283203125 L 0 8.029289245605469 L 4.588165283203125 11.47041320800781 L 4.588165283203125 9.17633056640625 L 13.76449584960938 9.17633056640625 L 13.76449584960938 6.882247924804688 L 4.588165283203125 6.882247924804688 L 4.588165283203125 4.588165283203125 Z" /></Svg>
        </TouchableOpacity>
        <Text style={styles.account_hotro_hTr}>Hỗ trợ</Text>
      </View>
      <View style={styles.account_info}>
        <View style={styles.account_info_rectangle1499}></View>
        <View style={styles.account_info_trnThienQu}><Text style={{ "marginTop": -4, "color": "rgba(9, 44, 76, 1)", "fontSize": 20, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 22 }}>Nguyễn Hiếu</Text></View>
        <Text style={styles.account_info_x0811xxxx}>08/11/xxxx</Text>
        <View style={styles.account_info_avt}>
          <Svg style={styles.account_info_avt_ellipse45} preserveAspectRatio="none" viewBox="0 0 84 84" fill="rgba(243, 243, 243, 1)"><SvgPath d="M 42 0 C 65.19596099853516 0 84 18.80404090881348 84 42 C 84 65.19596099853516 65.19596099853516 84 42 84 C 18.80404090881348 84 0 65.19596099853516 0 42 C 0 18.80404090881348 18.80404090881348 0 42 0 Z" /></Svg>
          <Svg style={styles.account_info_avt_icon} preserveAspectRatio="none" viewBox="0 0 83.65380859375 83.6539306640625" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-icon" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('../../../assets/avt.png')} x="0" y="0" width="83.65px" height="83.65px" /></Pattern></Defs><SvgPath d="M 41.82696533203125 0 C 64.92736053466797 0 83.6539306640625 18.72657012939453 83.6539306640625 41.82696533203125 C 83.6539306640625 64.92736053466797 64.92736053466797 83.6539306640625 41.82696533203125 83.6539306640625 C 18.72657012939453 83.6539306640625 0 64.92736053466797 0 41.82696533203125 C 0 18.72657012939453 18.72657012939453 0 41.82696533203125 0 Z" fill="url(#img-icon)" /></Svg>
        </View>
      </View>
      <View style={styles.account_editbtn}>
        <View style={styles.account_editbtn_rectangle1500}></View>
        <Text style={styles.account_editbtn_chnhSa}>Chỉnh sửa</Text>
      </View>
      <View style={styles.account_header}>
        <View style={styles.account_header_caiT}><Text style={{ "marginTop": -1.5, "color": "rgba(83, 71, 65, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "alignSelf": "center", "lineHeight": 16.5 }}>CÀI ĐẶT</Text></View>
      </View>
    </ScrollView>
  );

}
export default SettingTab;



const styles = StyleSheet.create({
  "account": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(220, 220, 220, 1)",
    "width": "100%",
    "height": "100%",
    "left": 0,
    "top": 0
  },
  "account_editbtn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 88,
    "height": 23,
    "left": 134,
    "top": 170
  },
  "account_editbtn_rectangle1500": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(231, 139, 36, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(231, 139, 36, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(231, 139, 36, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(231, 139, 36, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 88,
    "height": 23,
    "left": 0,
    "top": 0
  },
  "account_editbtn_chnhSa": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 17,
    "width": 65,
    "height": 19,
    "alignSelf": 'center',
    "top": 3
  },
  "account_hotro": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": "98%",
    "height": 191,
    "left": 16,
    "top": 252
  },
  "account_hotro_rectangle1501": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 6,
    "borderTopRightRadius": 6,
    "borderBottomLeftRadius": 6,
    "borderBottomRightRadius": 6,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": "98%",
    "height": 164,
    "left": 0,
    "top": 27
  },
  "account_hotro_line11": {
    "opacity": 1,
    "position": "absolute",

    "width": 309.5,
    "height": 1.5,
    "left": 48.5,
    "top": 66.25
  },
  "account_hotro_line12": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309.5,
    "height": 1.5,
    "left": 48,
    "top": 105.25
  },
  "account_hotro_line13": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 309.5,
    "height": 1.5,
    "left": 48,
    "top": 144.25
  },
  "account_hotro_feedback": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 142.44,
    "height": 20.92,
    "left": 16,
    "top": 40.54
  },
  "account_hotro_feedback_iconMaterialStar": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 22.03,
    "height": 20.92,
    "left": 0,
    "top": 0
  },
  "account_hotro_feedback_anhGiaSKin": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 17,
    "width": 120,
    "height": 20,
    "left": 32.44,
    "top": 1.96
  },
  "account_hotro_contact": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 135.01,
    "height": 18,
    "left": 19,
    "top": 80.63
  },
  "account_hotro_contact_iconMaterialComment": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 16.85,
    "height": 16.85,
    "left": 0,
    "top": 0
  },
  "account_hotro_contact_lienHVaGop": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 17,
    "width": 120,
    "height": 20,
    "left": 29.01,
    "top": 0.5
  },
  "account_hotro_setting": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 76.51,
    "height": 20.08,
    "left": 19.5,
    "top": 119
  },
  "account_hotro_setting_caiT0ef87a9f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 17,
    "width": 60,
    "height": 20,
    "left": 28.51,
    "top": 1.5
  },
  "account_hotro_setting_iconIonicIosSettings": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20.08,
    "height": 20.08,
    "left": 0,
    "top": 0
  },
  "account_hotro_dangxuat": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 95.1,
    "height": 18,
    "left": 20.9,
    "top": 158.25
  },
  "account_hotro_dangxuat_ngXut": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 17,
    "width": 68,
    "height": 20,
    "left": 30,
    "top": 0.5
  },
  "account_hotro_dangxuat_dangxuaticon": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 18.35,
    "height": 16.06,
    "left": 0,
    "top": 0.25
  },
  "account_hotro_hTr": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 17,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 17,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 1.7000000000000002,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 48,
    "height": 20,
    "left": 0,
    "top": 1.5
  },
  "account_info": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": "98%",
    "height": 154,
    "left": 15,
    "top": 90
  },
  "account_info_rectangle1499": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 6,
    "borderTopRightRadius": 6,
    "borderBottomLeftRadius": 6,
    "borderBottomRightRadius": 6,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": "98%",
    "height": 130,
    "left": 0,
    "top": 0
  },
  "account_info_trnThienQu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 22,
    "left": 119,
    "top": 43
  },
  "account_info_x0811xxxx": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 12,
    "paddingTop": 1.2000000000000002,
    "left": 122,
    "top": 62
  },
  "account_info_avt": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 84.1,
    "height": 84.1,
    "left": 21.9,
    "top": 22.9
  },
  "account_info_avt_ellipse45": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 84,
    "height": 84,
    "left": 0.1,
    "top": 0.1
  },
  "account_info_avt_icon": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 83.65,
    "height": 83.65,
    "left": 0,
    "top": 0
  },
  "account_header": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(249, 197, 91, 1)",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": "100%",
    "height": 72,
    "left": 0,
    "top": 0
  },
  "account_header_rectangle1492": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(249, 197, 91, 1)",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": 393,
    "height": 72,
    "left": 0,
    "top": 0
  },
  "account_header_caiT": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    "width": 70,
    "height": 18,
    "alignSelf": 'center',
    "top": 39
  }
});