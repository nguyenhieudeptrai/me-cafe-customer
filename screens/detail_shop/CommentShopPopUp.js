import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const CommentShopPopUp = ({close}) => {

  return (
    <View style={styles.commentshop}>
      <View style={styles.commentshop_anhGiaTxt}>
        <TouchableOpacity onPress={()=>close()} style={styles.commentshop_anhGiaTxt_component3}>
          <Svg style={styles.commentshop_anhGiaTxt_component3_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z" /></Svg>
        </TouchableOpacity>
        <Text style={styles.commentshop_anhGiaTxt_anhGiaKhachHang}>ĐÁNH GIÁ KHÁCH HÀNG</Text>
      </View>
      <ReactImage source={require('../../assets/x2.png')} style={styles.commentshop_x3} />
      <View style={styles.commentshop_group45}>
        <View style={styles.commentshop_group45_messagec41c5359}>
          <Svg style={styles.commentshop_group45_messagec41c5359_path1127b8c95f5} preserveAspectRatio="none" viewBox="0 -2 261.189697265625 32.46502685546875" fill="rgba(254, 205, 151, 1)"><SvgPath d="M 9.584942817687988 30.46502685546875 L 261.189697265625 30.46502685546875 L 261.189697265625 -2 L 9.584942817687988 -2 L 9.584942817687988 9.594653129577637 L 0 14.23251247406006 L 9.584942817687988 18.8703727722168 L 9.584942817687988 30.46502685546875 Z" /></Svg>
          <Text style={styles.commentshop_group45_messagec41c5359_ngDngTinLiKhiCBookTrcChKhiIOng}>Ứng dụng tiện lợi khi được book trước chỗ khi đi đông</Text>
        </View>
        <ReactImage source={require('../../assets/rectangle1472.png')} style={styles.commentshop_group46_rectangle1472} />
        <View style={styles.commentshop_group45_group36}>
          <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group45_group36_path15845c728c9} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group45_group36_path159fc09b523} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group45_group36_path16065ae2b0e} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group45_group36_path16149021f86} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
        </View>
      </View>
      <View style={styles.commentshop_group46}>
        <View style={styles.commentshop_group46_message}>
          <Svg style={styles.commentshop_group46_message_path112} preserveAspectRatio="none" viewBox="0 -2 261.189697265625 31.12445068359375" fill="rgba(254, 205, 151, 1)"><SvgPath d="M 9.584942817687988 29.12445068359375 L 261.189697265625 29.12445068359375 L 261.189697265625 -2 L 9.584942817687988 -2 L 9.584942817687988 9.115875244140625 L 0 13.56222534179688 L 9.584942817687988 18.00857543945313 L 9.584942817687988 29.12445068359375 Z" /></Svg>
          <Text style={styles.commentshop_group46_message_quanPNhanVienNhitTinh}>Quán đẹp, nhân viên nhiệt tình</Text>
        </View>
        <ReactImage source={require('../../assets/rectangle1472.png')} style={styles.commentshop_group46_rectangle1472} />
        <View style={styles.commentshop_group46_group44}>
          <Svg style={styles.commentshop_group46_group44_path157} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group46_group44_path158} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group46_group44_path159} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group46_group44_path160} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
          <Svg style={styles.commentshop_group46_group44_path161} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
        </View>
      </View>
      <View style={styles.commentshop_group49}>
        <View style={styles.commentshop_group49_group48}>
          <View style={styles.commentshop_group49_group48_rectangle1473}></View>
          <View style={styles.commentshop_group49_group48_rectangle1474}></View>
        </View>
        <TextInput style={styles.commentshop_group49_nhnXetCaBn} placeholder="Nhận xét của bạn…" />
        <Text style={styles.commentshop_group49_post}>Post</Text>
      </View>
    </View>
  );
}
export default CommentShopPopUp;


