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
    <ScrollView style={styles.login}>
        <View style={styles.login_group1}>
            <View style={styles.login_group1_group117}>
                <ReactImage source={require('./assets/logoPng.png')} style={styles.login_group1_group117_logoPng} />
                <ReactImage source={require('./assets/asset1.png')} style={styles.login_group1_group117_asset1} />
            </View>
            <Text style={styles.login_group1_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
        </View>
        <View style={styles.login_continue}>
            <Svg style={styles.login_continue_path643} preserveAspectRatio="none" viewBox="0 0 327 48" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 4 0 L 323 0 C 325.2091369628906 0 327 1.790860891342163 327 4 L 327 44 C 327 46.20914077758789 325.2091369628906 48 323 48 L 4 48 C 1.790860891342163 48 0 46.20914077758789 0 44 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></Svg>
            <View style={styles.login_continue_ngNhp}><Text dstyle={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"900","fontStyle":"bold","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>ĐĂNG NHẬP</Text></View>
        </View>
        <View style={styles.login_password}>
            <View style={styles.login_password_rectangle116}></View>
            <Text style={styles.login_password_x6e3b5542}>●●●●●●●</Text>
            <View style={styles.login_password_lock}>
                <View style={styles.login_password_lock_rectangle118}></View>
                <Svg style={styles.login_password_lock_path49} preserveAspectRatio="none" viewBox="0 0 14 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 7 8 C 8.100000381469727 8 9 8.899999618530273 9 10 C 9 11.10000038146973 8.100000381469727 12 7 12 C 5.899999618530273 12 5 11.10000038146973 5 10 C 5 8.899999618530273 5.900000095367432 8 7 8 Z M 7 2 C 5.900000095367432 2 5 2.900000095367432 5 4 L 9 4 C 9 2.900000095367432 8.100000381469727 2 7 2 Z M 12 16 L 2 16 C 0.8999999761581421 16 0 15.10000038146973 0 14 L 0 6 C 0 4.900000095367432 0.8999999761581421 4 2 4 L 3 4 C 3 1.799999952316284 4.800000190734863 0 7 0 C 9.199999809265137 0 11 1.799999952316284 11 4 L 12 4 C 13.10000038146973 4 14 4.900000095367432 14 6 L 14 14 C 14 15.10000038146973 13.10000038146973 16 12 16 Z"  /></Svg>
            </View>
        </View>
        <View style={styles.login_name}>
            <View style={styles.login_name_rectangle114}></View>
            <Text style={styles.login_name_tenNgNhpsInThoi}>Tên đăng nhập/Số điện thoại</Text>
            <Svg style={styles.login_name_icon} preserveAspectRatio="none" viewBox="-6120 -16089.998046875 15.99853515625 15.9990234375" fill="rgba(83, 71, 65, 1)"><SvgPath d="M -6120 -16073.9990234375 L -6120 -16075.998046875 C -6120 -16078.19921875 -6116.3984375 -16080 -6112.0009765625 -16080 C -6107.59912109375 -16080 -6104.00146484375 -16078.19921875 -6104.00146484375 -16075.998046875 L -6104.00146484375 -16073.9990234375 L -6120 -16073.9990234375 Z M -6115.99853515625 -16086 C -6115.99853515625 -16088.208984375 -6114.20947265625 -16089.998046875 -6112.0009765625 -16089.998046875 C -6109.7919921875 -16089.998046875 -6107.9990234375 -16088.208984375 -6107.9990234375 -16086 C -6107.9990234375 -16083.7919921875 -6109.7919921875 -16081.9990234375 -6112.0009765625 -16081.9990234375 C -6114.20947265625 -16081.9990234375 -6115.99853515625 -16083.7919921875 -6115.99853515625 -16086 Z"  /></Svg>
        </View>
        <Text style={styles.login_quenMtKhu}>Quên mật khẩu</Text>
        <Text style={styles.login_ngKTaiKhon}>Đăng ký tài khoản</Text>
        <View style={styles.login_g52720df5}>
            <Svg style={styles.login_g52720df5_ellipse41} preserveAspectRatio="none" viewBox="-0.75 -0.75 57.5 57.5" fill="transparent"><SvgPath d="M 28 0 C 43.46397018432617 0 56 12.53602886199951 56 28 C 56 43.46397018432617 43.46397018432617 56 28 56 C 12.53602886199951 56 0 43.46397018432617 0 28 C 0 12.53602886199951 12.53602886199951 0 28 0 Z"  /></Svg>
            <View style={styles.login_g52720df5_g}>
                <View style={styles.login_g52720df5_g_rectangle121}></View>
                <Svg style={styles.login_g52720df5_g_path51} preserveAspectRatio="none" viewBox="0 0 16 10.20001220703125" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 16 4.400000095367432 L 16 5.900000095367432 L 14.5 5.900000095367432 L 14.5 7.400000095367432 L 13 7.400000095367432 L 13 5.800000190734863 L 11.5 5.800000190734863 L 11.5 4.400000095367432 L 13 4.400000095367432 L 13 2.900000095367432 L 14.5 2.900000095367432 L 14.5 4.400000095367432 L 16 4.400000095367432 Z M 5.099999904632568 4.400000095367432 L 9.899999618530273 4.400000095367432 C 9.899999618530273 4.700000286102295 10 4.900000095367432 10 5.200000286102295 C 10 8.100000381469727 8.100000381469727 10.20000076293945 5.099999904632568 10.20000076293945 C 2.299999952316284 10.19999980926514 0 7.900000095367432 0 5.099999904632568 C 0 2.299999952316284 2.299999952316284 0 5.099999904632568 0 C 6.5 0 7.599999904632568 0.5 8.5 1.299999952316284 L 7.099999904632568 2.700000047683716 C 6.699999809265137 2.299999952316284 6.099999904632568 1.900000095367432 5.099999904632568 1.900000095367432 C 3.399999856948853 1.900000095367432 1.899999856948853 3.300000190734863 1.899999856948853 5.100000381469727 C 1.899999856948853 6.90000057220459 3.299999713897705 8.300000190734863 5.099999904632568 8.300000190734863 C 7.099999904632568 8.300000190734863 7.899999618530273 6.900000095367432 8 6.100000381469727 L 5.099999904632568 6.100000381469727 L 5.099999904632568 4.400000095367432 Z"  /></Svg>
            </View>
        </View>
        <View style={styles.login_facebook}>
            <View style={styles.login_facebook_component1}>
                <View style={styles.login_facebook_component1_rectangle1458}></View>
                <Svg style={styles.login_facebook_component1_path1} preserveAspectRatio="none" viewBox="80 0 8.3555908203125 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 85.42222595214844 16 L 85.42222595214844 8.711111068725586 L 87.91111755371094 8.711111068725586 L 88.26667785644531 5.8666672706604 L 85.42222595214844 5.8666672706604 L 85.42222595214844 4.088889122009277 C 85.42222595214844 3.288889169692993 85.68890380859375 2.666667222976685 86.84445190429688 2.666667222976685 L 88.35556030273438 2.666667222976685 L 88.35556030273438 0.08888889104127884 C 88 0.08888889104127884 87.11111450195313 0 86.13333129882813 0 C 84 0 82.4888916015625 1.333333373069763 82.4888916015625 3.733333110809326 L 82.4888916015625 5.866666793823242 L 80 5.866666793823242 L 80 8.711111068725586 L 82.4888916015625 8.711111068725586 L 82.4888916015625 16 L 85.42222595214844 16 Z"  /></Svg>
            </View>
            <Svg style={styles.login_facebook_ellipse43} preserveAspectRatio="none" viewBox="-0.75 -0.75 57.5 57.5" fill="transparent"><SvgPath d="M 28 0 C 43.46397018432617 0 56 12.53602886199951 56 28 C 56 43.46397018432617 43.46397018432617 56 28 56 C 12.53602886199951 56 0 43.46397018432617 0 28 C 0 12.53602886199951 12.53602886199951 0 28 0 Z"  /></Svg>
        </View>
        <View style={styles.login_hoc}><Text style={{"marginTop":-1.5,"color":"rgba(51, 51, 51, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>Hoặc</Text></View>
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
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "login_group1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 268,
    "height": 191,
    "left": 45,
    "top": 0
  },
  "login_group1_group117": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "login_group1_group117_logoPng": {
    "opacity": 1,
    "position": "absolute",
    "width": 268,
    "height": 191,
    "left": 0,
    "top": 0
  },
  "login_group1_group117_asset1": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 189,
    "height": 15,
    "left": 39,
    "top": 176
  },
  "login_continue": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 327,
    "height": 48,
    "left": 30,
    "top": 420
  },
  "login_continue_path643": {
    "opacity": 1,
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 327,
    "height": 36,
    "left": 25,
    "top": 340
  },
  "login_password_rectangle116": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
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
    "width": 59,
    "height": 19,
    "left": 36,
    "top": 0
  },
  "login_password_lock": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 2
  },
  "login_password_lock_rectangle118": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_password_lock_path49": {
    "opacity": 1,
    "position": "absolute",
    "width": 14,
    "height": 16,
    "left": 1,
    "top": 0
  },
  "login_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 327,
    "height": 34,
    "left": 25,
    "top": 270
  },
  "login_name_rectangle114": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(246, 87, 0, 1)",
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
    "width": 179,
    "height": 17,
    "left": 36,
    "top": 0
  },
  "login_name_icon": {
    "opacity": 1,
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_quenMtKhu": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 90,
    "height": 29,
    "left": 145,
    "top": 630
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
    "width": 105,
    "height": 29,
    "left": 140,
    "top": 490
  },
  "login_g52720df5": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 56,
    "height": 56,
    "left": 190,
    "top": 550
  },
  "login_g52720df5_ellipse41": {
    "opacity": 1,
    "position": "absolute",
    "width": 56,
    "height": 56,
    "left": 0,
    "top": 0
  },
  "login_g52720df5_g": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 20,
    "top": 20
  },
  "login_g52720df5_g_rectangle121": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_g52720df5_g_path51": {
    "opacity": 1,
    "position": "absolute",
    "width": 16,
    "height": 10.2,
    "left": 0,
    "top": 3
  },
  "login_facebook": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 56,
    "height": 56,
    "left": 130,
    "top": 550
  },
  "login_facebook_component1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 20,
    "top": 20
  },
  "login_facebook_component1_rectangle1458": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "login_facebook_component1_path1": {
    "opacity": 1,
    "position": "absolute",
    "width": 8.36,
    "height": 16,
    "left": 4,
    "top": 0
  },
  "login_facebook_ellipse43": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 34,
    "height": 18,
    "left": 170,
    "top": 530
  }
});