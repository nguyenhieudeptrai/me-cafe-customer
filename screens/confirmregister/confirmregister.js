import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Confirmregister extends Component {

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
    <ScrollView data-layer="85de21d3-33b8-4978-8520-57a55ec2bd05" style={styles.confirmregister}>
        <View data-layer="de510d66-50c8-45ca-87a0-8a0c22105767" style={styles.confirmregister_group134}>
            <View data-layer="f04e7968-a9d5-47ed-87b3-93f582468259" style={styles.confirmregister_group134_group133}>
                <View data-layer="7adce144-72f8-4687-a6d7-48e7abcb9ac8" style={styles.confirmregister_group134_group133_component6}>
                    <Svg data-layer="1193c8cd-e3a5-4f94-a0d0-deab1a20f54e" style={styles.confirmregister_group134_group133_component6_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
                </View>
            </View>
            <Text data-layer="eb383f5b-babf-46a0-b4eb-904b6b74f811" style={styles.confirmregister_group134_quayLi}>Quay lại </Text>
        </View>
        <View data-layer="0f89457f-59e3-4b24-8f7b-80eaa0301f16" style={styles.confirmregister_group1}>
            <View data-layer="e0207175-2dd2-490f-b735-b30fd92aac06" style={styles.confirmregister_group1_group117}>
                <ReactImage data-layer="061b7443-e10f-434a-bcba-20d7a25a663a" source={require('./assets/logoPng.png')} style={styles.confirmregister_group1_group117_logoPng} />
                <ReactImage data-layer="8ca41bbc-9abe-4ec2-8368-ce6fe2637395" source={require('./assets/asset1.png')} style={styles.confirmregister_group1_group117_asset1} />
            </View>
            <Text data-layer="b1b09cf4-e0ef-43fc-b632-e63590ee8388" style={styles.confirmregister_group1_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
        </View>
        <View data-layer="f48f6e2a-a7e1-4cc7-97e8-2e0a3f011fa2" style={styles.confirmregister_group139}>
            <Text data-layer="d997b6a2-f4b8-4356-bea4-a78d65205519" style={styles.confirmregister_group139_xacNhnMaOtp}>Xác nhận Mã OTP</Text>
        </View>
        <Text data-layer="208371fb-552d-440f-b4f6-886eb3b33067" style={styles.confirmregister_mtMaXacThcGm6ChSACGiNSInThoiCaBn}>Một mã xác thực gồm 6 chữ số đã được gửi đến số điện thoại của bạn</Text>
        <View data-layer="92ed6baf-e83f-488f-b215-b7d1da92e60b" style={styles.confirmregister_group140}>
            <View data-layer="b609b35a-e527-4d09-8cf3-db62873559e9" style={styles.confirmregister_group140_rectangle1485}></View>
            <View data-layer="1ec8717e-4403-4f41-b769-308ba4caa23a" style={styles.confirmregister_group140_rectangle1486}></View>
            <View data-layer="96c1106a-8237-446d-80e5-fc3e5888b928" style={styles.confirmregister_group140_rectangle1487}></View>
            <View data-layer="163d9b69-138a-4f22-b19d-133d8df784ee" style={styles.confirmregister_group140_rectangle1488}></View>
            <View data-layer="897a989e-070c-4190-9216-ca4ac8aece0d" style={styles.confirmregister_group140_rectangle1489}></View>
            <View data-layer="4b09e6fa-c5f8-4842-a394-94a9844d8bb5" style={styles.confirmregister_group140_rectangle1490}></View>
        </View>
        <Text data-layer="c9298c0d-a6ba-4847-97f5-7b7ece9292f6" style={styles.confirmregister_nhpMaTipTc}>Nhập mã để tiếp tục</Text>
        <Text data-layer="2f2a1958-5bd6-4140-9032-825d12bab87f" style={styles.confirmregister_bnKhongNhanCMaGiLi}>Bạn Không nhân được mã? Gửi lại</Text>
        <View data-layer="66e76a70-ff79-42e9-91fd-759f8b0f0e84" style={styles.confirmregister_continue}>
            <View data-layer="009c2020-c7e1-46ec-af50-55050a01c39d" style={styles.confirmregister_continue_group135}>
                <View data-layer="0e11d544-b35d-4358-9f38-7b4c088060a8" style={styles.confirmregister_continue_group135_group142}>
                    <Svg data-layer="536cc081-7cdb-44d5-95cb-acf4500bd2a8" style={styles.confirmregister_continue_group135_group142_path643} preserveAspectRatio="none" viewBox="0 0 128 33" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.565749287605286 0 L 126.4342575073242 0 C 127.2989883422852 0 128 1.231216907501221 128 2.75 L 128 30.25 C 128 31.76878356933594 127.2989883422852 33 126.4342575073242 33 L 1.565749287605286 33 C 0.7010097503662109 33 0 31.76878356933594 0 30.25 L 0 2.75 C 0 1.231216907501221 0.7010097503662109 0 1.565749287605286 0 Z"  /></Svg>
                    <View style={styles.confirmregister_continue_group135_group142_xacThc}><Text data-layer="effbd1ba-eb62-49af-a95c-37976689e6c8" style={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>Xác thực</Text></View>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Confirmregister.propTypes = {

}

Confirmregister.defaultProps = {

}


const styles = StyleSheet.create({
  "confirmregister": {
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
  "confirmregister_group134": {
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
    "width": 78,
    "height": 16,
    "left": 19,
    "top": 39
  },
  "confirmregister_group134_group133": {
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
    "top": 0
  },
  "confirmregister_group134_group133_component6": {
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
    "top": 0
  },
  "confirmregister_group134_group133_component6_path10": {
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
  "confirmregister_group134_quayLi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
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
    "width": 49,
    "height": 15,
    "left": 29,
    "top": 1
  },
  "confirmregister_group1": {
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
    "width": 173,
    "height": 124,
    "left": 110,
    "top": 30
  },
  "confirmregister_group1_group117": {
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
    "width": 173,
    "height": 124,
    "left": 0,
    "top": 0
  },
  "confirmregister_group1_group117_logoPng": {
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
    "width": 173,
    "height": 124,
    "left": 0,
    "top": 0
  },
  "confirmregister_group1_group117_asset1": {
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
    "width": 76,
    "height": 25,
    "left": 87,
    "top": 78
  },
  "confirmregister_group1_giiPhapTTrcChNgi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 7,
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
    "width": 110,
    "height": 9,
    "left": 25,
    "top": 114
  },
  "confirmregister_group139": {
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
    "width": 120,
    "height": 18,
    "left": 137,
    "top": 187
  },
  "confirmregister_group139_xacNhnMaOtp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
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
    "width": 120,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "confirmregister_mtMaXacThcGm6ChSACGiNSInThoiCaBn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 269,
    "height": 29,
    "left": 65,
    "top": 212
  },
  "confirmregister_group140": {
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
    "width": 240,
    "height": 33,
    "left": 77,
    "top": 282
  },
  "confirmregister_group140_rectangle1485": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 32,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmregister_group140_rectangle1486": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 32,
    "height": 33,
    "left": 42,
    "top": 0
  },
  "confirmregister_group140_rectangle1487": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 32,
    "height": 33,
    "left": 83,
    "top": 0
  },
  "confirmregister_group140_rectangle1488": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 32,
    "height": 33,
    "left": 125,
    "top": 0
  },
  "confirmregister_group140_rectangle1489": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 32,
    "height": 33,
    "left": 166,
    "top": 0
  },
  "confirmregister_group140_rectangle1490": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(235, 235, 235, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 32,
    "height": 33,
    "left": 208,
    "top": 0
  },
  "confirmregister_nhpMaTipTc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 269,
    "height": 29,
    "left": 65,
    "top": 264
  },
  "confirmregister_bnKhongNhanCMaGiLi": {
    "opacity": 0.8399999737739563,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 269,
    "height": 29,
    "left": 62,
    "top": 361
  },
  "confirmregister_continue": {
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
    "width": 128,
    "height": 33,
    "left": 132,
    "top": 386
  },
  "confirmregister_continue_group135": {
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
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmregister_continue_group135_group142": {
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
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmregister_continue_group135_group142_path643": {
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
    "width": 128,
    "height": 33,
    "left": 0,
    "top": 0
  },
  "confirmregister_continue_group135_group142_xacThc": {
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
    "width": 60,
    "height": 18,
    "left": 35,
    "top": 11
  }
});