import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Booking extends Component {

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
    <ScrollView data-layer="0b2d7f25-260c-4aab-8b57-6558bb57f36d" style={styles.booking}>
        <View data-layer="da74f0ca-111f-465b-aa98-99c4007ff318" style={styles.booking_component151}>
            <View data-layer="4011c0e3-8233-46f4-85d8-e3b2bfba18a0" style={styles.booking_component151_group96}>
                <View data-layer="ba27b8d5-46e6-4a6b-b264-69bb483caa1a" style={styles.booking_component151_group96_group95}>
                    <View data-layer="52632723-81f0-4a5b-834b-7e8c99d2549d" style={styles.booking_component151_group96_group95_component141}>
                        <View data-layer="c40a8f21-91f7-4a65-9c20-1e9430a3b302" style={styles.booking_component151_group96_group95_component141_group82}>
                            <View data-layer="99682681-658a-4848-8659-187c5fcd2854" style={styles.booking_component151_group96_group95_component141_group82_group80}>
                                <View data-layer="629acf69-a832-4e5c-a5ae-a5fef3aed39d" style={styles.booking_component151_group96_group95_component141_group82_group80_rectangle30}></View>
                                <View data-layer="7be88d29-a98b-41e1-b8ec-b5d4b2ba3f01" style={styles.booking_component151_group96_group95_component141_group82_group80_ngayT02ea077a}>
                                    <View data-layer="75b4ffbe-c47c-4340-a695-ac30ea3f263d" style={styles.booking_component151_group96_group95_component141_group82_group80_ngayT02ea077a_component121}>
                                        <Text data-layer="989feb3e-9863-465d-aeb9-ca7a8e4f03ab" style={styles.booking_component151_group96_group95_component141_group82_group80_ngayT02ea077a_component121_ngayT27052021}>Ngày đặt: 27/05/2021</Text>
                                    </View>
                                </View>
                                <View data-layer="be5aedb2-b1c1-44da-9c02-b54ebac6c0cb" style={styles.booking_component151_group96_group95_component141_group82_group80_ngayTbaa328ca}>
                                    <Text data-layer="1bc65d8b-9aac-445a-bde6-3dc42b17a4ab" style={styles.booking_component151_group96_group95_component141_group82_group80_ngayTbaa328ca_sLng1Ch}>Số lượng: 1 chỗ</Text>
                                </View>
                                <View data-layer="e6a92813-ed55-4703-ae34-9183213c7a7b" style={styles.booking_component151_group96_group95_component141_group82_group80_ngayT}>
                                    <Text data-layer="13dbcf9a-d537-4ea1-b95c-45a75be40e71" style={styles.booking_component151_group96_group95_component141_group82_group80_ngayT_thiGian070008002}>Thời gian: 07:00-08:002</Text>
                                </View>
                                <ReactImage data-layer="3f23526c-0167-4160-aa7e-3b60da10452b" source={require('./assets/picture.png')} style={styles.booking_component151_group96_group95_component141_group82_group80_picture} />
                            </View>
                        </View>
                    </View>
                    <Text data-layer="81e46ccb-7e62-4ed1-bfe7-b96554a2bd87" style={styles.booking_component151_group96_group95_giaRoomCoffee}>GIA ROOM COFFEE</Text>
                </View>
            </View>
        </View>
        <Svg data-layer="830b6774-a4f2-426b-9dc6-49e2891ab72c" style={styles.booking_path6} preserveAspectRatio="none" viewBox="-0.75 -0.75 394.5 2.5" fill="transparent"><SvgPath d="M 0 1 L 393 0"  /></Svg>
        <Text data-layer="46b5a670-5290-40b1-a881-d3fa897678e3" style={styles.booking_quaTrinhTN}>Quá trình đặt đơn</Text>
        <Svg data-layer="4df86279-85c8-4065-abcb-423636dfa567" style={styles.booking_path15} preserveAspectRatio="none" viewBox="0.10845947265625 -104.67829132080078 357.21533203125 1.5" fill="transparent"><SvgPath d="M 0.85845947265625 -103.9282913208008 L 139.4302978515625 -103.9282913208008 L 356.57373046875 -103.9282913208008"  /></Svg>
        <View data-layer="4ff92a64-acf0-45cf-8974-e62794a6d137" style={styles.booking_group38}>
            <View data-layer="9ebe35f9-e570-4cf0-a863-212e850d4de3" style={styles.booking_group38_navigationBar}>
                <Svg data-layer="a90cf1df-3ec7-43d2-a443-7888be53c53a" style={styles.booking_group38_navigationBar_path647} preserveAspectRatio="none" viewBox="0 0 393 75.1141357421875" fill="rgba(240, 211, 122, 1)"><SvgPath d="M 0 0 L 393 0 L 393 75.1141357421875 L 0 75.1141357421875 L 0 0 Z"  /></Svg>
                <View data-layer="31cdef00-2353-46d4-8748-85b60bc6ed4a" style={styles.booking_group38_navigationBar_component3}>
                    <Svg data-layer="60783425-f4e7-4a8f-8f5c-42a29e715df4" style={styles.booking_group38_navigationBar_component3_path107d5da00f} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
                </View>
                <Text data-layer="52f1b693-bf92-43e5-82c5-b356d0fd45b3" style={styles.booking_group38_navigationBar_hoanThanhTCh}>HOÀN THÀNH ĐẶT CHỖ</Text>
            </View>
        </View>
        <View data-layer="fb398d3a-a070-40cb-856e-bccb9303be23" style={styles.booking_menu}>
            <View data-layer="e4f2161b-27c4-4521-8f8b-e17b00739e47" style={styles.booking_menu_group57}>
                <Svg data-layer="34124db0-e4d4-43c1-bce0-9ea0ca5850cc" style={styles.booking_menu_group57_path5} preserveAspectRatio="none" viewBox="0 0 393 79" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 16 0 L 377 0 C 385.8365478515625 0 393 7.160732746124268 393 15.99394512176514 L 393 78.73075103759766 L 0 79 L 0 15.99394512176514 C 0 7.160732746124268 7.163443565368652 0 16 0 Z"  /></Svg>
            </View>
            <View data-layer="57aa5046-f82b-4ccc-baf0-3f63dee3a523" style={styles.booking_menu_group6}>
                <View data-layer="476e67b1-26cb-42e1-9d51-eb06f8b7c499" style={styles.booking_menu_group6_group14}>
                    <ReactImage data-layer="a0dac538-f888-40b5-93e9-a76c56671643" source={require('./assets/tabHome.png')} style={styles.booking_menu_group6_group14_tabHome} />
                    <Text data-layer="998295de-0e16-4af3-9a50-6bf37322ebc4" style={styles.booking_menu_group6_group14_trangCh}>Trang chủ</Text>
                </View>
            </View>
            <View data-layer="b93a7e18-2d63-4d6c-8938-1d4e111caf77" style={styles.booking_menu_group7}>
                <View data-layer="f88497b6-375b-4fa7-b881-b8352b471729" style={styles.booking_menu_group7_group13}>
                    <ReactImage data-layer="f47feeb6-acd8-4abd-a58c-3cc6f2521004" source={require('./assets/boking.png')} style={styles.booking_menu_group7_group13_boking} />
                    <Text data-layer="8bfee2c2-2b00-46d4-aef7-86345576d6c1" style={styles.booking_menu_group7_group13_tCh}>Đặt chỗ</Text>
                </View>
            </View>
            <View data-layer="8e3b87b1-a1f1-40dc-bb03-2c3420b55db6" style={styles.booking_menu_group8}>
                <View data-layer="b108f2ae-4ee7-46c1-b9d3-9e4eed1666d8" style={styles.booking_menu_group8_group12}>
                    <ReactImage data-layer="65e76b7b-32d5-4fcb-a6df-092964aaaf33" source={require('./assets/tab3.png')} style={styles.booking_menu_group8_group12_tab3} />
                    <Text data-layer="493472a5-318d-49a2-ab3d-7c4dd9b89c99" style={styles.booking_menu_group8_group12_tichIm}>Tích điểm</Text>
                </View>
            </View>
            <View data-layer="9a5d1e32-7dd2-46e2-b3bf-22062fd0d94b" style={styles.booking_menu_group9}>
                <View data-layer="f80c88b7-fea0-4868-bfb5-5463afefd574" style={styles.booking_menu_group9_group11}>
                    <ReactImage data-layer="d1f17e08-d904-4d53-83ae-6d98d0ea3a7f" source={require('./assets/setting2.png')} style={styles.booking_menu_group9_group11_setting2} />
                    <Text data-layer="09f50a82-243e-4607-9d29-68998901c346" style={styles.booking_menu_group9_group11_caiT}>Cài đặt</Text>
                </View>
            </View>
        </View>
        <View data-layer="9c7494c1-8cc5-4e34-b8c5-1a0eb44d7d12" style={styles.booking_group152}>
            <View data-layer="8d2bc137-e3a7-47af-8f89-2ea4d64ec421" style={styles.booking_group152_rectangle1491}></View>
            <View data-layer="a601d7e9-b8a0-4a25-80cb-4950a3b34f23" style={styles.booking_group152_group151}>
                <Text data-layer="52a1329b-695d-4188-904f-2206696f4b55" style={styles.booking_group152_group151_spTi}>Sắp tới</Text>
                <View data-layer="e21f8263-ed04-4ada-98d9-d6fa579224d7" style={styles.booking_group152_group151_component1}>
                    <Svg data-layer="1ebfd60c-ed8d-4ea2-b859-e415d4fcc5c7" style={styles.booking_group152_group151_component1_path10} preserveAspectRatio="none" viewBox="6.545454978942871 0 9.45458984375 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 13.14929389953613 8.049758911132813 L 13.14929389953613 8.049758911132813 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
                </View>
            </View>
        </View>
        <Text data-layer="35f877f1-c819-4525-a1a6-a7dd63fc90bd" style={styles.booking_angTiQuan}>Đang tại quán</Text>
    </ScrollView>
    );
  }
}

