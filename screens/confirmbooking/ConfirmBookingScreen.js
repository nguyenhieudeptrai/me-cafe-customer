import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const ConfirmBookingScreen = () => {

    return (
    <ScrollView style={styles.confirmbooking}>
        <View style={styles.confirmbooking_group153}>
            <View style={styles.confirmbooking_group153_rectangle1470}></View>
            <Text style={styles.confirmbooking_group153_xacNhn1a247893}>XÁC NHẬN</Text>
            <ReactImage source={require('../../assets/x3.png')} style={styles.confirmbooking_group153_x3} />
            <View style={styles.confirmbooking_group153_pagination}>
                <Svg style={styles.confirmbooking_group153_pagination_ellipse8} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
                <Svg style={styles.confirmbooking_group153_pagination_ellipse9} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(198, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
                <Svg style={styles.confirmbooking_group153_pagination_ellipse10} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(197, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
                <Svg style={styles.confirmbooking_group153_pagination_ellipse11} preserveAspectRatio="none" viewBox="0 0 6 6" fill="rgba(197, 198, 201, 1)"><SvgPath d="M 3 0 C 4.656854152679443 0 6 1.343145847320557 6 3 C 6 4.656854152679443 4.656854152679443 6 3 6 C 1.343145847320557 6 0 4.656854152679443 0 3 C 0 1.343145847320557 1.343145847320557 0 3 0 Z"  /></Svg>
            </View>
            <View style={styles.confirmbooking_group153_component3}>
                <Svg style={styles.confirmbooking_group153_component3_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
            </View>
            <Text style={styles.confirmbooking_group153_giaRoomCoffee}>GIA ROOM COFFEE</Text>
            <View style={styles.confirmbooking_group153_group40}>
                <View style={styles.confirmbooking_group153_group40_group16}>
                    <View style={styles.confirmbooking_group153_group40_group16_component1}>
                        <Svg style={styles.confirmbooking_group153_group40_group16_component1_union1} preserveAspectRatio="none" viewBox="0 0 16.000244140625 16.000244140625" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 0 16.00021362304688 L 0 14.00042724609375 C 0 11.7999267578125 3.600000143051147 9.999908447265625 8.000100135803223 9.999908447265625 C 12.40019989013672 9.999908447265625 16.00020027160645 11.7999267578125 16.00020027160645 14.00042724609375 L 16.00020027160645 16.00021362304688 L 0 16.00021362304688 Z M 3.999600172042847 4.000518798828125 C 3.999600172042847 1.791015625 5.790600299835205 0 8.000100135803223 0 C 10.20870018005371 0 11.99970054626465 1.791015625 11.99970054626465 4.000518798828125 C 11.99970054626465 6.2091064453125 10.20870018005371 8.0001220703125 8.000100135803223 8.0001220703125 C 5.790600299835205 8.0001220703125 3.999600172042847 6.2091064453125 3.999600172042847 4.000518798828125 Z"  /></Svg>
                    </View>
                    <Text style={styles.confirmbooking_group153_group40_group16_sLng}>Số lượng:</Text>
                </View>
                <View style={styles.confirmbooking_group153_group40_group39}>
                    <Text style={styles.confirmbooking_group153_group40_group39_x1Ch}>1 Chỗ</Text>
                </View>
            </View>
            <View style={styles.confirmbooking_group153_group43}>
                <View style={styles.confirmbooking_group153_group43_date}>
                    <View style={styles.confirmbooking_group153_group43_date_calendar}>
                        <View style={styles.confirmbooking_group153_group43_date_calendar_rectangle557}></View>
                        <Svg style={styles.confirmbooking_group153_group43_date_calendar_path149} preserveAspectRatio="none" viewBox="0 0 20 23.66668701171875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 2.5 7.395839691162109 L 2.5 20.70835113525391 L 17.5 20.70835113525391 L 17.5 7.395839691162109 L 2.5 7.395839691162109 Z M 16.25 2.958335876464844 L 18.75 2.958335876464844 C 19.5 2.958335876464844 20 3.55000376701355 20 4.437503814697266 L 20 22.18751907348633 C 20 23.07502174377441 19.5 23.66668701171875 18.75 23.66668701171875 L 1.25 23.66668701171875 C 0.5 23.66668701171875 0 23.07502174377441 0 22.18751907348633 L 0 4.437503814697266 C 0 3.55000376701355 0.5000000596046448 2.958335876464844 1.25 2.958335876464844 L 3.75 2.958335876464844 L 3.75 1.479167938232422 C 3.75 0.5916671752929688 4.25 0 5 0 C 5.75 0 6.25 0.5916672348976135 6.25 1.479167938232422 L 6.25 2.958335876464844 L 13.75 2.958335876464844 L 13.75 1.479167938232422 C 13.75 0.5916671752929688 14.25 0 15 0 C 15.75000095367432 0 16.25 0.5916672348976135 16.25 1.479167938232422 L 16.25 2.958335876464844 Z M 15 17.75001525878906 L 12.5 17.75001525878906 L 12.5 14.79167938232422 L 15 14.79167938232422 L 15 17.75001525878906 Z M 11.25 17.75001525878906 L 8.75 17.75001525878906 L 8.75 14.79167938232422 L 11.25 14.79167938232422 L 11.25 17.75001525878906 Z M 15 13.3125114440918 L 12.5 13.3125114440918 L 12.5 10.35417556762695 L 15 10.35417556762695 L 15 13.3125114440918 Z M 11.25 13.3125114440918 L 8.75 13.3125114440918 L 8.75 10.35417556762695 L 11.25 10.35417556762695 L 11.25 13.3125114440918 Z M 7.5 17.75001525878906 L 5 17.75001525878906 L 5 14.79167938232422 L 7.5 14.79167938232422 L 7.5 17.75001525878906 Z"  /></Svg>
                    </View>
                </View>
                <View style={styles.confirmbooking_group153_group43_group42}>
                    <Text style={styles.confirmbooking_group153_group43_group42_ngay}>Ngày:</Text>
                    <View style={styles.confirmbooking_group153_group43_group42_group41}>
                        <Text style={styles.confirmbooking_group153_group43_group42_group41_x27052021}>27/05/2021</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.confirmbooking_group153_x101OanThImQunPhuNhunTphcm}>10/1 Đoàn Thị Điểm, Quận Phú Nhuận, TP.HCM</Text>
            <View style={styles.confirmbooking_group153_group2}>
                <Svg style={styles.confirmbooking_group153_group2_iconMaterialAccessTime} preserveAspectRatio="none" viewBox="3 3 24 24" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 14.98800086975098 3 C 8.36400032043457 3 3 8.376001358032227 3 15 C 3 21.62400054931641 8.36400032043457 27.00000190734863 14.98800086975098 27.00000190734863 C 21.62400245666504 27.00000190734863 27.00000190734863 21.62400245666504 27.00000190734863 15 C 27.00000190734863 8.375999450683594 21.62400245666504 3 14.98800086975098 3 Z M 15 24.60000038146973 C 9.696001052856445 24.60000038146973 5.40000057220459 20.30400276184082 5.40000057220459 15 C 5.40000057220459 9.695999145507813 9.696001052856445 5.40000057220459 15 5.40000057220459 C 20.30400276184082 5.40000057220459 24.60000038146973 9.696001052856445 24.60000038146973 15 C 24.60000038146973 20.30400276184082 20.30400276184082 24.60000038146973 15 24.60000038146973 Z M 15.60000133514404 9.000000953674316 L 13.80000019073486 9.000000953674316 L 13.80000019073486 16.20000076293945 L 20.10000038146973 19.98000144958496 L 21.00000190734863 18.50400161743164 L 15.60000133514404 15.30000019073486 L 15.60000133514404 9.000000953674316 Z"  /></Svg>
                <Text style={styles.confirmbooking_group153_group2_thiGian}>Thời gian:</Text>
            </View>
            <View style={styles.confirmbooking_group153_group47}>
                <Text style={styles.confirmbooking_group153_group47_x07000800}>07:00 - 08:00</Text>
            </View>
            <View style={styles.confirmbooking_group153_group12}>
                <View style={styles.confirmbooking_group153_group12_group509f83a099}>
                    <Svg style={styles.confirmbooking_group153_group12_group509f83a099_path6450674dbc4} preserveAspectRatio="none" viewBox="0 0 114.13330078125 32" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 5.92900276184082 0 L 108.2042999267578 0 C 111.4787979125977 0 114.13330078125 1.790860891342163 114.13330078125 4 L 114.13330078125 28 C 114.13330078125 30.20913887023926 111.4787979125977 32 108.2042999267578 32 L 5.92900276184082 32 C 2.654504776000977 32 0 30.20913887023926 0 28 L 0 4 C 0 1.790860891342163 2.654504776000977 0 5.92900276184082 0 Z"  /></Svg>
                    <View style={styles.confirmbooking_group153_group12_group509f83a099_xacNhn}><Text style={{"marginTop":-0.5,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":14.3}}>Xác nhận</Text></View>
                </View>
            </View>
            <View style={styles.confirmbooking_group153_group51}>
                <View style={styles.confirmbooking_group153_group51_group50}>
                    <Svg style={styles.confirmbooking_group153_group51_group50_path645} preserveAspectRatio="none" viewBox="-1.5 -1.5 117.13330078125 35" fill="transparent"><SvgPath d="M 5.92900276184082 0 L 108.2042999267578 0 C 111.4787979125977 0 114.13330078125 1.790860891342163 114.13330078125 4 L 114.13330078125 28 C 114.13330078125 30.20913887023926 111.4787979125977 32 108.2042999267578 32 L 5.92900276184082 32 C 2.654504776000977 32 0 30.20913887023926 0 28 L 0 4 C 0 1.790860891342163 2.654504776000977 0 5.92900276184082 0 Z"  /></Svg>
                    <View style={styles.confirmbooking_group153_group51_group50_hyB}><Text style={{"marginTop":-0.5,"color":"rgba(191, 151, 104, 1)","fontSize":13,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":14.3}}>Hủy bỏ</Text></View>
                </View>
            </View>
        </View>
    </ScrollView>
    );
  
}

export default ConfirmBookingScreen;

ConfirmBookingScreen.propTypes = {

}

ConfirmBookingScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "confirmbooking": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
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
    "width": 75,
    "height": 18,
    "left": 133,
    "top": 14
  },
  "confirmbooking_group153_x3": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 54,
    "height": 6,
    "left": 145,
    "top": 268
  },
  "confirmbooking_group153_pagination_ellipse8": {
    "opacity": 1,
    "position": "absolute",
    "width": 6,
    "height": 6,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_pagination_ellipse9": {
    "opacity": 1,
    "position": "absolute",
    "width": 6,
    "height": 6,
    "left": 16,
    "top": 0
  },
  "confirmbooking_group153_pagination_ellipse10": {
    "opacity": 1,
    "position": "absolute",
    "width": 6,
    "height": 6,
    "left": 32,
    "top": 0
  },
  "confirmbooking_group153_pagination_ellipse11": {
    "opacity": 1,
    "position": "absolute",
    "width": 6,
    "height": 6,
    "left": 48,
    "top": 0
  },
  "confirmbooking_group153_component3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 17,
    "top": 14
  },
  "confirmbooking_group153_component3_path10": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 121,
    "height": 17,
    "left": 33,
    "top": 287
  },
  "confirmbooking_group153_group40": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 125,
    "height": 16,
    "left": 33,
    "top": 329
  },
  "confirmbooking_group153_group40_group16": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 79,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group40_group16_component1": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group40_group16_component1_union1": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 56,
    "height": 15,
    "left": 23,
    "top": 1
  },
  "confirmbooking_group153_group40_group39": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
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
    "width": 34,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 137,
    "height": 24,
    "left": 33,
    "top": 358
  },
  "confirmbooking_group153_group43_date": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 20,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_date_calendar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 20,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_date_calendar_rectangle557": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
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
    "width": 20,
    "height": 23.67,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_group42": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
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
    "width": 34,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group43_group42_group41": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
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
    "width": 204,
    "height": 13,
    "left": 33,
    "top": 304
  },
  "confirmbooking_group153_group2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 85,
    "height": 24,
    "left": 33,
    "top": 395
  },
  "confirmbooking_group153_group2_iconMaterialAccessTime": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 58,
    "height": 15,
    "left": 27,
    "top": 4
  },
  "confirmbooking_group153_group47": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
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
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 114.13,
    "height": 32,
    "left": 48.37,
    "top": 435
  },
  "confirmbooking_group153_group12_group509f83a099": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 114.13,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group12_group509f83a099_path6450674dbc4": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 54,
    "height": 15,
    "left": 31,
    "top": 10.5
  },
  "confirmbooking_group153_group51": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 114.13,
    "height": 32,
    "left": 183,
    "top": 435
  },
  "confirmbooking_group153_group51_group50": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 114.13,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "confirmbooking_group153_group51_group50_path645": {
    "opacity": 1,
    "position": "absolute",
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
    "width": 40,
    "height": 15,
    "left": 38,
    "top": 10.5
  }
});