const styles = StyleSheet.create({
  "commentshop": {
  },
  "commentshop_anhGiaTxt": {
    "margin": 1,
    "width": "100%",
    "height": 30,
  },
  "commentshop_anhGiaTxt_component3": {
    "width": 16,
    "height": 16,
  },
  "commentshop_anhGiaTxt_component3_path10": {
    "transform":[{rotate:'180deg'}],
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "commentshop_anhGiaTxt_anhGiaKhachHang": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 40,
    "top": 0
  },
  "commentshop_x3": {
    "width": 300,
    "height": 200,
    alignSelf: "center",
    marginBottom: 20
  },
  "commentshop_pagination": {
    "backgroundColor": "transparent",
    "width": 54,
    "height": 6,
    "left": 170,
    "top": 457
  },
  "commentshop_pagination_ellipse8": {
    "width": 6,
    "height": 6,
    "left": 0,
    "top": 0
  },
  "commentshop_pagination_ellipse9": {
    "width": 6,
    "height": 6,
    "left": 16,
    "top": 0
  },
  "commentshop_pagination_ellipse10": {
    "width": 6,
    "height": 6,
    "left": 32,
    "top": 0
  },
  "commentshop_pagination_ellipse11": {
    "width": 6,
    "height": 6,
    "left": 48,
    "top": 0
  },
  "commentshop_group45": {
    "width": 298.89,
    "height": 32.47,
    alignSelf: "center",
    marginTop: 15,
  },
  "commentshop_group45_messagec41c5359": {

    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 261.19,
    "height": 32.47,
    "left": 35,
    "top": 0
  },
  "commentshop_group45_messagec41c5359_path1127b8c95f5": {
    "position": "absolute",
    "width": 261.19,
    "height": 32.47,
    "left": 0,
    "top": 0
  },
  "commentshop_group45_messagec41c5359_ngDngTinLiKhiCBookTrcChKhiIOng": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 12,
    "left": 15.09,
    "top": 3.97
  },
  "commentshop_group45_rectangle1472c74ae538": {
    "position": "absolute",
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "width": 24,
    "height": 25,
    "left": 3.03,
    "top": 0
  },
  "commentshop_group45_group36": {

    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 30.05,
    "height": 4.51,
    "left": 5,
    "top": 27.64
  },
  "commentshop_group45_group36_path1574cb28200": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 0,
    "top": 0
  },
  "commentshop_group45_group36_path15845c728c9": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 6.33,
    "top": 0
  },
  "commentshop_group45_group36_path159fc09b523": {
    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 12.65,
    "top": 0
  },
  "commentshop_group45_group36_path16065ae2b0e": {
    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 18.98,
    "top": 0
  },
  "commentshop_group45_group36_path16149021f86": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 25.31,
    "top": 0
  },
  "commentshop_group46": {
    "width": 299.89,
    "height": 31.12,
    alignSelf: "center",
    marginTop: 15,
  },
  "commentshop_group46_message": {

    "position": "absolute",
    "width": 261.19,
    "height": 31.12,
    "left": 35,
    "top": 0
  },
  "commentshop_group46_message_path112": {

    "position": "absolute",
    "width": 261.19,
    "height": 31.12,
    "left": 0,
    "top": 0
  },
  "commentshop_group46_message_quanPNhanVienNhitTinh": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 24,
    "left": 15.09,
    "top": 3.56
  },
  "commentshop_group46_rectangle1472": {
    "position": "absolute",
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "width": 24,
    "height": 24,
    "left": 7,
    "top": 0.12
  },
  "commentshop_group46_group44": {

    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 30.05,
    "height": 4.51,
    "left": 5,
    "top": 26.62
  },
  "commentshop_group46_group44_path157": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 0,
    "top": 0
  },
  "commentshop_group46_group44_path158": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 6.33,
    "top": 0
  },
  "commentshop_group46_group44_path159": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 12.65,
    "top": 0
  },
  "commentshop_group46_group44_path160": {
    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 18.98,
    "top": 0
  },
  "commentshop_group46_group44_path161": {
    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 25.31,
    "top": 0
  },
  "commentshop_group49": {
    "width": 252,
    "height": 30,
    alignSelf: "center",
    marginTop: 15,
    paddingLeft: 15
  },
  "commentshop_group49_group48": {

    "position": "absolute",
    "width": 252,
    "height": 19,
    top: 5,
    zIndex:-1
  },
  "commentshop_group49_group48_rectangle1473": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 11,
    "borderTopRightRadius": 11,
    "borderBottomLeftRadius": 11,
    "borderBottomRightRadius": 11,
    "width": 206,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "commentshop_group49_group48_rectangle1474": {

    "position": "absolute",
    "backgroundColor": "rgba(191, 151, 104, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 11,
    "borderTopRightRadius": 11,
    "borderBottomLeftRadius": 11,
    "borderBottomRightRadius": 11,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 40,
    "height": 19,
    "left": 212,
    "top": 0
  },
  "commentshop_group49_nhnXetCaBn": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "commentshop_group49_post": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 12,
    "left": 222,
    "top": 8
  }
});