Booking.propTypes = {

}

Booking.defaultProps = {

}


const styles = StyleSheet.create({
  "booking": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(220, 220, 220, 1)",
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
  "booking_component151": {
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
    "width": 366,
    "height": 139,
    "left": 13.5,
    "top": 173
  },
  "booking_component151_group96": {
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
    "width": 366,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95": {
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
    "width": 366,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141": {
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
    "width": 366,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82": {
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
    "width": 366,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82_group80": {
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
    "width": 366,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82_group80_rectangle30": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
      "height": 6
    },
    "shadowRadius": 6,
    "width": 366,
    "height": 139,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82_group80_ngayT02ea077a": {
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
    "width": 137,
    "height": 17,
    "left": 151,
    "top": 84
  },
  "booking_component151_group96_group95_component141_group82_group80_ngayT02ea077a_component121": {
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
    "width": 137,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82_group80_ngayT02ea077a_component121_ngayT27052021": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(28, 5, 5, 1)",
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
    "width": 137,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82_group80_ngayTbaa328ca": {
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
    "width": 97,
    "height": 17,
    "left": 151,
    "top": 59
  },
  "booking_component151_group96_group95_component141_group82_group80_ngayTbaa328ca_sLng1Ch": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(28, 5, 5, 1)",
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
    "width": 97,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82_group80_ngayT": {
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
    "width": 146,
    "height": 17,
    "left": 151,
    "top": 108
  },
  "booking_component151_group96_group95_component141_group82_group80_ngayT_thiGian070008002": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
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
    "width": 146,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "booking_component151_group96_group95_component141_group82_group80_picture": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 111,
    "height": 107,
    "left": 11,
    "top": 17
  },
  "booking_component151_group96_group95_giaRoomCoffee": {
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
    "width": 129,
    "height": 18,
    "left": 135.5,
    "top": 37
  },
  "booking_path6": {
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
    "width": 395,
    "height": 3,
    "left": -0.5,
    "top": 52.5
  },
  "booking_quaTrinhTN": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "italic",
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
    "width": 114,
    "height": 18,
    "left": 13.64,
    "top": 102.5
  },
  "booking_path15": {
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
    "width": 357.72,
    "height": 2,
    "left": 12.5,
    "top": 125.07
  },
  "booking_group38": {
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
    "width": 393,
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "booking_group38_navigationBar": {
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
    "width": 393,
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "booking_group38_navigationBar_path647": {
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
      "height": 4
    },
    "shadowRadius": 6,
    "width": 393,
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "booking_group38_navigationBar_component3": {
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
    "left": 19,
    "top": 39
  },
  "booking_group38_navigationBar_component3_path107d5da00f": {
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
  "booking_group38_navigationBar_hoanThanhTCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
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
    "width": 162,
    "height": 19,
    "left": 116,
    "top": 37
  },
  "booking_menu": {
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
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 772
  },
  "booking_menu_group57": {
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
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "booking_menu_group57_path5": {
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
    "shadowOpacity": 0.3411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "booking_menu_group6": {
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
    "width": 50,
    "height": 51,
    "left": 23,
    "top": 14
  },
  "booking_menu_group6_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
  "booking_menu_group6_group14": {
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
    "width": 50,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "booking_menu_group6_group14_tabHome": {
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
    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "booking_menu_group6_group14_trangCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
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
    "width": 50,
    "height": 13,
    "left": 0,
    "top": 38
  },
  "booking_menu_group7": {
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
    "width": 38,
    "height": 51,
    "left": 128,
    "top": 14
  },
  "booking_menu_group7_rectangle12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
  "booking_menu_group7_group13": {
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
    "width": 38,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "booking_menu_group7_group13_boking": {
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
    "width": 33,
    "height": 33,
    "left": 3,
    "top": 0
  },
  "booking_menu_group7_group13_tCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
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
    "width": 38,
    "height": 13,
    "left": 0,
    "top": 38
  },
  "booking_menu_group8": {
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
    "width": 50,
    "height": 51,
    "left": 221,
    "top": 14
  },
  "booking_menu_group8_rectangle13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
  "booking_menu_group8_group12": {
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
    "width": 50,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "booking_menu_group8_group12_tab3": {
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
    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "booking_menu_group8_group12_tichIm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
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
    "width": 50,
    "height": 13,
    "left": 0,
    "top": 38
  },
  "booking_menu_group9": {
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
    "width": 36,
    "height": 51,
    "left": 327,
    "top": 14
  },
  "booking_menu_group9_rectangle14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
  "booking_menu_group9_group11": {
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
    "width": 36,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "booking_menu_group9_group11_setting2": {
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
    "width": 33,
    "height": 33,
    "left": 2,
    "top": 0
  },
  "booking_menu_group9_group11_caiT": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
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
    "width": 36,
    "height": 13,
    "left": 0,
    "top": 38
  },
  "booking_group152": {
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
    "width": 88,
    "height": 23,
    "left": 289,
    "top": 99
  },
  "booking_group152_rectangle1491": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(199, 195, 195, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 2,
    "borderTopRightRadius": 2,
    "borderBottomLeftRadius": 2,
    "borderBottomRightRadius": 2,
    "width": 88,
    "height": 23,
    "left": 0,
    "top": 0
  },
  "booking_group152_group151": {
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
    "width": 63.27,
    "height": 13,
    "left": 13,
    "top": 5
  },
  "booking_group152_group151_spTi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 24,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 31,
    "height": 27,
    "left": 0,
    "top": -5.5
  },
  "booking_group152_group151_component1": {
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
    "width": 10.28,
    "height": 16.47,
    "left": 49.8,
    "top": -1.95
  },
  "booking_group152_group151_component1_path10": {
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
    "width": 9.45,
    "height": 16,
    "left": 0.41,
    "top": 0.24
  },
  "booking_angTiQuan": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(210, 151, 59, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "italic",
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
    "height": 18,
    "left": 255.22,
    "top": 182.14
  }
});