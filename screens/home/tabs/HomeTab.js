import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { Line as SvgLine } from 'react-native-svg';
import { Circle as SvgCircle } from 'react-native-svg';
import { Rect as SvgRect } from 'react-native-svg';

const data = [
  {
    id: "Ollin Premium",
    name: "Ollin Premium",
    address: "16 Quốc Hương, Quận 2",
    img: require("../assets/i4.png"),
    distance: "500m",
  },
  {
    id: "The Feine Cafe",
    name: "The Feine Cafe",
    address: "33 Đường số 4, KDC Trung Sơn, Quận 7",
    img: require('../assets/i5.png'),
    distance: "1.1km",
  },
  {
    id: "Quán của Thời Thanh Xuân",
    name: "The Feine Cafe",
    address: "43 Đồng Khởi, Quận 1",
    img: require('../assets/i6.png'),
    distance: "1.3km",
  },
  {
    id: "Cafe Cú trên cây Garden",
    name: "Cafe Cú trên cây Garden",
    address: "262 Ung Văn Khiêm, Quận Bình Thạnh",
    img: require('../assets/i7.png'),
    distance: "1.7km",
  },
  {
    id: "Farmers’ Garden",
    name: "Farmers’ Garden",
    address: "Lầu 2, 486 Nguyễn Thị Thập, Quận 7",
    img: require('../assets/i8.png'),
    distance: "2km",
  },
]
const dataTop = [
  {
    name: "September Cafe",
    image: require("../assets/i1.png"),
  },
  {
    name: "September Cafe",
    image: require("../assets/i2.png"),
  },
]
const HomeTab = ({ navigation }) => {



  const onItemPress = () => {
    navigation.navigate('DetailShop')
  }
  return (

    <View style={styles.home}>


      <View style={styles.header}>
        <View style={styles.header_logo}>
          <ReactImage source={require('../assets/logoPng.png')} style={styles.header_logo_logoPng} />
          <ReactImage source={require('../assets/asset1.png')} style={styles.header_logo_asset1} />
        </View>
        <View style={styles.header_search}>
          <TextInput style={{ flex: 1 }} placeholder="Tìm kiếm quán Cafe...." />
          <Svg width="20" height="20" viewBox="0 0 15.224 15.03">
            <SvgLine x2="5" y2="5" transform="translate(10 11)" fill="none" stroke="#707070" strokeWidth="1.5" />

            <SvgCircle cx="6" cy="6" r="5.5" fill="none" stroke="#707070" />
          </Svg>
        </View>
        <View style={styles.header_group101}>
          <Svg width="30" height="27" viewBox="0 0 30.046 35.665">
            <SvgPath id="Path_651" data-name="Path 651" d="M18.178,32.266c2.306,0,3.566-1.631,3.566-3.93H14.6C14.6,30.634,15.864,32.266,18.178,32.266Z" transform="translate(0.427 1.33)" fill="#707070" />
            <SvgPath id="Path_652" data-name="Path 652" d="M30.179,25.9c-1.142-1.505-3.388-2.387-3.388-9.127,0-6.918-3.055-9.7-5.9-10.365-.267-.067-.46-.156-.46-.437V5.754a1.809,1.809,0,1,0-3.618,0v.215c0,.274-.193.371-.46.437-2.855.675-5.9,3.448-5.9,10.365,0,6.74-2.247,7.615-3.388,9.127A1.472,1.472,0,0,0,8.24,28.257H29.007A1.472,1.472,0,0,0,30.179,25.9Z" transform="translate(0)" fill="#707070" />
            <SvgCircle cx="25.5" cy="7.5" r="8" fill="#950303" />

          </Svg>

        </View>
      </View>
      <View style={styles.topYeuThich}>
        <Text style={styles.topYeuThich_group103_topYeuThichNht}>TOP Yêu thích nhất</Text>
        <FlatList
          style={styles.topYeuThich_group103}
          data={dataTop}
          horizontal={true}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={onItemPress} key={index} style={styles.topYeuThich_group103_group102_group17}>
              
                <ReactImage source={item.image} style={styles.topYeuThich_group103_group102_group17_i1} />
                <Text style={styles.topYeuThich_group103_group102_group17_septemberCafe}>{item.name}</Text>
                <View style={styles.topYeuThich_group103_group102_group17_group42}>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group370f51e497}>
                    <ReactImage source={require('../assets/star55a2af98.png')} style={styles.topYeuThich_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group3850e2cc78}>
                    <ReactImage source={require('../assets/star2e40c2f1.png')} style={styles.topYeuThich_group103_group102_group17_group42_group3850e2cc78_star2e40c2f1} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group391f531ae3}>
                    <ReactImage source={require('../assets/starbef87d39.png')} style={styles.topYeuThich_group103_group102_group17_group42_group391f531ae3_starbef87d39} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group41ea5fbe0b}>
                    <ReactImage source={require('../assets/halfStar22d835025.png')} style={styles.topYeuThich_group103_group102_group17_group42_group41ea5fbe0b_halfStar22d835025} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group1138d5db7c6}>
                    <ReactImage source={require('../assets/star0159e37c.png')} style={styles.topYeuThich_group103_group102_group17_group42_group1138d5db7c6_star0159e37c} />
                  </View>
                </View>
            </TouchableOpacity>
          )} />
        <Svg style={styles.topYeuThich_path8} preserveAspectRatio="none" viewBox="-1.5 -1.5 327.1445007324219 3" fill="transparent"><SvgPath d="M 0 0 C 0 0 168.9582214355469 0 249.9569244384766 0 C 330.9556274414063 0 323.9947814941406 0 323.9947814941406 0" /></Svg>
      </View>
      <View style={styles.quanGnBnb2eef024}>
        <Text style={styles.quanGnBnb2eef024_quanGnBn}>Quán gần bạn</Text>

        <FlatList data={data} renderItem={({ item }) => (
             <TouchableOpacity onPress={onItemPress} style={styles.quanGnBnb2eef024_group23}>
            <View style={styles.quanGnBnb2eef024_group23_group105}>
              <ReactImage source={item.img} style={styles.quanGnBnb2eef024_group23_group105_i4} />
              <Text style={styles.quanGnBnb2eef024_group23_group105_bstoryCafe}>{item.name}</Text>
              <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>{item.address}</Text>
              <Text style={styles.quanGnBnb2eef024_group23_group105_x700m}>{item.distance}</Text>
            </View>
          </TouchableOpacity>
        )} />


      </View>
    </View>
  );
}

