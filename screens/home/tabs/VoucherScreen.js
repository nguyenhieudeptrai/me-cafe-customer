import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const data = [
  {
    title: "title",
    description: "descrr.....",
    endDate: "ngay het han",
    head: "50k",
    type: "delivery",
  },
  {
    title: "title",
    description: "descrr.....",
    endDate: "ngay het han",
    head: "50k",
    type: "delivery",
  }, 
];

const nameUser = "Nguyễn Hiếu Đẹp Trai";

const VoucherTab = () => {
  return (
    <View style={styles.voucher}>
      <View style={styles.header}>
        <Text style={styles.header_title}>THẺ THÀNH VIÊN / ƯU ĐÃI</Text>
      </View>
      <View style={styles.voucher_progress}>
        <View style={styles.voucher_rectangle1477}></View>
        <View style={styles.voucher_rectangle1476}></View>
        <View style={styles.voucher_group118}>
          <ReactImage source={require('../assets/logoPng.png')} style={styles.voucher_group118_logoPng} />
          <ReactImage source={require('../assets/asset1.png')} style={styles.voucher_group118_asset1} />
        </View>
        <View style={styles.voucher_user_name}>
          <Text style={{ "marginTop": -5, "color": "rgba(255, 255, 255, 1)", "fontSize": 20, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 22 }}>
            {nameUser}
          </Text>
        </View>
        <Text style={styles.voucher_x30Im}>30 điểm</Text>
        <Text style={styles.voucher_progress_title}>Mỗi giao dịch đặt chỗ trên app thành công bạn sẽ được tặng điểm thưởng.
        Bạn có thể dùng điểm đổi lấy rất nhiều ưu đãi hấp dẫn.
Điểm không có giá trị quy đổi thành tiền mặt.</Text>
        <View style={styles.voucher_group119}>
          <View style={styles.voucher_group119_scroll}>
            <View style={styles.voucher_group119_scroll_rectangle555}></View>
            <View style={styles.voucher_group119_scroll_rectangle556}></View>
            <Svg style={styles.voucher_group119_scroll_ellipse155} preserveAspectRatio="none" viewBox="0 0 2 2" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1 0 C 1.552284717559814 0 2 0.4477152824401855 2 1 C 2 1.552284717559814 1.552284717559814 2 1 2 C 0.4477152824401855 2 0 1.552284717559814 0 1 C 0 0.4477152824401855 0.4477152824401855 0 1 0 Z" /></Svg>
            <Svg style={styles.voucher_group119_scroll_ellipse236} preserveAspectRatio="none" viewBox="0 0 2 2" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1 0 C 1.552284717559814 0 2 0.4477152824401855 2 1 C 2 1.552284717559814 1.552284717559814 2 1 2 C 0.4477152824401855 2 0 1.552284717559814 0 1 C 0 0.4477152824401855 0.4477152824401855 0 1 0 Z" /></Svg>
          </View>
          <Text style={styles.voucher_group119_ng}>Đồng</Text>
          <Text style={styles.voucher_group119_kimCng}>Kim cương</Text>
          <Text style={styles.voucher_group119_vang}>Vàng</Text>
          <ReactImage source={require('../assets/bean.png')} style={styles.voucher_group119_bean} />
        </View>
        <View style={styles.voucher_user_rank}>
          <Text style={{ "marginTop": -1, "color": "rgba(255, 255, 255, 1)", "fontSize": 12, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 13.200000000000001 }}>
            Hạng Đồng
            </Text>
        </View>
        <View style={styles.voucher_group121}>
          <View style={styles.voucher_group121_rectangle1478}></View>
          <View style={styles.voucher_group121_rectangle1479}></View>
          <Svg style={styles.voucher_group121_ellipse237} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse238} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse239} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse240} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse241} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse242} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse243} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse244} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse245} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse246} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse247} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse248} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse249} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse250} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse251} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse252} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse253} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
          <Svg style={styles.voucher_group121_ellipse254} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        </View>
      </View>
      <Text style={styles.voucher_uAiDanhChoBn}>Ưu đãi dành cho bạn</Text>

      <FlatList style={styles.voucher_list} data={data} renderItem={({ item, index }) => (
        <View key={index} style={styles.voucher_list_item}>
          <View style={styles.voucher_list_item_group127}>
            <View style={styles.voucher_list_item_group127_group8794872b57}>
              <View style={styles.voucher_list_item_group127_group8794872b57_group863f6262a2}>
                <View style={styles.voucher_list_item_group127_group8794872b57_group863f6262a2_rectangle32775e448d}></View>
              </View>
            </View>
            <View style={styles.voucher_list_item_group127_group125906bcef6}>
              <View style={styles.voucher_list_item_group127_group125906bcef6_rectangle14806a0ef2a7}></View>
              <View style={styles.voucher_list_item_group127_group125906bcef6_group124378320a7}>
                <View style={styles.voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e}>
                  <View style={styles.voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff}>
                    <View style={styles.voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle148165d1791b}></View>
                    <View style={styles.voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle1482af7a277f}></View>
                    <View style={styles.voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle14839c367ca7}></View>
                  </View>
                  <Text style={styles.voucher_list_item_info_type}>{item.type}</Text>
                </View>
                <Text style={styles.voucher_list_item_info_head}>{item.head}</Text>
              </View>
            </View>
          </View>
          <View style={styles.voucher_list_item_info}>
            <Text style={styles.voucher_list_item_info_title}>{item.title}</Text>
            <Text style={styles.voucher_list_item_info_end_date}>Hết hạn: {item.endDate}</Text>
            <Text style={styles.voucher_list_item_info_description}>{item.description}</Text>
          </View>
        </View>
      )} />
    </View>
  );
}
export default VoucherTab;


