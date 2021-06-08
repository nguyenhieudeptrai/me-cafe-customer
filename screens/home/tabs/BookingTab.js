import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const data = [
  {
    image: require('../assets/picture.png'),
    name: "GIA ROOM COFFEE",
    date: "21/12/2021",
    fromTime: "07:00",
    toTime: "08:00",
    personOnTable:4,
    status:"Sắp tới",// Đang tại quán
  },

]
const BookingTab = () => {

  return (
    <View style={styles.booking}>
      <View style={styles.header}>
        <Text style={styles.header_title}>HOÀN THÀNH ĐẶT CHỖ</Text>
      </View>

      <View style={styles.booking_select}>
        <Text style={styles.booking_quaTrinhTN}>Quá trình đặt đơn</Text>
        <Picker style={styles.booking_select_box}>
          <Picker.Item label="Sắp tới" value="comming" />
        </Picker>

      </View>

      <FlatList
        style={styles.booking_list}
        data={data}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.booking_item}>
            <ReactImage source={item.image} style={styles.booking_item_image} />

            <View style={styles.booking_item_right}>
              <Text style={styles.booking_item_status}>{item.status}</Text>
              <Text style={styles.booking_item_name}>{item.name}</Text>
              <Text style={styles.booking_item_quantity}>Loại bàn: {item.personOnTable} người</Text>
              <Text style={styles.booking_item_date}>Ngày đặt: {item.date}</Text>
              <Text style={styles.booking_item_time}>Thời gian: {item.fromTime} - {item.toTime}</Text>
            </View>
          </View>
        )
        } />
    </View>
  );
}

export default BookingTab;


const styles = StyleSheet.create({
  "booking": {
    "backgroundColor": "rgba(220, 220, 220, 1)",
    flex: 1,
    alignItems: "center"
  },
  "booking_item": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderRadius": 5,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
    "width": "auto",
    marginHorizontal: 5,
    padding: 12,
    flexDirection: "row"
  },
  "booking_list": {
    flex: 1,
    width: "90%",
    marginTop: 10
  },
  "booking_item_right": {
    flex: 1,
    marginLeft: 7
  },
  "booking_item_date": {

    "color": "rgba(28, 5, 5, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
  },
  "booking_item_quantity": {
    "color": "rgba(28, 5, 5, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    marginBottom:3,
  },
  "booking_item_time": {
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
  },
  "booking_item_image": {
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "width": 70,
    "height": 70,
  },
  "booking_item_name": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    marginBottom:3,
  },
  "booking_quaTrinhTN": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontFamily": "Roboto",
    flex: 1,
  },
  "header": {
    width: "100%",
    "height": 70,
    alignItems: "center",
    backgroundColor: "rgba(240, 211, 122, 1)",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
  },
  "header_title": {
    "position": "absolute",

    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "top": 37
  },

  "booking_select": {
    width: "90%",
    flexDirection: "row",
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#707070",
  },
  "booking_select_box": {
    "backgroundColor": "rgba(199, 195, 195, 1)",
    "borderRadius": 2,
    borderWidth: 0,
    "width": "30%",
    "height": 23,
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "booking_item_status": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "color": "rgba(210, 151, 59, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  }
});