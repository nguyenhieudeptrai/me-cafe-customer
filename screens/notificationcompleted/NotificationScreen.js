import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

const NotificationScreen = () => {

    return (
    <ScrollView style={styles.notificationcompleted}>
        <View style={styles.notificationcompleted_group116}>
            <View style={styles.notificationcompleted_group116_group115}>
                <View style={styles.notificationcompleted_group116_group115_rectangle1470}></View>
                <Text style={styles.notificationcompleted_group116_group115_hoanThanh}>HOÀN THÀNH</Text>
                <View style={styles.notificationcompleted_group116_group115_component3}>
                    <Svg style={styles.notificationcompleted_group116_group115_component3_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z"  /></Svg>
                </View>
                <Text style={styles.notificationcompleted_group116_group115_tChThanhCong}>ĐẶT CHỖ THÀNH CÔNG</Text>
                <View style={styles.notificationcompleted_group116_group115_group12}>
                    <View style={styles.notificationcompleted_group116_group115_group12_group50}>
                        <Svg style={styles.notificationcompleted_group116_group115_group12_group50_path645} preserveAspectRatio="none" viewBox="0 0 69.372314453125 26.23846435546875" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 3.603756666183472 0 L 65.76856231689453 0 C 67.75885772705078 0 69.372314453125 1.468420028686523 69.372314453125 3.279808044433594 L 69.372314453125 22.95865631103516 C 69.372314453125 24.77004432678223 67.75885772705078 26.23846435546875 65.76856231689453 26.23846435546875 L 3.603756666183472 26.23846435546875 C 1.613456726074219 26.23846435546875 0 24.77004432678223 0 22.95865631103516 L 0 3.279808044433594 C 0 1.468420028686523 1.613456726074219 0 3.603756666183472 0 Z"  /></Svg>
                        <View style={styles.notificationcompleted_group116_group115_group12_group50_trV}>
                          <Text style={{"marginTop":-0.5,"color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":"700","fontStyle":"normal","fontFamily":"Roboto","textAlign":"center","lineHeight":14.3}}>Trở về</Text></View>
                    </View>
                </View>
                <Svg style={styles.notificationcompleted_group116_group115_iconIonicIosCheckmarkCircle} preserveAspectRatio="none" viewBox="3.374999523162842 3.374999523162842 61.2705078125 61.2706298828125" fill="rgba(210, 151, 59, 1)"><SvgPath d="M 34.01031875610352 3.374999523162842 C 17.08724975585938 3.374999523162842 3.374999523162842 17.08724975585938 3.374999523162842 34.01031875610352 C 3.374999523162842 50.93338394165039 17.08724975585938 64.6456298828125 34.01031875610352 64.6456298828125 C 50.93338394165039 64.6456298828125 64.6456298828125 50.93338394165039 64.6456298828125 34.01031875610352 C 64.6456298828125 17.08724784851074 50.93338394165039 3.374999523162842 34.01031875610352 3.374999523162842 Z M 49.69618988037109 25.54141807556152 L 30.00415992736816 45.32181549072266 C 30.00415992736816 45.32181549072266 30.00415992736816 45.32181549072266 29.98943328857422 45.32181549072266 C 29.73904609680176 45.57220077514648 29.0615348815918 46.13188934326172 28.28092193603516 46.13188934326172 C 27.72124099731445 46.13188934326172 27.08791160583496 45.82258605957031 26.55768585205078 45.29236221313477 L 18.30971527099609 37.04438781738281 C 18.07405853271484 36.80873489379883 18.07405853271484 36.44052124023438 18.30971527099609 36.20486068725586 L 20.9313907623291 33.58318710327148 C 21.04922103881836 33.46536254882813 21.19650459289551 33.40644454956055 21.34379005432129 33.40644454956055 C 21.49107360839844 33.40644454956055 21.63836097717285 33.46536254882813 21.75618743896484 33.58318710327148 L 28.29565048217773 40.12265396118164 L 46.26444244384766 22.02130317687988 C 46.38227081298828 21.90347671508789 46.52954864501953 21.84456062316895 46.67683792114258 21.84456062316895 L 46.67683792114258 21.84456062316895 C 46.83884811401367 21.84456062316895 46.98613739013672 21.90347290039063 47.08923721313477 22.02130317687988 L 49.66672515869141 24.68716430664063 C 49.93184280395508 24.93754768371582 49.93184280395508 25.30576133728027 49.69618988037109 25.54141807556152 Z"  /></Svg>
            </View>
            <Text style={styles.notificationcompleted_group116_bnC1ImUyTin}>Bạn được +1 điểm Uy tín</Text>
        </View>
    </ScrollView>
    );
  
}

export default NotificationScreen;

NotificationScreen.propTypes = {

}

NotificationScreen.defaultProps = {

}


const styles = StyleSheet.create({
  "notificationcompleted": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "notificationcompleted_group116": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 344,
    "height": 223,
    "left": 25,
    "top": 181
  },
  "notificationcompleted_group116_group115": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 344,
    "height": 223,
    "left": 0,
    "top": 0
  },
  "notificationcompleted_group116_group115_rectangle1470": {
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
    "height": 223,
    "left": 0,
    "top": 0
  },
  "notificationcompleted_group116_group115_hoanThanh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 96,
    "height": 18,
    "left": 124,
    "top": 14
  },
  "notificationcompleted_group116_group115_component3": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 17,
    "top": 14
  },
  "notificationcompleted_group116_group115_component3_path10": {
    "opacity": 1,
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "notificationcompleted_group116_group115_tChThanhCong": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 216,
    "height": 25,
    "left": 64,
    "top": 136
  },
  "notificationcompleted_group116_group115_group12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 69.37,
    "height": 26.24,
    "left": 258.24,
    "top": 183.26
  },
  "notificationcompleted_group116_group115_group12_group50": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 69.37,
    "height": 26.24,
    "left": 0,
    "top": 0
  },
  "notificationcompleted_group116_group115_group12_group50_path645": {
    "opacity": 1,
    "position": "absolute",
    "width": 69.37,
    "height": 26.24,
    "left": 0,
    "top": 0
  },
  "notificationcompleted_group116_group115_group12_group50_trV": {
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
    "width": 36,
    "height": 15,
    "left": 17.08,
    "top": 7.45
  },
  "notificationcompleted_group116_group115_iconIonicIosCheckmarkCircle": {
    "opacity": 1,
    "position": "absolute",
    "width": 61.27,
    "height": 61.27,
    "left": 140.86,
    "top": 64.99
  },
  "notificationcompleted_group116_bnC1ImUyTin": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 154,
    "height": 19,
    "left": 95,
    "top": 164
  }
});