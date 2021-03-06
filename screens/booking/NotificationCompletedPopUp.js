import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const NotificationCompletedPopUp = ({close}) => {
  return (
    <View style={styles.notificationcompleted_group116}>
      <View style={styles.notificationcompleted_group116_group115_rectangle1470}></View>
      <Text style={styles.notificationcompleted_group116_group115_hoanThanh}>HOÀN THÀNH</Text>
      <Svg style={styles.notificationcompleted_group116_group115_iconIonicIosCheckmarkCircle} preserveAspectRatio="none" viewBox="3.374999523162842 3.374999523162842 61.2705078125 61.2706298828125" fill="rgba(210, 151, 59, 1)"><SvgPath d="M 34.01031875610352 3.374999523162842 C 17.08724975585938 3.374999523162842 3.374999523162842 17.08724975585938 3.374999523162842 34.01031875610352 C 3.374999523162842 50.93338394165039 17.08724975585938 64.6456298828125 34.01031875610352 64.6456298828125 C 50.93338394165039 64.6456298828125 64.6456298828125 50.93338394165039 64.6456298828125 34.01031875610352 C 64.6456298828125 17.08724784851074 50.93338394165039 3.374999523162842 34.01031875610352 3.374999523162842 Z M 49.69618988037109 25.54141807556152 L 30.00415992736816 45.32181549072266 C 30.00415992736816 45.32181549072266 30.00415992736816 45.32181549072266 29.98943328857422 45.32181549072266 C 29.73904609680176 45.57220077514648 29.0615348815918 46.13188934326172 28.28092193603516 46.13188934326172 C 27.72124099731445 46.13188934326172 27.08791160583496 45.82258605957031 26.55768585205078 45.29236221313477 L 18.30971527099609 37.04438781738281 C 18.07405853271484 36.80873489379883 18.07405853271484 36.44052124023438 18.30971527099609 36.20486068725586 L 20.9313907623291 33.58318710327148 C 21.04922103881836 33.46536254882813 21.19650459289551 33.40644454956055 21.34379005432129 33.40644454956055 C 21.49107360839844 33.40644454956055 21.63836097717285 33.46536254882813 21.75618743896484 33.58318710327148 L 28.29565048217773 40.12265396118164 L 46.26444244384766 22.02130317687988 C 46.38227081298828 21.90347671508789 46.52954864501953 21.84456062316895 46.67683792114258 21.84456062316895 L 46.67683792114258 21.84456062316895 C 46.83884811401367 21.84456062316895 46.98613739013672 21.90347290039063 47.08923721313477 22.02130317687988 L 49.66672515869141 24.68716430664063 C 49.93184280395508 24.93754768371582 49.93184280395508 25.30576133728027 49.69618988037109 25.54141807556152 Z" /></Svg>

      <Text style={styles.notificationcompleted_group116_group115_tChThanhCong}>ĐẶT CHỖ THÀNH CÔNG</Text>
      <Text style={styles.notificationcompleted_group116_bnC1ImUyTin}>Bạn được +1 điểm Uy tín</Text>
      <TouchableOpacity onPress={()=>close()} style={styles.notificationcompleted_group116_group115_group12}>
        <View style={styles.notificationcompleted_group116_group115_group12_group50}>
          <Svg style={styles.notificationcompleted_group116_group115_group12_group50_path645} preserveAspectRatio="none" viewBox="0 0 69.372314453125 26.23846435546875" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 3.603756666183472 0 L 65.76856231689453 0 C 67.75885772705078 0 69.372314453125 1.468420028686523 69.372314453125 3.279808044433594 L 69.372314453125 22.95865631103516 C 69.372314453125 24.77004432678223 67.75885772705078 26.23846435546875 65.76856231689453 26.23846435546875 L 3.603756666183472 26.23846435546875 C 1.613456726074219 26.23846435546875 0 24.77004432678223 0 22.95865631103516 L 0 3.279808044433594 C 0 1.468420028686523 1.613456726074219 0 3.603756666183472 0 Z" /></Svg>
          <View style={styles.notificationcompleted_group116_group115_group12_group50_trV}>
            <Text style={{  "color": "rgba(255, 255, 255, 1)", "fontSize": 13, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 14.3 }}>
              Trở về
              </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
export default NotificationCompletedPopUp;


const styles = StyleSheet.create({
  "notificationcompleted_group116": {
    "width": "100%",
    alignItems: "center"
  },
  "notificationcompleted_group116_group115": {
    "width": "100%",
    "height": 223,
    "left": 0,
    "top": 0
  },
  "notificationcompleted_group116_group115_rectangle1470": {
    "width": "100%",
    "height": 55,
  },
  "notificationcompleted_group116_group115_hoanThanh": {
    "position": "absolute",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "top": 10,
    "alignSelf": 'center'
  },
  "notificationcompleted_group116_group115_component3": {
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 17,
    "top": 14
  },
  "notificationcompleted_group116_group115_component3_path10": {
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
  "notificationcompleted_group116_group115_tChThanhCong": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "marginTop": 20,
    "marginBottom": 10,
    "alignSelf": 'center'
  },
  "notificationcompleted_group116_group115_group12": {
    "marginTop": 15,
    "width": 69.37,
    "height": 26.24,
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
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
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
    "lineHeight": 14.3,
    "height": 15,
    "top": 7.45,
    alignSelf:"center"
  },
  "notificationcompleted_group116_group115_iconIonicIosCheckmarkCircle": {
    "marginTop": 0,
    "marginBottom": 0,
    "width": 61.27,
    "height": 61.27,
    "alignSelf":'center'
  },
  "notificationcompleted_group116_bnC1ImUyTin": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
  }
});