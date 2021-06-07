import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Line as SvgLine } from 'react-native-svg';
import { Circle as SvgCircle } from 'react-native-svg';
import { Rect as SvgRect } from 'react-native-svg';

const data = [
  {
    id: "Ollin Premium",
    name: "Ollin Premium",
    address: "16 Quốc Hương, Quận 2",
    img: require("./assets/i4.png"),
    distance: "500m",
  },
  {
    id: "The Feine Cafe",
    name: "The Feine Cafe",
    address: "33 Đường số 4, KDC Trung Sơn, Quận 7",
    img: require('./assets/i5.png'),
    distance: "1.1km",
  },
  {
    id: "Quán của Thời Thanh Xuân",
    name: "The Feine Cafe",
    address: "43 Đồng Khởi, Quận 1",
    img: require('./assets/i6.png'),
    distance: "1.3km",
  },
  {
    id: "Cafe Cú trên cây Garden",
    name: "Cafe Cú trên cây Garden",
    address: "262 Ung Văn Khiêm, Quận Bình Thạnh",
    img: require('./assets/i7.png'),
    distance: "1.7km",
  },
  {
    id: "Farmers’ Garden",
    name: "Farmers’ Garden",
    address: "Lầu 2, 486 Nguyễn Thị Thập, Quận 7",
    img: require('./assets/i8.png'),
    distance: "2km",
  },
]