const styles = StyleSheet.create({
  "voucher": {
    "backgroundColor": "rgba(219, 219, 219, 1)",
    flex: 1,
    alignItems: "center",
  },
  "voucher_progress": {
    "width": 298,
    "height": 246,
    marginTop: 12,
    marginBottom: 10
  },
  "voucher_line5": {
    "position": "absolute",
    "width": 341,
    "height": 2,
    "left": 34,
    "top": 405.5
  },
  "voucher_uAiDanhChoBn": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "header": {
    "width": "100%",
    "height": 70,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 4
    },
    "shadowRadius": 6,
    alignItems: "center",
    backgroundColor: "rgba(240, 211, 122, 1)",
  },
  "header_title": {
    "position": "absolute",

    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "top": 37
  },
  "voucher_rectangle1477": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 298,
    "height": 246,
    "top": 0,
    alignSelf: "center",
  },
  "voucher_rectangle1476": {
    "position": "absolute",
    "backgroundColor": "rgba(212, 174, 57, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "width": 298,
    "height": 110,
    "top": 18,
    alignSelf: "center",
  },
  "voucher_progress_title": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 261,
    "height": 72,
    "top": 185,
    alignSelf: "center",
  },
  "voucher_group118": {
    "position": "absolute",
    "width": 95,
    "height": 67,
    "top": 0,
    alignSelf: "center",
  },
  "voucher_group118_logoPng": {
    "position": "absolute",
    "width": 95,
    "height": 67,
    "top": 0,
    alignSelf: "center",
  },
  "voucher_group118_asset1": {
    "position": "absolute",
    "width": 42,
    "height": 13,
    "left": 48,
    "top": 43
  },
  "voucher_user_name": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 22,
    "width": 298,
    "height": 22,
    "top": 68,
    alignSelf: "center",
  },
  "voucher_x30Im": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 296,
    "height": 22,
    "top": 108,
  },
  "voucher_group119": {
    "position": "absolute",
    "width": 291,
    "height": 27,
    "top": 141,
    alignSelf: "center",
  },
  "voucher_group119_scroll": {
    "position": "absolute",
    "width": 276,
    "height": 4,
    "left": 10,
    "top": 5
  },
  "voucher_group119_scroll_rectangle555": {
    "position": "absolute",
    "backgroundColor": "rgba(240, 211, 122, 1)",
    "width": 276,
    "height": 4,
    "left": 0,
    "top": 0
  },
  "voucher_group119_scroll_rectangle556": {
    "position": "absolute",
    "backgroundColor": "rgba(83, 71, 65, 1)",
    "width": 49,
    "height": 4,
    "left": 0,
    "top": 0
  },
  "voucher_group119_scroll_ellipse155": {
    "position": "absolute",
    "width": 2,
    "height": 2,
    "left": 273,
    "top": 1
  },
  "voucher_group119_scroll_ellipse236": {
    "position": "absolute",
    "width": 2,
    "height": 2,
    "left": 1,
    "top": 1
  },
  "voucher_group119_ng": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 41,
    "height": 13,
    "left": 0,
    "top": 15.5
  },
  "voucher_group119_kimCng": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 53,
    "height": 13,
    "left": 238,
    "top": 15.5
  },
  "voucher_group119_vang": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 41,
    "height": 13,
    "left": 119,
    "top": 15.5
  },
  "voucher_group119_bean": {
    "position": "absolute",
    "width": 14,
    "height": 14,
    "left": 51,
    "top": 0
  },
  "voucher_user_rank": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 13.2,
    "width": 296,
    "height": 22,
    "top": 92,
    alignSelf:"center",
  },
  "voucher_group121": {
    "position": "absolute",
    "width": 7,
    "height": 98,
    "top": 320,
    alignSelf: "center",
  },
  "voucher_group121_rectangle1478": {
    "position": "absolute",
    "backgroundColor": "rgba(219, 219, 219, 1)",
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 7,
    "height": 4,
    "left": 0,
    "top": 0
  },
  "voucher_group121_rectangle1479": {
    "position": "absolute",
    "backgroundColor": "rgba(219, 219, 219, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "width": 7,
    "height": 3,
    "left": 0,
    "top": 95
  },
  "voucher_group121_ellipse237": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 6
  },
  "voucher_group121_ellipse238": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 11
  },
  "voucher_group121_ellipse239": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 16
  },
  "voucher_group121_ellipse240": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 21
  },
  "voucher_group121_ellipse241": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 26
  },
  "voucher_group121_ellipse242": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 31
  },
  "voucher_group121_ellipse243": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 36
  },
  "voucher_group121_ellipse244": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 41
  },
  "voucher_group121_ellipse245": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 46
  },
  "voucher_group121_ellipse246": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 51
  },
  "voucher_group121_ellipse247": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 56
  },
  "voucher_group121_ellipse248": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 61
  },
  "voucher_group121_ellipse249": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 66
  },
  "voucher_group121_ellipse250": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 71
  },
  "voucher_group121_ellipse251": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 76
  },
  "voucher_group121_ellipse252": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 81
  },
  "voucher_group121_ellipse253": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 86
  },
  "voucher_group121_ellipse254": {
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 91
  },
  "voucher_list": {
    flex: 1,
  },

  "voucher_list_item": {
    "width": 340,
    "height": 110,
    alignItems: "center",
    justifyContent: "center",
  },
  "voucher_list_item_group127": {
    "position": "absolute",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_list_item_group127_group8794872b57": {
    "position": "absolute",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_list_item_group127_group8794872b57_group863f6262a2": {
    "position": "absolute",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_list_item_group127_group8794872b57_group863f6262a2_rectangle32775e448d": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_list_item_group127_group125906bcef6": {
    "position": "absolute",
    "width": 80,
    "height": 79,
    "left": 12,
    "top": 10
  },
  "voucher_list_item_group127_group125906bcef6_rectangle14806a0ef2a7": {
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "width": 80,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "voucher_list_item_group127_group125906bcef6_group124378320a7": {
    "position": "absolute",
    "width": 75,
    "height": 64,
    "left": 3,
    "top": 6
  },
  "voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e": {
    "position": "absolute",
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff": {
    "position": "absolute",
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle148165d1791b": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 170, 0, 1)",
    "width": 68,
    "height": 15,
    "left": 3,
    "top": 0
  },
  "voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle1482af7a277f": {
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 68,
    "top": 4
  },
  "voucher_list_item_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle14839c367ca7": {
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 0,
    "top": 4
  },
  "voucher_list_item_info_type": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 9,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 14,
    "top": 1
  },
  "voucher_list_item_info_head": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 170, 0, 1)",
    "fontSize": 33,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 6,
    "top": 22
  },
  "voucher_list_item_info": {
    "position": "absolute",
    "width": 210,
    "height": 58,
    "left": 104,
    "top": 20
  },
  "voucher_list_item_info_title": {
    "opacity": 0.75,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 0,
    "top": 0
  },
  "voucher_list_item_info_end_date": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 8,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "left": 0,
    "top": 45
  },
  "voucher_list_item_info_description": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 8,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "height": 13,
    "left": 0,
    "top": 28
  },
});