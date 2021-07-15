import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { useState } from 'react';
import { Button, Overlay, Text } from 'react-native-magnus';


const data = [
  {
    id: "1",
    image: require('../../../assets/picture.png'),
    name: "GIA ROOM COFFEE",
    date: "21/12/2021",
    fromTime: "07:00",
    toTime: "08:00",
    personOnTable: 4,
    status: "Sắp tới",// Đang tại quán
  },
  {
    id: "2",
    image: require('../../../assets/i1.png'),
    name: "Mây Coffee",
    date: "21/12/2021",
    fromTime: "09:00",
    toTime: "09:30",
    personOnTable: 2,
    status: "Đang tại quán",// Đang tại quán
  },
]


const reasonData = ["Thay đổi lịch trình", "Quán đông", "Trùng lịch làm việc", "khác"];

const BookingTab = ({ navigation }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayVisibleComment, setOverlayVisibleComment] = useState(false);
  const [dataFilter, setDataFilter] = useState([]);
  const [reasonSelected, setReasonSelected] = useState("");
  const [numStar, setNumStar] = useState(0);

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
              <Button w="33%"
                ml="65%"
                mb={3}
                h={40}
                bg='#D4AE39'
                onPress={() => {
                  if (item.status === "Sắp tới") {
                    setOverlayVisible(true);
                    setTimeout(() => {
                      setOverlayVisible(false);
                    }, 4000);
                  } else {
                    setOverlayVisibleComment(true);
                  }
                }}
                block>{item.status === "Sắp tới" ? "Hủy đặt" : "Đánh giá"}</Button>

            </View>

          </View>
        )
        } />
      <Overlay visible={overlayVisible} p="xl">
        <Text style={{
          fontSize: 18
          , fontWeight: "700", marginBottom: 10
        }}>Bạn vui lòng chọn lý do bạn hủy</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {reasonData.map((item, index) => {
            return (
              <Button key={index}
                bg={reasonSelected === item ? "#000" : "#FFF"}
                borderColor={reasonSelected === item ? "#FFF" : "#000"}
                color={reasonSelected === item ? "#FFF" : "#000"}
                rounded={25} mr="sm" mb="sm" py="sm" borderWidth={1}
                onPress={() => setReasonSelected(item)}
              >
                {item}
              </Button>
            )
          })}
        </View>
        {reasonSelected === "khác" &&
          <TextInput multiline={true} numberOfLines={5} style={{ padding: 10, textAlignVertical: "top", borderColor: "#000", borderWidth: 1, borderRadius: 10 }}
            placeholder="Bạn có thể nhập một vài lý do khác...."
          />
        }
        <Button bg='#D4AE39' w="100%" mt="md" onPress={() => { setOverlayVisible(false); setReasonSelected("") }}>
          Xác nhận
        </Button>
      </Overlay>
      <Overlay visible={overlayVisibleComment} p="xl" >
        <TouchableOpacity onPress={() => {
          setOverlayVisibleComment(false);
          setNumStar(0);
        }} style={{ position: "absolute", top: 27, left: 20 }}>
          <ReactImage source={require('../../../assets/backicon.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "700", fontSize: 20, alignSelf: "center", marginBottom: 10 }}>Đánh giá của hàng</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity onPress={() => setNumStar(1)} style={{ marginHorizontal: 5, marginVertical: 10 }}>
            <ReactImage style={{ width: 30, height: 30 }} source={numStar >= 1 ? require("../../../assets/star.png") : require("../../../assets/none-star.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNumStar(2)} style={{ marginHorizontal: 5, marginVertical: 10 }}>
            <ReactImage style={{ width: 30, height: 30 }} source={numStar >= 2 ? require("../../../assets/star.png") : require("../../../assets/none-star.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNumStar(3)} style={{ marginHorizontal: 5, marginVertical: 10 }}>
            <ReactImage style={{ width: 30, height: 30 }} source={numStar >= 3 ? require("../../../assets/star.png") : require("../../../assets/none-star.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNumStar(4)} style={{ marginHorizontal: 5, marginVertical: 10 }}>
            <ReactImage style={{ width: 30, height: 30 }} source={numStar >= 4 ? require("../../../assets/star.png") : require("../../../assets/none-star.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNumStar(5)} style={{ marginHorizontal: 5, marginVertical: 10 }}>
            <ReactImage style={{ width: 30, height: 30 }} source={numStar >= 5 ? require("../../../assets/star.png") : require("../../../assets/none-star.png")} />
          </TouchableOpacity>
        </View>
        <TextInput multiline={true} numberOfLines={5} style={{ padding: 10, textAlignVertical: "top", borderColor: "#000", borderWidth: 1, borderRadius: 5 }}
          placeholder="Bạn có thể chia sẻ ý kiến của mình về của hàng...."
        />
        <Button w="100%"
          mt={10}
          h={40}
          bg='#D4AE39'
          onPress={() => {
            setOverlayVisibleComment(false);
            setNumStar(0);
          }}
          block>Đánh giá</Button>
      </Overlay>

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
    padding: 12,
    flexDirection: "row",
    marginVertical: 5,
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
    "marginBottom": 3,

  },
  "booking_item_quantity": {
    "color": "rgba(28, 5, 5, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginBottom": 3,
  },
  "booking_item_time": {
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "marginBottom": 3,

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
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "marginTop": 1,
    "marginBottom": 3
  },
  "booking_quaTrinhTN": {
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "flex": 1,
    "marginTop": 6
  },
  "header": {
    "width": "100%",
    "height": 90,
    "alignItems": "center",
    "backgroundColor": "rgba(240, 211, 122, 1)",
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
    "top": 50
  },

  "booking_select": {
    "width": "90%",
    "flexDirection": "row",
    "borderBottomWidth": 1,
    "paddingTop": 10,
    "paddingBottom": 10,
    "borderColor": "#707070",
  },
  "booking_select_box": {
    "backgroundColor": "rgba(240, 211, 122, 1)",
    "borderRadius": 2,
    "borderWidth": 0,
    "width": "30%",
    "height": 23,
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 11,
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
  },
  "booking_cancelbtn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(231, 139, 36, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(231, 139, 36, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(231, 139, 36, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(231, 139, 36, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(231, 139, 36, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 70,
    "height": 23,
    "right": 5,
    "top": 55
  },

  "booking_cancelbtn_chnhSa": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(9, 44, 76, 1)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 17,
    "alignSelf": 'center',
    "top": 3
  },
});