export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
      let name;
      let id;
      let index = -1;
      if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
          name = target.split("::")[0];
          id = target.split("::")[1];
        } else if (varCount === 3) {
          name = target.split("::")[0];
          index = parseInt(target.split("::")[1]);
          id = target.split("::")[2];
        }
      } else {
        name = target;
      }
      this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
    let id;
    let index = -1;
    if (name.search('::') > -1) {
      const varCount = name.split("::").length;
      if (varCount === 2) {
        name = name.split("::")[0];
        id = name.split("::")[1];
      } else if (varCount === 3) {
        name = name.split("::")[0];
        index = name.split("::")[1];
        id = name.split("::")[2];
      }
    } else {
      name = name;
    }
    let state = this.state;
    state[name.split('::').join('')] = value;
    this.setState(state, () => {
      if (this.props.onChange) {
        this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
      }
    });
  }

  render() {

    return (
      <View style={styles.home}>

        <View style={styles.group115}>
          <View style={styles.group115_logo}>
            <ReactImage source={require('./assets/logoPng.png')} style={styles.group115_logo_logoPng} />
            <ReactImage source={require('./assets/asset1.png')} style={styles.group115_logo_asset1} />
          </View>
          <View style={styles.header_search}>
            <TextInput style={{ flex: 1 }} placeholder="Tìm kiếm quán Cafe...." />
            <Svg width="20" height="20" viewBox="0 0 15.224 15.03">
              <SvgLine x2="5" y2="5" transform="translate(10 11)" fill="none" stroke="#707070" strokeWidth="1.5" />

              <SvgCircle cx="6" cy="6" r="6" stroke="#707070" />
              <SvgCircle cx="6" cy="6" r="5.25" fill="none" />
            </Svg>
          </View>
          <View style={styles.group115_group101}>
            <Svg width="30" height="27" viewBox="0 0 30.046 35.665">
              <SvgPath id="Path_651" data-name="Path 651" d="M18.178,32.266c2.306,0,3.566-1.631,3.566-3.93H14.6C14.6,30.634,15.864,32.266,18.178,32.266Z" transform="translate(0.427 1.33)" fill="#707070" />
              <SvgPath id="Path_652" data-name="Path 652" d="M30.179,25.9c-1.142-1.505-3.388-2.387-3.388-9.127,0-6.918-3.055-9.7-5.9-10.365-.267-.067-.46-.156-.46-.437V5.754a1.809,1.809,0,1,0-3.618,0v.215c0,.274-.193.371-.46.437-2.855.675-5.9,3.448-5.9,10.365,0,6.74-2.247,7.615-3.388,9.127A1.472,1.472,0,0,0,8.24,28.257H29.007A1.472,1.472,0,0,0,30.179,25.9Z" transform="translate(0)" fill="#707070" />
              <SvgCircle cx="25.5" cy="7.5" r="8" fill="#950303" />

            </Svg>

          </View>
        </View>
        <View style={styles.topYeuThich}>
          <Text style={styles.topYeuThich_group103_topYeuThichNht}>TOP Yêu thích nhất</Text>
          <ScrollView style={styles.topYeuThich_group103} horizontal={true}>
            <View style={styles.topYeuThich_group103_group102}>
              <View style={styles.topYeuThich_group103_group102_group17}>
                <ReactImage source={require('./assets/i1.png')} style={styles.topYeuThich_group103_group102_group17_i1} />
                <Text style={styles.topYeuThich_group103_group102_group17_septemberCafe}>September Cafe</Text>
                <View style={styles.topYeuThich_group103_group102_group17_group42}>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group370f51e497}>
                    <ReactImage source={require('./assets/star55a2af98.png')} style={styles.topYeuThich_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group3850e2cc78}>
                    <ReactImage source={require('./assets/star2e40c2f1.png')} style={styles.topYeuThich_group103_group102_group17_group42_group3850e2cc78_star2e40c2f1} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group391f531ae3}>
                    <ReactImage source={require('./assets/starbef87d39.png')} style={styles.topYeuThich_group103_group102_group17_group42_group391f531ae3_starbef87d39} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group41ea5fbe0b}>
                    <ReactImage source={require('./assets/halfStar22d835025.png')} style={styles.topYeuThich_group103_group102_group17_group42_group41ea5fbe0b_halfStar22d835025} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group1138d5db7c6}>
                    <ReactImage source={require('./assets/star0159e37c.png')} style={styles.topYeuThich_group103_group102_group17_group42_group1138d5db7c6_star0159e37c} />
                  </View>
                </View>
              </View>
              <View style={styles.topYeuThich_group103_group102_group28}>
                <Svg style={styles.topYeuThich_group103_group102_group28_path2} preserveAspectRatio="none" viewBox="0 0 211 98" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 4 0 L 207 0 C 209.2091369628906 0 211 1.790860891342163 211 4 L 211 94 C 211 96.20913696289063 209.2091369628906 98 207 98 L 4 98 C 1.790860891342163 98 0 96.20913696289063 0 94 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z" /></Svg>
                <ReactImage source={require('./assets/i2.png')} style={styles.topYeuThich_group103_group102_group28_i2} />
                <Text style={styles.topYeuThich_group103_group102_group28_yoonaCafe}>Yoona Cafe</Text>

                <View style={styles.topYeuThich_group103_group102_group17_group42}>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group370f51e497}>
                    <ReactImage source={require('./assets/star55a2af98.png')} style={styles.topYeuThich_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group3850e2cc78}>
                    <ReactImage source={require('./assets/star2e40c2f1.png')} style={styles.topYeuThich_group103_group102_group17_group42_group3850e2cc78_star2e40c2f1} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group391f531ae3}>
                    <ReactImage source={require('./assets/starbef87d39.png')} style={styles.topYeuThich_group103_group102_group17_group42_group391f531ae3_starbef87d39} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group41ea5fbe0b}>
                    <ReactImage source={require('./assets/halfStar22d835025.png')} style={styles.topYeuThich_group103_group102_group17_group42_group41ea5fbe0b_halfStar22d835025} />
                  </View>
                  <View style={styles.topYeuThich_group103_group102_group17_group42_group1138d5db7c6}>
                    <ReactImage source={require('./assets/star0159e37c.png')} style={styles.topYeuThich_group103_group102_group17_group42_group1138d5db7c6_star0159e37c} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
          <Svg style={styles.topYeuThich_path8} preserveAspectRatio="none" viewBox="-1.5 -1.5 327.1445007324219 3" fill="transparent"><SvgPath d="M 0 0 C 0 0 168.9582214355469 0 249.9569244384766 0 C 330.9556274414063 0 323.9947814941406 0 323.9947814941406 0" /></Svg>
        </View>
        <View style={styles.quanGnBnb2eef024}>
          <Text style={styles.quanGnBnb2eef024_quanGnBn}>Quán gần bạn</Text>

          <FlatList data={data} renderItem={({ item }) => (
            <View style={styles.quanGnBnb2eef024_group23}>
              <View style={styles.quanGnBnb2eef024_group23_group105}>
                <ReactImage source={item.img} style={styles.quanGnBnb2eef024_group23_group105_i4} />
                <Text style={styles.quanGnBnb2eef024_group23_group105_bstoryCafe}>{item.name}</Text>
                <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>{item.address}</Text>
                <Text style={styles.quanGnBnb2eef024_group23_group105_x700m}>{item.distance}</Text>
              </View>
            </View>
          )} />


        </View>

        <View style={styles.menu}>
          <View style={styles.menu_item}>
            <ReactImage source={require('./assets/tabHome.png')} style={styles.menu_item_icon} />
            <Text style={styles.menu_item_title}>Trang chủ</Text>
          </View>
          <View style={styles.menu_item}>
            <ReactImage source={require('./assets/booking.png')} style={styles.menu_item_icon} />
            <Text style={styles.menu_item_title}>Đặt chỗ</Text>
          </View>
          <View style={styles.menu_item}>
            <ReactImage source={require('./assets/tab3.png')} style={styles.menu_item_icon} />
            <Text style={styles.menu_item_title}>Tích điểm</Text>
          </View>
          <View style={styles.menu_item}>
            <ReactImage source={require('./assets/setting2.png')} style={styles.menu_item_icon} />
            <Text style={styles.menu_item_title}>Cài đặt</Text>
          </View>
        </View>
      </View>
    );
  }
}

