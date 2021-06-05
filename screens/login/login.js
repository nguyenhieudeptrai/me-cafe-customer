import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Login extends Component {

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
    <ScrollView data-layer="9e0fbfd6-9e4b-4393-8758-54653a94d8e4" style={styles.login}>
        <View data-layer="ee998da1-f055-4ebc-9528-1ffffdc8452c" style={styles.login_group1}>
            <View data-layer="ef5adc6b-ea72-4f4a-968f-490f364c0cde" style={styles.login_group1_group117}>
                <ReactImage data-layer="9b683720-1e79-48ec-8a30-83d0a852de9e" source={require('./assets/logoPng.png')} style={styles.login_group1_group117_logoPng} />
                <ReactImage data-layer="437169a1-c1d6-4831-97dd-0a05e237e52b" source={require('./assets/asset1.png')} style={styles.login_group1_group117_asset1} />
            </View>
            <Text data-layer="62b33bf4-6c80-421e-ac04-7a425e4f22ca" style={styles.login_group1_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
        </View>
        <View data-layer="f08e6675-5f6f-4baa-a1f8-e79f448c041f" style={styles.login_continue}>
            <Svg data-layer="803788b0-e042-4000-aa7a-b824f0c3794d" style={styles.login_continue_path643} preserveAspectRatio="none" viewBox="0 0 327 48" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 4 0 L 323 0 C 325.2091369628906 0 327 1.790860891342163 327 4 L 327 44 C 327 46.20914077758789 325.2091369628906 48 323 48 L 4 48 C 1.790860891342163 48 0 46.20914077758789 0 44 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></Svg>
            <View style={styles.login_continue_ngNhp}><Text data-layer="702f9a8b-97a6-41dd-862a-e846250fcfab" style={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>ĐĂNG  NHẬP</Text></View>
        </View>
        <View data-layer="73aa802d-99ce-4731-85b8-032484ed7bee" style={styles.login_password}>
            <View data-layer="43b9a578-e72a-4385-9b36-bbafc4dde7dd" style={styles.login_password_rectangle116}></View>
            <Text data-layer="ebbd49e0-4980-4e50-a4e6-b8fe340834c7" style={styles.login_password_x6e3b5542}>●●●●●●●</Text>
            <View data-layer="b3942f65-3d3a-4888-97fe-f15db2c22ec8" style={styles.login_password_lock}>
                <View data-layer="65f40f08-396a-497e-a603-28a0983db8f4" style={styles.login_password_lock_rectangle118}></View>
                <Svg data-layer="f77dd2b6-6339-4ba0-82f4-dbb9d0895916" style={styles.login_password_lock_path49} preserveAspectRatio="none" viewBox="0 0 14 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 7 8 C 8.100000381469727 8 9 8.899999618530273 9 10 C 9 11.10000038146973 8.100000381469727 12 7 12 C 5.899999618530273 12 5 11.10000038146973 5 10 C 5 8.899999618530273 5.900000095367432 8 7 8 Z M 7 2 C 5.900000095367432 2 5 2.900000095367432 5 4 L 9 4 C 9 2.900000095367432 8.100000381469727 2 7 2 Z M 12 16 L 2 16 C 0.8999999761581421 16 0 15.10000038146973 0 14 L 0 6 C 0 4.900000095367432 0.8999999761581421 4 2 4 L 3 4 C 3 1.799999952316284 4.800000190734863 0 7 0 C 9.199999809265137 0 11 1.799999952316284 11 4 L 12 4 C 13.10000038146973 4 14 4.900000095367432 14 6 L 14 14 C 14 15.10000038146973 13.10000038146973 16 12 16 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="45a5c4d1-300b-4caa-8c23-c8f21ee66868" style={styles.login_name}>
            <View data-layer="4fe770d1-7097-4866-b149-3c63f2b8c875" style={styles.login_name_rectangle114}></View>
            <Text data-layer="36cc2bdd-16f5-4942-8b4c-19e978d6817c" style={styles.login_name_tenNgNhpsInThoi}>Tên đăng nhập/Số điện thoại</Text>
            <Svg data-layer="a13c4451-28a8-4c92-bb7e-7934ec1e1906" style={styles.login_name_icon} preserveAspectRatio="none" viewBox="-6120 -16089.998046875 15.99853515625 15.9990234375" fill="rgba(83, 71, 65, 1)"><SvgPath d="M -6120 -16073.9990234375 L -6120 -16075.998046875 C -6120 -16078.19921875 -6116.3984375 -16080 -6112.0009765625 -16080 C -6107.59912109375 -16080 -6104.00146484375 -16078.19921875 -6104.00146484375 -16075.998046875 L -6104.00146484375 -16073.9990234375 L -6120 -16073.9990234375 Z M -6115.99853515625 -16086 C -6115.99853515625 -16088.208984375 -6114.20947265625 -16089.998046875 -6112.0009765625 -16089.998046875 C -6109.7919921875 -16089.998046875 -6107.9990234375 -16088.208984375 -6107.9990234375 -16086 C -6107.9990234375 -16083.7919921875 -6109.7919921875 -16081.9990234375 -6112.0009765625 -16081.9990234375 C -6114.20947265625 -16081.9990234375 -6115.99853515625 -16083.7919921875 -6115.99853515625 -16086 Z"  /></Svg>
        </View>
        <Text data-layer="6dff795f-e55f-4889-a155-bc1febe7fbfa" style={styles.login_quenMtKhu}>Quên mật khẩu</Text>
        <Text data-layer="c7378d9c-4e36-47e7-92fe-37fc8c9a0d06" style={styles.login_ngKTaiKhon}>Đăng ký tài khoản</Text>
        <View data-layer="b390e6b1-414b-44d4-a3c2-0e372f54d2be" style={styles.login_g52720df5}>
            <Svg data-layer="760bbe43-ddbe-4683-8572-a9abc4104f73" style={styles.login_g52720df5_ellipse41} preserveAspectRatio="none" viewBox="-0.75 -0.75 57.5 57.5" fill="transparent"><SvgPath d="M 28 0 C 43.46397018432617 0 56 12.53602886199951 56 28 C 56 43.46397018432617 43.46397018432617 56 28 56 C 12.53602886199951 56 0 43.46397018432617 0 28 C 0 12.53602886199951 12.53602886199951 0 28 0 Z"  /></Svg>
            <View data-layer="ba9411a8-373f-4818-8129-9c7de2fcae4c" style={styles.login_g52720df5_g}>
                <View data-layer="9a9ea427-faea-4ec1-9228-2051533465af" style={styles.login_g52720df5_g_rectangle121}></View>
                <Svg data-layer="13558293-e207-49a3-825f-b8cb0dabce61" style={styles.login_g52720df5_g_path51} preserveAspectRatio="none" viewBox="0 0 16 10.20001220703125" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 16 4.400000095367432 L 16 5.900000095367432 L 14.5 5.900000095367432 L 14.5 7.400000095367432 L 13 7.400000095367432 L 13 5.800000190734863 L 11.5 5.800000190734863 L 11.5 4.400000095367432 L 13 4.400000095367432 L 13 2.900000095367432 L 14.5 2.900000095367432 L 14.5 4.400000095367432 L 16 4.400000095367432 Z M 5.099999904632568 4.400000095367432 L 9.899999618530273 4.400000095367432 C 9.899999618530273 4.700000286102295 10 4.900000095367432 10 5.200000286102295 C 10 8.100000381469727 8.100000381469727 10.20000076293945 5.099999904632568 10.20000076293945 C 2.299999952316284 10.19999980926514 0 7.900000095367432 0 5.099999904632568 C 0 2.299999952316284 2.299999952316284 0 5.099999904632568 0 C 6.5 0 7.599999904632568 0.5 8.5 1.299999952316284 L 7.099999904632568 2.700000047683716 C 6.699999809265137 2.299999952316284 6.099999904632568 1.900000095367432 5.099999904632568 1.900000095367432 C 3.399999856948853 1.900000095367432 1.899999856948853 3.300000190734863 1.899999856948853 5.100000381469727 C 1.899999856948853 6.90000057220459 3.299999713897705 8.300000190734863 5.099999904632568 8.300000190734863 C 7.099999904632568 8.300000190734863 7.899999618530273 6.900000095367432 8 6.100000381469727 L 5.099999904632568 6.100000381469727 L 5.099999904632568 4.400000095367432 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="067b7cca-60b4-4927-891e-cb39bf4ff19f" style={styles.login_facebook}>
            <View data-layer="97fc9428-4465-4bcb-a331-10f4a944dbe1" style={styles.login_facebook_component1}>
                <View data-layer="acecfac7-ff23-4b00-81d7-1485ed0f7944" style={styles.login_facebook_component1_rectangle1458}></View>
                <Svg data-layer="113ac386-86ae-4ad9-90d6-e7700d0571f8" style={styles.login_facebook_component1_path1} preserveAspectRatio="none" viewBox="80 0 8.3555908203125 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 85.42222595214844 16 L 85.42222595214844 8.711111068725586 L 87.91111755371094 8.711111068725586 L 88.26667785644531 5.8666672706604 L 85.42222595214844 5.8666672706604 L 85.42222595214844 4.088889122009277 C 85.42222595214844 3.288889169692993 85.68890380859375 2.666667222976685 86.84445190429688 2.666667222976685 L 88.35556030273438 2.666667222976685 L 88.35556030273438 0.08888889104127884 C 88 0.08888889104127884 87.11111450195313 0 86.13333129882813 0 C 84 0 82.4888916015625 1.333333373069763 82.4888916015625 3.733333110809326 L 82.4888916015625 5.866666793823242 L 80 5.866666793823242 L 80 8.711111068725586 L 82.4888916015625 8.711111068725586 L 82.4888916015625 16 L 85.42222595214844 16 Z"  /></Svg>
            </View>
            <Svg data-layer="18e8560b-770b-49a0-9154-b7398f20ad87" style={styles.login_facebook_ellipse43} preserveAspectRatio="none" viewBox="-0.75 -0.75 57.5 57.5" fill="transparent"><SvgPath d="M 28 0 C 43.46397018432617 0 56 12.53602886199951 56 28 C 56 43.46397018432617 43.46397018432617 56 28 56 C 12.53602886199951 56 0 43.46397018432617 0 28 C 0 12.53602886199951 12.53602886199951 0 28 0 Z"  /></Svg>
        </View>
        <View style={styles.login_hoc}><Text data-layer="f5596577-7a92-4d52-b14d-ccb9ea83d9bd" style={{"marginTop":-1.5,"color":"rgba(51, 51, 51, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>Hoặc</Text></View>
    </ScrollView>
    );
  }
}

Login.propTypes = {

}

Login.defaultProps = {

}


const styles = StyleSheet.create({
  "login": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "login_group1": {
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
    "width": 268,
    "height": 191,
    "left": 63,
    "top": 31
  },
  "login_group1_group117": {
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
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "login_group1_group117_logoPng": {
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
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "login_group1_group117_asset1": {
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
    "width": 118,
    "height": 38,
    "left": 134,
    "top": 121
  },
  "login_group1_giiPhapTTrcChNgi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 189,
    "height": 15,
    "left": 39,
    "top": 176
  },
  "login_continue": {
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
    "width": 327,
    "height": 48,
    "left": 33,
    "top": 505
  },
  "login_continue_path643": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "login_continue_ngNhp": {
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 90,
    "height": 18,
    "left": 119,
    "top": 19
  },
  "login_password": {
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
    "width": 327,
    "height": 36,
    "left": 33,
    "top": 417
  },
  "login_password_rectangle116": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 327,
    "height": 1,
    "left": 0,
    "top": 35
  },
  "login_password_x6e3b5542": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 59,
    "height": 19,
    "left": 36,
    "top": 0
  },
  "login_password_lock": {
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
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 2
  },
  "login_password_lock_rectangle118": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_password_lock_path49": {
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
    "width": 14,
    "height": 16,
    "left": 1,
    "top": 0
  },
  "login_name": {
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
    "width": 327,
    "height": 34,
    "left": 33,
    "top": 346
  },
  "login_name_rectangle114": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 327,
    "height": 1,
    "left": 0,
    "top": 33
  },
  "login_name_tenNgNhpsInThoi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 179,
    "height": 17,
    "left": 36,
    "top": 0
  },
  "login_name_icon": {
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
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_quenMtKhu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 90,
    "height": 29,
    "left": 159,
    "top": 814
  },
  "login_ngKTaiKhon": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 105,
    "height": 29,
    "left": 144,
    "top": 566
  },
  "login_g52720df5": {
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
    "width": 56,
    "height": 56,
    "left": 208,
    "top": 634
  },
  "login_g52720df5_ellipse41": {
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
    "width": 56,
    "height": 56,
    "left": 0,
    "top": 0
  },
  "login_g52720df5_g": {
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
    "width": 16,
    "height": 16,
    "left": 20,
    "top": 20
  },
  "login_g52720df5_g_rectangle121": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_g52720df5_g_path51": {
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
    "width": 16,
    "height": 10.2,
    "left": 0,
    "top": 3
  },
  "login_facebook": {
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
    "width": 56,
    "height": 56,
    "left": 130,
    "top": 634
  },
  "login_facebook_component1": {
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
    "width": 16,
    "height": 16,
    "left": 20,
    "top": 20
  },
  "login_facebook_component1_rectangle1458": {
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
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_facebook_component1_path1": {
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
    "width": 8.36,
    "height": 16,
    "left": 4,
    "top": 0
  },
  "login_facebook_ellipse43": {
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
    "width": 56,
    "height": 56,
    "left": 0,
    "top": 0
  },
  "login_hoc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(51, 51, 51, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 34,
    "height": 18,
    "left": 180,
    "top": 602
  }
});