export default HomeTab;

const styles = StyleSheet.create({
  "home": {
    "flex": 1,
    "backgroundColor": "rgba(220, 220, 220, 1)",
    alignItems: "center",
  },

  "quanGnBnb2eef024": {
    flex: 1,
    "width": "90%",
  },
  "quanGnBnb2eef024_quanGnBn": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": "100%",
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  "quanGnBnb2eef024_group23": {

    "width": "100%",
    "height": 79,
    "position": "relative",
    "marginBottom": 10,
  },
  "quanGnBnb2eef024_group23_group105": {
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": "100%",
    "height": 79,
  },
  "quanGnBnb2eef024_group23_group105_i4": {
    "position": "absolute",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 83,
    "height": 63,
    "left": 7,
    "top": 8
  },
  "quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "height": 15,
    "left": 102,
    "top": 47
  },
  "quanGnBnb2eef024_group23_group105_x700m": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "right": 10,
    "top": 11
  },
  "quanGnBnb2eef024_group23_group105_bstoryCafe": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "height": 17,
    "left": 103,
    "top": 11
  },
  "topYeuThich": {
    "width": "90%",
    marginBottom: 10,
  },
  "topYeuThich_group103": {
    width: "100%",
  },
  "topYeuThich_group103_topYeuThichNht": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": "100%",
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  "topYeuThich_group103_group102_group17": {

    "width": 211,
    "height": 98,
    backgroundColor: "#FFF",
    borderRadius: 5,
    margin: 5,
    marginBottom: 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
  },
  "topYeuThich_group103_group102_group17_i1": {
    "position": "absolute",
    "borderTopLeftRadius": 8,
    "borderTopRightRadius": 8,
    "borderBottomLeftRadius": 8,
    "borderBottomRightRadius": 8,
    "width": 79,
    "height": 80,
    "left": 5,
    "top": 9
  },
  "topYeuThich_group103_group102_group17_septemberCafe": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 102,
    "height": 17,
    "left": 93,
    "top": 41
  },
  "topYeuThich_group103_group102_group17_group42": {
    "opacity": 0.6000000238418579,
    "position": "absolute",

    "width": 75,
    "height": 13,
    "left": 93,
    "top": 62
  },
  "topYeuThich_group103_group102_group17_group42_group370f51e497": {
    "position": "absolute",

    "width": 12,
    "height": 13,


  },
  "topYeuThich_group103_group102_group17_group42_group370f51e497_star55a2af98": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 13,


  },
  "topYeuThich_group103_group102_group17_group42_group3850e2cc78": {
    "position": "absolute",

    "width": 12,
    "height": 13,
    "left": 16,

  },
  "topYeuThich_group103_group102_group17_group42_group3850e2cc78_star2e40c2f1": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 13,


  },
  "topYeuThich_group103_group102_group17_group42_group391f531ae3": {
    "position": "absolute",

    "width": 13,
    "height": 13,
    "left": 31,

  },
  "topYeuThich_group103_group102_group17_group42_group391f531ae3_starbef87d39": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 13,
    "height": 13,


  },
  "topYeuThich_group103_group102_group17_group42_group41ea5fbe0b": {
    "position": "absolute",

    "width": 13,
    "height": 13,
    "left": 62,

  },
  "topYeuThich_group103_group102_group17_group42_group41ea5fbe0b_halfStar22d835025": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 13,
    "height": 13,


  },
  "topYeuThich_group103_group102_group17_group42_group1138d5db7c6": {
    "position": "absolute",

    "width": 12,
    "height": 13,
    "left": 47,

  },
  "topYeuThich_group103_group102_group17_group42_group1138d5db7c6_star0159e37c": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 13,


  },
  "topYeuThich_path8": {
    "position": "absolute",
    "width": 328.14,
    "height": 4,
    "left": -2,
    "top": 14
  },
  "header": {
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "width": "100%",
    "height": 90,
    marginBottom: 10,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
  },
  "header_group101": {

    "width": 40,
    "height": 21,
  },
  "header_logo": {
    "width": 105,
    "height": 65,
  },
  "header_logo_logoPng": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 90,
    "height": 65,
  },
  "header_logo_asset1": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 50,
    "height": 16,
    "left": 55,
    "top": 39
  },
  "header_search": {
    "borderWidth": 1,
    "borderColor": "rgba(177, 137, 16, 1)",
    "borderWidth": 1,
    "borderRadius": 5,
    "height": 30,
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "normal",
    fontFamily: "Roboto",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});