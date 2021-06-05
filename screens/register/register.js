import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Register extends Component {

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
    <ScrollView data-layer="30f6ceca-36f4-486a-a0a3-4f1627a1f286" style={styles.register}>
        <View data-layer="eec46568-263f-405f-a6d8-b388d5bfb0a5" style={styles.register_group1}>
            <View data-layer="3240e9a9-e52a-400b-b1ba-420219866500" style={styles.register_group1_group117}>
                <ReactImage data-layer="d7b28bae-9eec-421e-95e6-8c3effa2eec3" source={require('./assets/logoPng.png')} style={styles.register_group1_group117_logoPng} />
                <ReactImage data-layer="ff802123-48c5-4f9c-902c-ea9a1c4956d5" source={require('./assets/asset1.png')} style={styles.register_group1_group117_asset1} />
            </View>
            <Text data-layer="5ee869c9-22c3-40ac-b31c-e75856ba8682" style={styles.register_group1_giiPhapTTrcChNgi}>GIẢI PHÁP ĐẶT TRƯỚC CHỖ NGỒI</Text>
        </View>
        <View data-layer="b4f95cbe-b875-4f4d-b1f9-36f9e317e9f6" style={styles.register_continuea9dc7a69}>
            <View data-layer="41c8eb89-fa9c-4c91-a1eb-b0cd6cd2e2cd" style={styles.register_continuea9dc7a69_group135}>
                <Svg data-layer="b1cf760b-e7e7-499a-a8f8-10647933daff" style={styles.register_continuea9dc7a69_group135_path6437c0da9a2} preserveAspectRatio="none" viewBox="0 0 128 33" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.565749287605286 0 L 126.4342575073242 0 C 127.2989883422852 0 128 1.231216907501221 128 2.75 L 128 30.25 C 128 31.76878356933594 127.2989883422852 33 126.4342575073242 33 L 1.565749287605286 33 C 0.7010097503662109 33 0 31.76878356933594 0 30.25 L 0 2.75 C 0 1.231216907501221 0.7010097503662109 0 1.565749287605286 0 Z"  /></Svg>
                <View style={styles.register_continuea9dc7a69_group135_ngK}><Text data-layer="166cb8ab-87b5-495e-af8f-f2c49223f670" style={{"marginTop":-1.5,"color":"rgba(255, 255, 255, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>ĐĂNG  KÝ</Text></View>
            </View>
        </View>
        <View data-layer="66b89be9-6fe5-4965-9f35-c046bdbd52b1" style={styles.register_group134}>
            <View data-layer="57e711c5-83dc-4b4b-b0cf-7ca37ad0b832" style={styles.register_group134_component6}>
                <Svg data-layer="1a0f4b40-057e-4fc8-b46e-d2cdd233eff5" style={styles.register_group134_component6_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
            </View>
            <Text data-layer="e2d4c2c5-60d0-4d1e-9a7e-beb7038edf5a" style={styles.register_group134_quayLi}>Quay lại </Text>
        </View>
        <View data-layer="e0929557-915f-42c5-8636-9f12bff56492" style={styles.register_group137}>
            <Svg data-layer="c896c303-970a-45f9-97ca-d1513882a842" style={styles.register_group137_line7} preserveAspectRatio="none" viewBox="-0.5 0 1 36" fill="transparent"><SvgPath d="M 0 0 L 0 36"  /></Svg>
            <View data-layer="38da00fb-ab81-4c96-b01b-3f66d72b66c6" style={styles.register_group137_group136}>
                <View data-layer="2ce8c74e-5ba5-448f-b951-19170304a987" style={styles.register_group137_group136_continue}>
                    <Svg data-layer="ee7fc9a6-baa5-49e1-a9c6-209b1c56001d" style={styles.register_group137_group136_continue_path643} preserveAspectRatio="none" viewBox="-1.5 -1.5 330 51" fill="transparent"><SvgPath d="M 4 0 L 323 0 C 325.2091369628906 0 327 1.790860891342163 327 4 L 327 44 C 327 46.20914077758789 325.2091369628906 48 323 48 L 4 48 C 1.790860891342163 48 0 46.20914077758789 0 44 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></Svg>
                </View>
                <View style={styles.register_group137_group136_x84}><Text data-layer="3ca44487-1ded-43fb-a350-d6d21339accb" style={{"marginTop":-1.5,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>+84</Text></View>
                <View style={styles.register_group137_group136_nhpSInThoi}><Text data-layer="341aabd6-6907-4b5c-ae46-701e0f372517" style={{"marginTop":-1.5,"color":"rgba(204, 204, 204, 1)","fontSize":15,"fontWeight":"400","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":16.5}}>Nhập số điện thoại...</Text></View>
                <Svg data-layer="7d0b5de5-b037-4e39-a80c-5438742a93ee" style={styles.register_group137_group136_cE1Bb9dViE1Bb87tNam2c0683597d2d419fac401f51ccbae779grande} preserveAspectRatio="none" viewBox="0 0 26 26" fill="rgba(255, 255, 255, 0)"><Defs><Pattern id="img-cE1Bb9dViE1Bb87tNam2c0683597d2d419fac401f51ccbae779grande" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><SvgImage xlinkHref={require('./assets/cE1Bb9dViE1Bb87tNam2c0683597d2d419fac401f51ccbae779grande.png')} x="0" y="0" width="26.00px" height="26.00px" /></Pattern></Defs><SvgPath d="M 13 0 C 20.17970085144043 0 26 5.820298671722412 26 13 C 26 20.17970085144043 20.17970085144043 26 13 26 C 5.820298671722412 26 0 20.17970085144043 0 13 C 0 5.820298671722412 5.820298671722412 0 13 0 Z" fill="url(#img-cE1Bb9dViE1Bb87tNam2c0683597d2d419fac401f51ccbae779grande)" /></Svg>
            </View>
        </View>
        <ReactImage data-layer="152647f0-943c-4a63-b860-57185bb92c5e" source={require('./assets/coffeebeansandcoffeecupbackgroundConverted.png')} style={styles.register_coffeebeansandcoffeecupbackgroundConverted} />
    </ScrollView>
    );
  }
}

Register.propTypes = {

}

Register.defaultProps = {

}


const styles = StyleSheet.create({
  "register": {
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
  "register_group1": {
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
    "top": 93
  },
  "register_group1_group117": {
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
  "register_group1_group117_logoPng": {
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
  "register_group1_group117_asset1": {
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
  "register_group1_giiPhapTTrcChNgi": {
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
  "register_continuea9dc7a69": {
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
    "left": 133,
    "top": 444
  },
  "register_continuea9dc7a69_group135": {
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
  "register_continuea9dc7a69_group135_path6437c0da9a2": {
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
  "register_continuea9dc7a69_group135_ngK": {
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
    "width": 67,
    "height": 18,
    "left": 31,
    "top": 11
  },
  "register_group134": {
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
  "register_group134_component6": {
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
  "register_group134_component6_path10": {
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
  "register_group134_quayLi": {
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
  "register_group137": {
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
    "top": 375
  },
  "register_group137_line7": {
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
    "width": 1,
    "height": 36,
    "left": 73,
    "top": 6
  },
  "register_group137_group136": {
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
    "left": 0,
    "top": 0
  },
  "register_group137_group136_continue": {
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
    "left": 0,
    "top": 0
  },
  "register_group137_group136_continue_path643": {
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
    "width": 327,
    "height": 48,
    "left": 0,
    "top": 0
  },
  "register_group137_group136_x84": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
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
    "width": 26,
    "height": 18,
    "left": 37,
    "top": 19
  },
  "register_group137_group136_nhpSInThoi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(204, 204, 204, 1)",
    "fontSize": 15,
    "fontWeight": "400",
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
    "width": 138,
    "height": 18,
    "left": 102,
    "top": 18
  },
  "register_group137_group136_cE1Bb9dViE1Bb87tNam2c0683597d2d419fac401f51ccbae779grande": {
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
    "width": 26,
    "height": 26,
    "left": 7,
    "top": 12
  },
  "register_coffeebeansandcoffeecupbackgroundConverted": {
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
    "width": 393,
    "height": 236,
    "left": 0,
    "top": 615
  }
});