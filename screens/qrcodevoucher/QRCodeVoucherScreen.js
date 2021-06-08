import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const QRCodeVoucherScreen = () => {
    return (
    <ScrollView style={styles.qrcodevoucher}>
        <View style={styles.qrcodevoucher_group116}>
            <View style={styles.qrcodevoucher_group116_group115}>
                <View style={styles.qrcodevoucher_group116_group115_rectangle1470}></View>
                <Text style={styles.qrcodevoucher_group116_group115_uAiCaBn}>ƯU ĐÃI CỦA BẠN</Text>
                <View style={styles.qrcodevoucher_group116_group115_component5}>
                    <Svg style={styles.qrcodevoucher_group116_group115_component5_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
                </View>
                <ReactImage source={require('./assets/image3.png')} style={styles.qrcodevoucher_group116_group115_image3} />
            </View>
            <Text style={styles.qrcodevoucher_group116_ngayHtHn30072021}>Ngày hết hạn: 30/07/2021</Text>
            <Text style={styles.qrcodevoucher_group116_luMaChApDngCho1LnSDngKhongApDngChoCacChngTrinhKhuynMaiSongSongKhongCoGiaTrQuyIThanhTinMt}>Lưu ý:
        - Mã chỉ áp dụng cho 1 lần sử dụng.
        - Không áp dụng cho các chương trình khuyến mãi song song.
        - Không có giá trị quy đổi thành tiền mặt.</Text>
        </View>
    </ScrollView>
    );
  
}

export default QRCodeVoucherScreen;

QRCodeVoucherScreen.propTypes = {

}

QRCodeVoucherScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "qrcodevoucher": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(219, 219, 219, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "qrcodevoucher_group116": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": "auto",
    "height": "auto",
    "left": 25,
    "top": 181,
    "right": 24,
    "bottom": 334
  },
  "qrcodevoucher_group116_group115": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 344,
    "height": 336,
    "left": 0,
    "top": 0
  },
  "qrcodevoucher_group116_group115_rectangle1470": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": 344,
    "height": 336,
    "left": 0,
    "top": 0
  },
  "qrcodevoucher_group116_group115_uAiCaBn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 116,
    "height": 18,
    "left": 114,
    "top": 21
  },
  "qrcodevoucher_group116_group115_component5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 17,
    "top": 14
  },
  "qrcodevoucher_group116_group115_component5_path10": {
    "opacity": 1,
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "qrcodevoucher_group116_group115_image3": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 146,
    "height": 146,
    "left": 99,
    "top": 50
  },
  "qrcodevoucher_group116_ngayHtHn30072021": {
    "opacity": 0.7799999713897705,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 154,
    "height": 19,
    "left": 95,
    "top": 229
  },
  "qrcodevoucher_group116_luMaChApDngCho1LnSDngKhongApDngChoCacChngTrinhKhuynMaiSongSongKhongCoGiaTrQuyIThanhTinMt": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 299,
    "height": 60,
    "left": 20,
    "top": 263
  }
});