import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Confirmbooking extends Component {

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
    <ScrollView data-layer="29ac3d8e-bc6c-4855-95f0-73e6b53dfc07" style={styles.confirmbooking}>
        <View data-layer="81d01e88-e4a6-49dc-b073-af6606e61941" style={styles.confirmbooking_group153}>
            <View data-layer="199ecf1b-b3ab-4a93-af7c-ede3abfc2d19" style={styles.confirmbooking_group153_rectangle1470}></View>
            <Text data-layer="24f740aa-f9f2-49a0-b03a-6d3f0fa45711" style={styles.confirmbooking_group153_xacNhn1a247893}>XÁC NHẬN</Text>
            <ReactImage data-layer="e5a2b51f-a4b7-4a34-a831-16ada5aef279" source={require('./assets/x3.png')} style={styles.confirmbooking_group153_x3} />
            <View data-layer="a04aa36a-541a-4775-b801-20de524979b8" style={styles.confirmbooking_group153_pagination}>
                <Svg data-layer="653e069e-452c-476f-9697-102a436d4eab" style={styles.confirmbooking_group153_pagination_ellipse8} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
                <Svg data-layer="28fb0322-4f11-4f9f-a644-1c10777f4140" style={styles.confirmbooking_group153_pagination_ellipse9} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(198, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
                <Svg data-layer="065ae0f5-ae3e-4fb3-b60b-2a0963620062" style={styles.confirmbooking_group153_pagination_ellipse10} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(197, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
                <Svg data-layer="19cca5b6-b51c-413d-9d92-820c5c69783a" style={styles.confirmbooking_group153_pagination_ellipse11} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(197, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
            </View>
            <View data-layer="5cd86ec1-9845-4681-bff7-a326a79351e4" style={styles.confirmbooking_group153_component3}>
                <Svg data-layer="59d5a4bb-217c-449e-9ee1-f4d8e8317c8d" style={styles.confirmbooking_group153_component3_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
            </View>
            <Text data-layer="bb304f76-3334-4840-8bba-f86d92968c99" style={styles.confirmbooking_group153_giaRoomCoffee}>GIA ROOM COFFEE</Text>
            <View data-layer="6a3be891-8e05-40d5-a5da-8f26f36f104d" style={styles.confirmbooking_group153_group40}>
                <View data-layer="e889d5c5-132c-4799-80d0-e1f31775a3e2" style={styles.confirmbooking_group153_group40_group16}>
                    <View data-layer="675e8f7e-c838-4722-a62e-19d9eaaa125a" style={styles.confirmbooking_group153_group40_group16_component1}>
                        <Svg data-layer="d9fc8e57-561e-45ff-8d01-19262ee4480b" style={styles.confirmbooking_group153_group40_group16_component1_union1} preserveAspectRatio="none" viewBox="0 0 16.000244140625 16.000244140625" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 0 16.00021362304688 L 0 14.00042724609375 C 0 11.7999267578125 3.600000143051147 9.999908447265625 8.000100135803223 9.999908447265625 C 12.40019989013672 9.999908447265625 16.00020027160645 11.7999267578125 16.00020027160645 14.00042724609375 L 16.00020027160645 16.00021362304688 L 0 16.00021362304688 Z M 3.999600172042847 4.000518798828125 C 3.999600172042847 1.791015625 5.790600299835205 0 8.000100135803223 0 C 10.20870018005371 0 11.99970054626465 1.791015625 11.99970054626465 4.000518798828125 C 11.99970054626465 6.2091064453125 10.20870018005371 8.0001220703125 8.000100135803223 8.0001220703125 C 5.790600299835205 8.0001220703125 3.999600172042847 6.2091064453125 3.999600172042847 4.000518798828125 Z"  /></Svg>
                    </View>
                    <Text data-layer="73d6e144-7026-44b7-a99f-ebfb5f315971" style={styles.confirmbooking_group153_group40_group16_sLng}>Số lượng:</Text>
                </View>
                <View data-layer="fb513375-9008-4c37-a98d-a7bd5739e092" style={styles.confirmbooking_group153_group40_group39}>
                    <Text data-layer="188a8b78-8ebd-4ef4-be21-22416663ea80" style={styles.confirmbooking_group153_group40_group39_x1Ch}>1 Chỗ</Text>
                </View>
            </View>
            <View data-layer="019df32a-a6ce-4f59-9946-9e3d60929bf5" style={styles.confirmbooking_group153_group43}>
                <View data-layer="fb5e12d7-920f-46aa-96cc-ab7b959c99fb" style={styles.confirmbooking_group153_group43_date}>
                    <View data-layer="02fb8c17-7403-4b32-bf66-1620eff5a9e5" style={styles.confirmbooking_group153_group43_date_calendar}>
                        <View data-layer="80ddcb00-7834-41d0-a6eb-70ed37a833b1" style={styles.confirmbooking_group153_group43_date_calendar_rectangle557}></View>
                        <Svg data-layer="5d248dd1-5244-43d4-9cd8-1af772248799" style={styles.confirmbooking_group153_group43_date_calendar_path149} preserveAspectRatio="none" viewBox="0 0 20 23.66668701171875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 2.5 7.395839691162109 L 2.5 20.70835113525391 L 17.5 20.70835113525391 L 17.5 7.395839691162109 L 2.5 7.395839691162109 Z M 16.25 2.958335876464844 L 18.75 2.958335876464844 C 19.5 2.958335876464844 20 3.55000376701355 20 4.437503814697266 L 20 22.18751907348633 C 20 23.07502174377441 19.5 23.66668701171875 18.75 23.66668701171875 L 1.25 23.66668701171875 C 0.5 23.66668701171875 0 23.07502174377441 0 22.18751907348633 L 0 4.437503814697266 C 0 3.55000376701355 0.5000000596046448 2.958335876464844 1.25 2.958335876464844 L 3.75 2.958335876464844 L 3.75 1.479167938232422 C 3.75 0.5916671752929688 4.25 0 5 0 C 5.75 0 6.25 0.5916672348976135 6.25 1.479167938232422 L 6.25 2.958335876464844 L 13.75 2.958335876464844 L 13.75 1.479167938232422 C 13.75 0.5916671752929688 14.25 0 15 0 C 15.75000095367432 0 16.25 0.5916672348976135 16.25 1.479167938232422 L 16.25 2.958335876464844 Z M 15 17.75001525878906 L 12.5 17.75001525878906 L 12.5 14.79167938232422 L 15 14.79167938232422 L 15 17.75001525878906 Z M 11.25 17.75001525878906 L 8.75 17.75001525878906 L 8.75 14.79167938232422 L 11.25 14.79167938232422 L 11.25 17.75001525878906 Z M 15 13.3125114440918 L 12.5 13.3125114440918 L 12.5 10.35417556762695 L 15 10.35417556762695 L 15 13.3125114440918 Z M 11.25 13.3125114440918 L 8.75 13.3125114440918 L 8.75 10.35417556762695 L 11.25 10.35417556762695 L 11.25 13.3125114440918 Z M 7.5 17.75001525878906 L 5 17.75001525878906 L 5 14.79167938232422 L 7.5 14.79167938232422 L 7.5 17.75001525878906 Z"  /></Svg>
                    </View>
                </View>
                <View data-layer="b432276b-0cd4-471a-bcc8-9f30ca0bbe9d" style={styles.confirmbooking_group153_group43_group42}>
                    <Text data-layer="93678ed7-f0bb-4021-bbd5-b59aabb2fe4c" style={styles.confirmbooking_group153_group43_group42_ngay}>Ngày:</Text>
                    <View data-layer="f7bfc913-99e1-4f09-a421-0debbd132cf9" style={styles.confirmbooking_group153_group43_group42_group41}>
                        <Text data-layer="18b5d516-fea9-4e3d-9e63-80b2ffef7175" style={styles.confirmbooking_group153_group43_group42_group41_x27052021}>27/05/2021</Text>
                    </View>
                </View>
            </View>
            <Text data-layer="3235474a-490f-4456-be79-6e8bc8268e53" style={styles.confirmbooking_group153_x101OanThImQunPhuNhunTphcm}>10/1 Đoàn Thị Điểm, Quận Phú Nhuận, TP.HCM</Text>
            <View data-layer="5b527544-27c5-40da-9fb3-b38db9aa35f5" style={styles.confirmbooking_group153_group2}>
                <Svg data-layer="cb97fb5e-ec47-4c70-832c-81e95cb41fd3" style={styles.confirmbooking_group153_group2_iconMaterialAccessTime} preserveAspectRatio="none" viewBox="3 3 24 24" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 14.98800086975098 3 C 8.36400032043457 3 3 8.376001358032227 3 15 C 3 21.62400054931641 8.36400032043457 27.00000190734863 14.98800086975098 27.00000190734863 C 21.62400245666504 27.00000190734863 27.00000190734863 21.62400245666504 27.00000190734863 15 C 27.00000190734863 8.375999450683594 21.62400245666504 3 14.98800086975098 3 Z M 15 24.60000038146973 C 9.696001052856445 24.60000038146973 5.40000057220459 20.30400276184082 5.40000057220459 15 C 5.40000057220459 9.695999145507813 9.696001052856445 5.40000057220459 15 5.40000057220459 C 20.30400276184082 5.40000057220459 24.60000038146973 9.696001052856445 24.60000038146973 15 C 24.60000038146973 20.30400276184082 20.30400276184082 24.60000038146973 15 24.60000038146973 Z M 15.60000133514404 9.000000953674316 L 13.80000019073486 9.000000953674316 L 13.80000019073486 16.20000076293945 L 20.10000038146973 19.98000144958496 L 21.00000190734863 18.50400161743164 L 15.60000133514404 15.30000019073486 L 15.60000133514404 9.000000953674316 Z"  /></Svg>
                <Text data-layer="f3150096-27a2-49a0-8800-2287831a1b10" style={styles.confirmbooking_group153_group2_thiGian}>Thời gian:</Text>
            </View>
            <View data-layer="75237c2d-45f5-4a93-983f-b3d3f82db724" style={styles.confirmbooking_group153_group47}>
                <Text data-layer="7514f2a2-aff3-4b3e-8c90-738a0dc197ad" style={styles.confirmbooking_group153_group47_x07000800}>07:00 - 08:00</Text>
            </View>
            <View data-layer="f1c867a7-acb3-48d7-8971-158932eabb90" style={styles.confirmbooking_group153_group12}>
                <View data-layer="80931efc-6650-454e-a06f-d89d354a7aa7" style={styles.confirmbooking_group153_group12_group509f83a099}>
                    <Svg data-layer="3c0b3d5b-0de2-4d1b-9186-0ed1e1c91f31" style={styles.confirmbooking_group153_group12_group509f83a099_path6450674dbc4} preserveAspectRatio="none" viewBox="0 0 114.13330078125 32" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 5.92900276184082 0 L 108.2042999267578 0 C 111.4787979125977 0 114.13330078125 1.790860891342163 114.13330078125 4 L 114.13330078125 28 C 114.13330078125 30.20913887023926 111.4787979125977 32 108.2042999267578 32 L 5.92900276184082 32 C 2.654504776000977 32 0 30.20913887023926 0 28 L 0 4 C 0 1.790860891342163 2.654504776000977 0 5.92900276184082 0 Z"  /></Svg>
                    <View style={styles.confirmbooking_group153_group12_group509f83a099_xacNhn}><Text data-layer="70ca2b5c-4614-4798-9375-5b9733508c3b" style={{"marginTop":-0.5,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":14.3}}>Xác nhận</Text></View>
                </View>
            </View>
            <View data-layer="2ec200c4-dc78-4d05-a334-c98c9a6c559c" style={styles.confirmbooking_group153_group51}>
                <View data-layer="b3bb7a79-67f6-401d-9609-f7c9b29560fc" style={styles.confirmbooking_group153_group51_group50}>
                    <Svg data-layer="344611ed-bbc7-4593-930e-16ad3ac73aa0" style={styles.confirmbooking_group153_group51_group50_path645} preserveAspectRatio="none" viewBox="-1.5 -1.5 117.13330078125 35" fill="transparent"><SvgPath d="M 5.92900276184082 0 L 108.2042999267578 0 C 111.4787979125977 0 114.13330078125 1.790860891342163 114.13330078125 4 L 114.13330078125 28 C 114.13330078125 30.20913887023926 111.4787979125977 32 108.2042999267578 32 L 5.92900276184082 32 C 2.654504776000977 32 0 30.20913887023926 0 28 L 0 4 C 0 1.790860891342163 2.654504776000977 0 5.92900276184082 0 Z"  /></Svg>
                    <View style={styles.confirmbooking_group153_group51_group50_hyB}><Text data-layer="342c092c-1ac0-4931-95c1-e635b18cf3d5" style={{"marginTop":-0.5,"color":"rgba(191, 151, 104, 1)","fontSize":13,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":14.3}}>Hủy bỏ</Text></View>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Confirmbooking.propTypes = {

}

Confirmbooking.defaultProps = {

}


const styles = StyleSheet.create({
  "confirmbooking": {
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
    "width": "auto",
    "height": "auto",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "confirmbooking_group153": {
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
    "width": "auto",
    "height": "auto",
    "left": 25,
    "top": 189,
    "right": 24,
    "bottom": 171
  },
  "confirmbooking_group153_rectangle1470": {
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
    "width": 344,
    "height": 491,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_xacNhn1a247893": {
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
    "width": 75,
    "height": 18,
    "left": 133,
    "top": 14
  },
  "confirmbooking_group153_x3": {
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
    "left": 12,
    "top": 44
  },
  "confirmbooking_group153_pagination": {
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
    "left": 145,
    "top": 268
  },
  "confirmbooking_group153_pagination_ellipse8": {
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
  "confirmbooking_group153_pagination_ellipse9": {
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
  "confirmbooking_group153_pagination_ellipse10": {
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
  "confirmbooking_group153_pagination_ellipse11": {
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
  "confirmbooking_group153_component3": {
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
    "left": 17,
    "top": 14
  },
  "confirmbooking_group153_component3_path10": {
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
  "confirmbooking_group153_giaRoomCoffee": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
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
    "width": 121,
    "height": 17,
    "left": 33,
    "top": 287
  },
  "confirmbooking_group153_group40": {
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
    "width": 125,
    "height": 16,
    "left": 33,
    "top": 329
  },
  "confirmbooking_group153_group40_group16": {
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
    "width": 79,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group40_group16_component1": {
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
  "confirmbooking_group153_group40_group16_component1_union1": {
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
  "confirmbooking_group153_group40_group16_sLng": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
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
    "width": 56,
    "height": 15,
    "left": 23,
    "top": 1
  },
  "confirmbooking_group153_group40_group39": {
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
    "width": 34,
    "height": 15,
    "left": 91,
    "top": 1
  },
  "confirmbooking_group153_group40_group39_x1Ch": {
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
    "width": 34,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43": {
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
    "height": 24,
    "left": 33,
    "top": 358
  },
  "confirmbooking_group153_group43_date": {
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
    "width": 20,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_date_calendar": {
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
    "width": 20,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_date_calendar_rectangle557": {
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
    "width": 19,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_date_calendar_path149": {
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
    "width": 20,
    "height": 23.67,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_group42": {
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
    "width": 110,
    "height": 15,
    "left": 27,
    "top": 5
  },
  "confirmbooking_group153_group43_group42_ngay": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
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
    "width": 34,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_group42_group41": {
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
    "width": 69,
    "height": 15,
    "left": 41,
    "top": 0
  },
  "confirmbooking_group153_group43_group42_group41_x27052021": {
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
    "width": 69,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_x101OanThImQunPhuNhunTphcm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
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
    "width": 204,
    "height": 13,
    "left": 33,
    "top": 304
  },
  "confirmbooking_group153_group2": {
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
    "width": 85,
    "height": 24,
    "left": 33,
    "top": 395
  },
  "confirmbooking_group153_group2_iconMaterialAccessTime": {
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
    "width": 24,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group2_thiGian": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
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
    "width": 58,
    "height": 15,
    "left": 27,
    "top": 4
  },
  "confirmbooking_group153_group47": {
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
    "width": 75,
    "height": 15,
    "left": 128,
    "top": 400
  },
  "confirmbooking_group153_group47_x07000800": {
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
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group12": {
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
    "width": 114.13,
    "height": 32,
    "left": 48.37,
    "top": 435
  },
  "confirmbooking_group153_group12_group509f83a099": {
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
    "width": 114.13,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group12_group509f83a099_path6450674dbc4": {
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
    "width": 114.13,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group12_group509f83a099_xacNhn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 14.3,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 54,
    "height": 15,
    "left": 31,
    "top": 10.5
  },
  "confirmbooking_group153_group51": {
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
    "width": 114.13,
    "height": 32,
    "left": 183,
    "top": 435
  },
  "confirmbooking_group153_group51_group50": {
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
    "width": 114.13,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group51_group50_path645": {
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
    "width": 114.13,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group51_group50_hyB": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 14.3,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 40,
    "height": 15,
    "left": 38,
    "top": 10.5
  }
});