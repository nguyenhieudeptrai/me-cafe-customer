import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const QRCodeVoucherPopUp = ({close}) => {
  return (
    <View>
      <View style={styles.qrcodevoucher}>
        <TouchableOpacity onPress={()=>close()} style={styles.qrcodevoucher_group116_group115_component5}>
          <Svg style={styles.qrcodevoucher_group116_group115_component5_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z" /></Svg>
        </TouchableOpacity>
        <Text style={styles.qrcodevoucher_group116_group115_uAiCaBn}>ƯU ĐÃI CỦA BẠN</Text>
      </View>
      <ReactImage source={require('../../../../assets/image3.png')} style={styles.qrcodevoucher_qr_code} />
      <Text style={styles.qrcodevoucher_end_date}>Ngày hết hạn: 30/07/2021</Text>
      <Text style={styles.qrcodevoucher_description}>Lưu ý:
      - Mã chỉ áp dụng cho 1 lần sử dụng.
      - Không áp dụng cho các chương trình khuyến mãi song song.
        - Không có giá trị quy đổi thành tiền mặt.</Text>
    </View>
  );

}

export default QRCodeVoucherPopUp;

const styles = StyleSheet.create({
  "qrcodevoucher": {
    "width":"100%"
  },
  "qrcodevoucher_group116_group115_uAiCaBn": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    alignSelf:"center"
  },
  "qrcodevoucher_group116_group115_component5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 30,
    "height": 30,
    "left": 17,
    "top": 0,
  },
  "qrcodevoucher_group116_group115_component5_path10": {
    "opacity": 1,
    "position": "absolute",
    "transform":[{rotate:'180deg'}],
    "width": 17,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "qrcodevoucher_qr_code": {
    "width": 300,
    "height": 300,
    alignSelf: "center"
  },
  "qrcodevoucher_end_date": {
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    alignSelf: "center",
    marginBottom:10
  },
  "qrcodevoucher_description": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "center",
  }
});