Home.propTypes = {

}

Home.defaultProps = {

}


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
  "quanGnBnb2eef024_group18": {
    "width": "100%",
  },
  "quanGnBnb2eef024_group18_group104": {
    "position": "absolute",

    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group18_group104_rectangle18c6bded68": {
    "position": "absolute",
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
    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group18_group104_i3": {
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
  "quanGnBnb2eef024_group18_group104_x16QucHngQun2": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 137,
    "height": 15,
    "left": 102,
    "top": 47
  },
  "quanGnBnb2eef024_group18_group104_x500m": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",

    "width": 30,
    "height": 14,
    "left": 325,
    "top": 11
  },
  "quanGnBnb2eef024_group18_group104_ollinPremium": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 89,
    "height": 17,
    "left": 103,
    "top": 15
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
  "quanGnBnb2eef024_group24": {
    "position": "absolute",

    "width": 367,
    "height": 79,

    "top": 207
  },
  "quanGnBnb2eef024_group24_group106": {
    "position": "absolute",

    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group24_group106_rectangle18f62c1ff7": {
    "position": "absolute",
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
    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group24_group106_i5": {
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
  "quanGnBnb2eef024_group24_group106_x33NgS4KdcTrungSnQun7": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 224,
    "height": 15,
    "left": 102,
    "top": 47
  },
  "quanGnBnb2eef024_group24_group106_x11km": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",

    "width": 33,
    "height": 14,
    "left": 325,
    "top": 11
  },
  "quanGnBnb2eef024_group24_group106_theFeineCafe": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 94,
    "height": 17,
    "left": 103,
    "top": 15
  },
  "quanGnBnb2eef024_group25": {
    "position": "absolute",

    "width": 367,
    "height": 79,

    "top": 297
  },
  "quanGnBnb2eef024_group25_group107": {
    "position": "absolute",

    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group25_group107_rectangle1867618bd5": {
    "position": "absolute",
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
    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group25_group107_i6": {
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
  "quanGnBnb2eef024_group25_group107_x43NgKhiQun1": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 124,
    "height": 15,
    "left": 102,
    "top": 47
  },
  "quanGnBnb2eef024_group25_group107_x15km": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",

    "width": 33,
    "height": 14,
    "left": 325,
    "top": 11
  },
  "quanGnBnb2eef024_group25_group107_quanCaThiThanhXuan": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 169,
    "height": 17,
    "left": 103,
    "top": 15
  },
  "quanGnBnb2eef024_group26": {
    "position": "absolute",

    "width": 367,
    "height": 79,

    "top": 387
  },
  "quanGnBnb2eef024_group26_group108": {
    "position": "absolute",

    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group26_group108_rectangle184946f787": {
    "position": "absolute",
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
    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group26_group108_i7": {
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
  "quanGnBnb2eef024_group26_group108_x262UngVnKhiemQunBinhThnh": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 218,
    "height": 15,
    "left": 102,
    "top": 47
  },
  "quanGnBnb2eef024_group26_group108_x17km": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",

    "width": 33,
    "height": 14,
    "left": 325,
    "top": 11
  },
  "quanGnBnb2eef024_group26_group108_cafeCuTrenCayGarden": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 152,
    "height": 17,
    "left": 103,
    "top": 15
  },
  "quanGnBnb2eef024_group109": {
    "position": "absolute",

    "width": 367,
    "height": 79,

    "top": 477
  },
  "quanGnBnb2eef024_group109_rectangle18": {
    "position": "absolute",
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
    "width": 367,
    "height": 79,


  },
  "quanGnBnb2eef024_group109_i8": {
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
  "quanGnBnb2eef024_group109_lu2486NguynThThpQun7": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 206,
    "height": 15,
    "left": 102,
    "top": 47
  },
  "quanGnBnb2eef024_group109_x2km": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",

    "width": 23,
    "height": 14,
    "left": 330,
    "top": 11
  },
  "quanGnBnb2eef024_group109_farmersGarden": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 104,
    "height": 17,
    "left": 103,
    "top": 15
  },
  "quanGnBnb2eef024_path7": {
    "position": "absolute",
    "width": 323.84,
    "height": 4,
    "left": 1.5,
    "top": 15.5
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
  "topYeuThich_group103_group102": {
    "width": 434,
    "height": 98,
  },
  "topYeuThich_group103_group102_group17": {
    "position": "absolute",

    "width": 211,
    "height": 98,
    backgroundColor: "#FFF",
    borderRadius: 5

  },
  "topYeuThich_group103_group102_group17_path2a8121389": {
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 9,
    "width": 211,
    "height": 98,


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
  "topYeuThich_group103_group102_group28": {
    "position": "absolute",

    "width": 211,
    "height": 98,
    "left": 223,

  },
  "topYeuThich_group103_group102_group28_path2": {
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 9,
    "width": 211,
    "height": 98,


  },
  "topYeuThich_group103_group102_group28_i2": {
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
  "topYeuThich_group103_group102_group28_yoonaCafe": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 94,
    "top": 41
  },
  "topYeuThich_group103_group102_group114": {
    "opacity": 0.6000000238418579,
    "position": "absolute",

    "width": 75,
    "height": 13,
    "left": 318,
    "top": 62
  },
  "topYeuThich_group103_group102_group114_group37": {
    "position": "absolute",

    "width": 12,
    "height": 13,


  },
  "topYeuThich_group103_group102_group114_group37_star99827c29": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 13,


  },
  "topYeuThich_group103_group102_group114_group38": {
    "position": "absolute",

    "width": 12,
    "height": 13,
    "left": 16,

  },
  "topYeuThich_group103_group102_group114_group38_star3b69fb53": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 13,


  },
  "topYeuThich_group103_group102_group114_group39": {
    "position": "absolute",

    "width": 13,
    "height": 13,
    "left": 31,

  },
  "topYeuThich_group103_group102_group114_group39_starb75fdc0d": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 13,
    "height": 13,


  },
  "topYeuThich_group103_group102_group114_group41": {
    "position": "absolute",

    "width": 13,
    "height": 13,
    "left": 62,

  },
  "topYeuThich_group103_group102_group114_group41_halfStar2": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 13,
    "height": 13,


  },
  "topYeuThich_group103_group102_group114_group113": {
    "position": "absolute",

    "width": 12,
    "height": 13,
    "left": 47,

  },
  "topYeuThich_group103_group102_group114_group113_star": {
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
  "group115": {
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "width": "100%",
    "height": 90,
    marginBottom: 10,
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  "group115_group101": {

    "width": 40,
    "height": 21,
  },
  "group115_group101_noti_path651": {
    "position": "absolute",
    "width": 4.43,
    "height": 2.44,
    "left": 5.13,
    "top": 15.97
  },
  "group115_group101_noti_path652": {
    "position": "absolute",
    "width": 14.72,
    "height": 15.09,


  },
  "group115_group101_group100": {
    "position": "absolute",

    "width": 9,
    "height": 9,
    "left": 8.72,

  },
  "group115_group101_group100_rectangle1475": {
    "position": "absolute",
    "backgroundColor": "rgba(149, 3, 3, 1)",
    "borderTopWidth": 0.5,
    "borderTopColor": "rgba(255, 248, 248, 1)",
    "borderRightWidth": 0.5,
    "borderRightColor": "rgba(255, 248, 248, 1)",
    "borderBottomWidth": 0.5,
    "borderBottomColor": "rgba(255, 248, 248, 1)",
    "borderLeftWidth": 0.5,
    "borderLeftColor": "rgba(255, 248, 248, 1)",
    "borderTopLeftRadius": 8,
    "borderTopRightRadius": 8,
    "borderBottomLeftRadius": 8,
    "borderBottomRightRadius": 8,
    "width": 9,
    "height": 9,


  },
  "group115_group101_group100_x1": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 6,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": 3,
    "height": 8,
    "left": 3,
    "top": 1
  },
  "group115_searchbtn": {
    "position": "absolute",

    "width": 14.79,
    "height": 14.59,
    "left": 340.98,
    "top": 40.95
  },
  "group115_searchbtn_line1": {
    "position": "absolute",
    "width": 6.1,
    "height": 6.1,
    "right": -0.53,
    "bottom": -0.53
  },
  "group115_searchbtn_ellipse1": {
    "position": "absolute",
    "width": 12.08,
    "height": 12.08,


  },
  "group115_logo": {
    "width": 105,
    "height": 65,
  },
  "group115_logo_logoPng": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 90,
    "height": 65,
  },
  "group115_logo_asset1": {
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
  "menu": {
    "backgroundColor": "#FFF",
    "borderTopLeftRadius": 30,
    "borderTopRightRadius": 30,
    "width": "100%",
    "height": 79,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  "menu_group57": {
    "position": "absolute",

    "width": 393,
    "height": 79,

  },
  "menu_group57_path5": {
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.3411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 393,
    "height": 79,


  },
  "menu_item": {
    flex: 1,
    "height": 51,
    alignItems: "center",
  },
  "menu_item_rectangle11": {
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "menu_item_icon": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 33,
    "height": 33,

  },
  "menu_item_title": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 12,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",

  },
  "menu_group7_rectangle12": {
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -29,
    "top": -14
  },
  "menu_group8_rectangle13": {
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "menu_group8_group12": {
    "position": "absolute",

    "width": 50,
    "height": 51,


  },
  "menu_group9_rectangle14": {
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -30,
    "top": -14
  },
  "menu_group9_group11": {
    "position": "absolute",

    "width": 36,
    "height": 51,


  },
});