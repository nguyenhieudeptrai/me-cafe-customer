import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Commentshop extends Component {

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
    <ScrollView data-layer="26aca230-7259-4616-a0ba-3fb08d04a8ac" style={styles.commentshop}>
        <View data-layer="95809101-c623-4e0c-9508-d963ec392cb8" style={styles.commentshop_rectangle1470}></View>
        <View data-layer="12eedcf9-1cff-4a28-b55b-a3c7787b42c8" style={styles.commentshop_anhGiaTxt}>
            <View data-layer="6f25da4c-52a3-4d9b-aec9-1c57d6cad810" style={styles.commentshop_anhGiaTxt_component3}>
                <Svg data-layer="7492b87f-8914-44dc-80e6-6b22b0838d85" style={styles.commentshop_anhGiaTxt_component3_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
            </View>
            <Text data-layer="c8462757-28e7-4ee5-85f1-478aa78e666e" style={styles.commentshop_anhGiaTxt_anhGiaKhachHang}>ĐÁNH GIÁ KHÁCH HÀNG</Text>
        </View>
        <ReactImage data-layer="66491c31-bff1-4f6a-bb26-6aa9cd0a41bd" source={require('./assets/x3.png')} style={styles.commentshop_x3} />
        <View data-layer="6418a9e9-9bd9-4050-8282-59f0cfad48b4" style={styles.commentshop_pagination}>
            <Svg data-layer="51e27986-449c-4377-9641-c3bf0d558503" style={styles.commentshop_pagination_ellipse8} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
            <Svg data-layer="e7824262-333b-4996-952c-05d87c8736c7" style={styles.commentshop_pagination_ellipse9} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(198, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
            <Svg data-layer="ad460536-2e87-448e-abda-810e2d9ce719" style={styles.commentshop_pagination_ellipse10} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(197, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
            <Svg data-layer="cbb9e449-01b2-4c64-babf-2a07a631f78f" style={styles.commentshop_pagination_ellipse11} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(197, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
        </View>
        <View data-layer="d6c8b9f1-4a84-45c1-b4cf-d5f0f62521c6" style={styles.commentshop_group45}>
            <View data-layer="e6c11695-b163-4a96-808c-6edebc2b004d" style={styles.commentshop_group45_messagec41c5359}>
                <Svg data-layer="c4349fca-e14a-4b17-82e6-a760fefaa1b6" style={styles.commentshop_group45_messagec41c5359_path1127b8c95f5} preserveAspectRatio="none" viewBox="0 -2 261.189697265625 32.46502685546875" fill="rgba(254, 205, 151, 1)"><SvgPath d="M 9.584942817687988 30.46502685546875 L 261.189697265625 30.46502685546875 L 261.189697265625 -2 L 9.584942817687988 -2 L 9.584942817687988 9.594653129577637 L 0 14.23251247406006 L 9.584942817687988 18.8703727722168 L 9.584942817687988 30.46502685546875 Z"  /></Svg>
                <Text data-layer="3faa5099-e2fe-4d92-a298-3959c0fce9a7" style={styles.commentshop_group45_messagec41c5359_ngDngTinLiKhiCBookTrcChKhiIOng}>Ứng dụng tiện lợi khi được book trước chỗ khi đi đông</Text>
            </View>
            <ReactImage data-layer="3af078f4-e3c7-49fa-bbb4-9f829bd10e03" source={require('./assets/rectangle1472c74ae538.png')} style={styles.commentshop_group45_rectangle1472c74ae538} />
            <View data-layer="1a54ece8-6173-4d19-b548-d35ab0f01c5d" style={styles.commentshop_group45_group36}>
                <Svg data-layer="d0338015-5626-4215-adae-5fbc6d31b8a4" style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="d8d08a6b-988a-448e-965a-b893bd685ca7" style={styles.commentshop_group45_group36_path15845c728c9} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="3e185437-e92d-4956-92c6-cdca4f915869" style={styles.commentshop_group45_group36_path159fc09b523} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="6a3bc87a-b62d-4df2-ab1f-773b57b5266d" style={styles.commentshop_group45_group36_path16065ae2b0e} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="a45c76f1-cb1c-43fa-a0a1-1a16cb52f953" style={styles.commentshop_group45_group36_path16149021f86} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="5cab9639-dd6e-4bba-b739-b48e196c25e9" style={styles.commentshop_group46}>
            <View data-layer="f8e1b974-e349-4d46-8210-bad97606b379" style={styles.commentshop_group46_message}>
                <Svg data-layer="447cfce1-0adb-4028-9993-3ab6ef3a9aad" style={styles.commentshop_group46_message_path112} preserveAspectRatio="none" viewBox="0 -2 261.189697265625 31.12445068359375" fill="rgba(254, 205, 151, 1)"><SvgPath d="M 9.584942817687988 29.12445068359375 L 261.189697265625 29.12445068359375 L 261.189697265625 -2 L 9.584942817687988 -2 L 9.584942817687988 9.115875244140625 L 0 13.56222534179688 L 9.584942817687988 18.00857543945313 L 9.584942817687988 29.12445068359375 Z"  /></Svg>
                <Text data-layer="4fe96f88-9dac-42c9-bb4c-29d765f1421c" style={styles.commentshop_group46_message_quanPNhanVienNhitTinh}>Quán đẹp, nhân viên nhiệt tình</Text>
            </View>
            <ReactImage data-layer="d32d415a-0eb5-4f63-950f-2676df3f3b1e" source={require('./assets/rectangle1472.png')} style={styles.commentshop_group46_rectangle1472} />
            <View data-layer="d4cb8b71-717a-45cf-a166-35cf7afefe27" style={styles.commentshop_group46_group44}>
                <Svg data-layer="96de2145-ab39-40ea-8ed1-1b882ed1d657" style={styles.commentshop_group46_group44_path157} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="4d9899b0-303a-4544-ac9a-253897207759" style={styles.commentshop_group46_group44_path158} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="bea22f73-c558-4138-b5ae-56fdb9b2ab80" style={styles.commentshop_group46_group44_path159} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="152124ab-b0f8-4427-864b-277370165f17" style={styles.commentshop_group46_group44_path160} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
                <Svg data-layer="31f83ea4-28d1-472d-bb2c-b9ef59fc3738" style={styles.commentshop_group46_group44_path161} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z"  /></Svg>
            </View>
        </View>
        <View data-layer="e0f27d21-3471-428c-ba10-a9e0ed6d2e32" style={styles.commentshop_group49}>
            <View data-layer="40dee446-4e04-4baf-9a90-65f2f5684b47" style={styles.commentshop_group49_group48}>
                <View data-layer="4b8981c2-c9cb-4eb7-a60c-867b75cec876" style={styles.commentshop_group49_group48_rectangle1473}></View>
                <View data-layer="767a13da-ece7-4096-8530-cc1241230004" style={styles.commentshop_group49_group48_rectangle1474}></View>
            </View>
            <Text data-layer="033a3364-c5ee-435d-a4e8-049029be0432" style={styles.commentshop_group49_nhnXetCaBn}>Nhận xét của bạn…..</Text>
            <Text data-layer="ece8a956-49cd-4ddc-b7d5-edc923ecef1e" style={styles.commentshop_group49_post}>Post</Text>
        </View>
    </ScrollView>
    );
  }
}

Commentshop.propTypes = {

}

Commentshop.defaultProps = {

}


const styles = StyleSheet.create({
  "commentshop": {
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
  "commentshop_rectangle1470": {
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
    "width": 359,
    "height": 426,
    "left": 17,
    "top": 191
  },
  "commentshop_anhGiaTxt": {
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
    "width": 239,
    "height": 18,
    "left": 42,
    "top": 203
  },
  "commentshop_anhGiaTxt_component3": {
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
  "commentshop_anhGiaTxt_component3_path10": {
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
  "commentshop_anhGiaTxt_anhGiaKhachHang": {
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
    "width": 169,
    "height": 18,
    "left": 70,
    "top": 0
  },
  "commentshop_x3": {
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
    "width": 319,
    "height": 210,
    "left": 37,
    "top": 230
  },
  "commentshop_pagination": {
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
    "width": 54,
    "height": 6,
    "left": 170,
    "top": 457
  },
  "commentshop_pagination_ellipse8": {
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
    "width": 6,
    "height": 6,
    "left": 0,
    "top": 0
  },
  "commentshop_pagination_ellipse9": {
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
    "width": 6,
    "height": 6,
    "left": 16,
    "top": 0
  },
  "commentshop_pagination_ellipse10": {
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
    "width": 6,
    "height": 6,
    "left": 32,
    "top": 0
  },
  "commentshop_pagination_ellipse11": {
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
    "width": 6,
    "height": 6,
    "left": 48,
    "top": 0
  },
  "commentshop_group45": {
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
    "width": 298.89,
    "height": 32.47,
    "left": 39.97,
    "top": 527.88
  },
  "commentshop_group45_messagec41c5359": {
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
    "width": 261.19,
    "height": 32.47,
    "left": 37.7,
    "top": 0
  },
  "commentshop_group45_messagec41c5359_path1127b8c95f5": {
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
    "width": 261.19,
    "height": 32.47,
    "left": 0,
    "top": 0
  },
  "commentshop_group45_messagec41c5359_ngDngTinLiKhiCBookTrcChKhiIOng": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 246.09,
    "height": 23,
    "left": 15.09,
    "top": 11.97
  },
  "commentshop_group45_rectangle1472c74ae538": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "width": 24,
    "height": 25,
    "left": 3.03,
    "top": 0
  },
  "commentshop_group45_group36": {
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
    "width": 30.05,
    "height": 4.51,
    "left": 0,
    "top": 27.64
  },
  "commentshop_group45_group36_path1574cb28200": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 0,
    "top": 0
  },
  "commentshop_group45_group36_path15845c728c9": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 6.33,
    "top": 0
  },
  "commentshop_group45_group36_path159fc09b523": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 12.65,
    "top": 0
  },
  "commentshop_group45_group36_path16065ae2b0e": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 18.98,
    "top": 0
  },
  "commentshop_group45_group36_path16149021f86": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 25.31,
    "top": 0
  },
  "commentshop_group46": {
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
    "width": 299.89,
    "height": 31.12,
    "left": 38.97,
    "top": 479.88
  },
  "commentshop_group46_message": {
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
    "width": 261.19,
    "height": 31.12,
    "left": 38.7,
    "top": 0
  },
  "commentshop_group46_message_path112": {
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
    "width": 261.19,
    "height": 31.12,
    "left": 0,
    "top": 0
  },
  "commentshop_group46_message_quanPNhanVienNhitTinh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 1)",
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
    "width": 231,
    "height": 23,
    "left": 15.09,
    "top": 5.56
  },
  "commentshop_group46_rectangle1472": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 15,
    "borderTopRightRadius": 15,
    "borderBottomLeftRadius": 15,
    "borderBottomRightRadius": 15,
    "width": 24,
    "height": 24,
    "left": 3.03,
    "top": 0.12
  },
  "commentshop_group46_group44": {
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
    "width": 30.05,
    "height": 4.51,
    "left": 0,
    "top": 26.62
  },
  "commentshop_group46_group44_path157": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 0,
    "top": 0
  },
  "commentshop_group46_group44_path158": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 6.33,
    "top": 0
  },
  "commentshop_group46_group44_path159": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 12.65,
    "top": 0
  },
  "commentshop_group46_group44_path160": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 18.98,
    "top": 0
  },
  "commentshop_group46_group44_path161": {
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
    "width": 4.74,
    "height": 4.51,
    "left": 25.31,
    "top": 0
  },
  "commentshop_group49": {
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
    "width": 252,
    "height": 19,
    "left": 87,
    "top": 577
  },
  "commentshop_group49_group48": {
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
    "width": 252,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "commentshop_group49_group48_rectangle1473": {
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
    "borderTopWidth": 1,
    "borderTopColor": "rgba(112, 112, 112, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(112, 112, 112, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(112, 112, 112, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(112, 112, 112, 1)",
    "borderTopLeftRadius": 11,
    "borderTopRightRadius": 11,
    "borderBottomLeftRadius": 11,
    "borderBottomRightRadius": 11,
    "width": 206,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "commentshop_group49_group48_rectangle1474": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(191, 151, 104, 1)",
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
      "height": 3
    },
    "shadowRadius": 6,
    "width": 40,
    "height": 19,
    "left": 212,
    "top": 0
  },
  "commentshop_group49_nhnXetCaBn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
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
    "width": 89,
    "height": 13,
    "left": 56,
    "top": 3
  },
  "commentshop_group49_post": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "lineHeight": 12,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 15,
    "left": 222,
    "top": 3.5
  }
});