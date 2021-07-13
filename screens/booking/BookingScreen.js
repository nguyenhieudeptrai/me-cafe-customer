import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Overlay, Select, Button, Dropdown } from 'react-native-magnus';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { useState } from 'react';
import NotificationCompletedPopUp from './NotificationCompletedPopUp';

const data = {
  table: [
    {
      number: 2,
    },
    {
      number: 4,
    },
    {
      number: 6,
    },
    {
      number: 8,
    },
  ],

}

const BookingScreen = ({ navigation }) => {
  const [from, setFrom] = useState(new Date());
  const [viewComplete, setViewComplete] = useState(false);
  const [timeSearch, setTimeSearch] = useState('07:00');
  const [period, setPeroid] = useState('30 phút');
  const [showResult, setShowResult] = useState(false);
  const [selectItem, setSelectItem] = useState(null);


  const dropdownRef = React.createRef();
  const selectRef = React.createRef();


  const getFullTime = () => {
    let _hour = from.getHours() < 10 ? `0${from.getHours()}` : `${from.getHours()}`
    let _min = from.getMinutes() < 10 ? `0${from.getMinutes()}` : `${from.getMinutes()}`

    let fullTime = `${_hour}:${_min}`
    return fullTime;
  }

  const loadTimeSearch = () => {
    let _arr = timeSearch.split(':');
    let _temp = from;

    _temp.setHours(parseInt(_arr[0]));
    _temp.setMinutes(parseInt(_arr[1]));

    _temp = new Date(_temp);

    setFrom(_temp);
  }

  const onAddFrom = (isHour, num) => {
    let fromTmp = from;
    if (isHour)
      fromTmp = new Date(fromTmp.setHours(fromTmp.getHours() + num));
    else
      fromTmp = new Date(fromTmp.setMinutes(fromTmp.getMinutes() + num));
    setFrom(fromTmp);
  }

  return (
    <View style={styles.main}>

      <View style={styles.shopinfo_header}>
        <Text style={styles.shopinfo_header_thongTinQuan}>ĐẶT CHỖ</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", top: 50, left: 15 }}>
          <ReactImage source={require('../../assets/backicon.png')} style={styles.shopinfo_header_backicon} />
        </TouchableOpacity>
      </View>
      <View style={styles.shopinfo_timeslot}>
        <Text style={styles.shopinfo_info_giaRoomCoffee}>GIA ROOM COFFEE</Text>
        <Text style={styles.shopinfo_info_inThoi033456789}>10/1 Đoàn Thị Điểm, Quận Phú Nhuận, TP.HCM</Text>
        <Text style={styles.shopinfo_info_inThoi033456789}>Giờ mở cửa: 07h00 - 21h00 (Thứ 2 - Chủ nhật)</Text>
      </View>
      <ScrollView>


        <View style={styles.shopinfo_timeslot}>
          <Text style={styles.shopinfo_timeslot_khungGiTrng}>Tìm khung giờ trống</Text>
          <View style={{ flexDirection: "row", marginVertical: 15 }}>
            <View style={styles.shopinfo_timeslot_today}>
              <Text style={styles.shopinfo_timeslot_today_thiGian}>Thời gian:</Text>
              <View style={{ flexDirection: "row", flex: 1, alignItems: "center", borderColor: "rgba(191, 151, 104, 1)", borderBottomWidth: 2, marginLeft: 10 }}>
                <Text style={styles.shopinfo_timeslot_today_homNay}>Hôm nay</Text>
                <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginVertical: 15 }}>

            <View style={styles.shopinfo_timeslot_today}>
              <Text style={styles.shopinfo_timeslot_today_thiGian}>Bắt đầu:</Text>
              <View style={{ flexDirection: "row", flex: 1, alignItems: "center", borderColor: "rgba(191, 151, 104, 1)", borderBottomWidth: 2, marginLeft: 10 }}>
                <Text style={styles.shopinfo_timeslot_today_homNay} onPress={() => { loadTimeSearch(); selectRef.current.open() }}>{timeSearch}</Text>
                <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
              </View>
            </View>
            <View style={styles.shopinfo_timeslot_today}>
              <Text style={styles.shopinfo_timeslot_today_thiGian}>Khoảng:</Text>
              <View style={{ flexDirection: "row", flex: 1, alignItems: "center", borderColor: "rgba(191, 151, 104, 1)", borderBottomWidth: 2, marginLeft: 10 }}>

                <Text style={styles.shopinfo_timeslot_today_homNay} onPress={() => { dropdownRef.current.open() }}>{period}</Text>

                <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => setShowResult(true)} style={styles.shopinfo_timeslot_btnsearch}>
            <Text style={styles.shopinfo_timeslot_btnsearch_timKim}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
        {showResult &&
          <View style={styles.shopinfo_result}>
            <Text style={styles.shopinfo_result_title}>KẾT QUẢ:</Text>
            <FlatList
              data={[
                {
                  id: 1,
                  isRoom: false,
                  quantity: 6,
                  startTime: "08:00",
                },
                {
                  id: 2,
                  isRoom: true,
                  quantity: 10,
                  startTime: "09:00",
                },
                {
                  id: 3,
                  isRoom: false,
                  quantity: 6,
                  startTime: "08:00",
                }
              ]}
              renderItem={({ item, index }) => (
                <TouchableOpacity key={index} style={selectItem == item.id ? styles.shopinfo_result_tableempty2_s : styles.shopinfo_result_tableempty2}
                  onPress={() => { setSelectItem(item.id) }}
                >
                  <View style={{ flex: 2, paddingHorizontal: 15, borderColor: "rgba(191, 151, 104, 1)", borderRightWidth: 2 }}>
                    <Text style={styles.shopinfo_result_tableempty2_ban}>{item.isRoom ? "PHÒNG HỌP" : "BÀN"}</Text>
                    <Text style={styles.shopinfo_result_tableempty2_loi6Ch}>Loại: {item.quantity} {item.isRoom ? "người" : "chỗ"}</Text>
                  </View>
                  <Text style={styles.shopinfo_result_tableempty2_banTrngTLuc0800169f5e91}>{item.isRoom ? "Phòng" : "Bàn"} trống từ lúc {item.startTime}</Text>
                </TouchableOpacity>
              )} />
          </View>
        }

      </ScrollView>


      <TouchableOpacity onPress={() => { if (selectItem != null) setViewComplete(true) }} style={selectItem == null ? styles.shopinfo_group19_dangkyngayBtn_n : styles.shopinfo_group19_dangkyngayBtn}>
        <View style={styles.shopinfo_group19_dangkyngayBtn_tChNgay}>
          <Text style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>
            BẮT ĐẦU CHỖ NGAY
          </Text>
        </View>
      </TouchableOpacity>
      <Select
        ref={selectRef}
        onSelect={() => { setTimeSearch(getFullTime()) }}
        multiple
        roundedTop="xl"
        data={[{}]}
        footer={(
          <Button
            w="95%"
            alignSelf="center"
            mb={10}
            h={40}
            bg='#D4AE39'
            onPress={() => { setTimeSearch(getFullTime()); selectRef.current.close() }} >
            XÁC NHẬN
          </Button>
        )}
        renderItem={(item, index) => (
          <View key={index} style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <View style={styles.main_tCh3c0aa05f_group15_group7}>
              <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0}>
                <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_rectangle14613f364951}></View>
                <TouchableOpacity onPress={() => onAddFrom(true, -1)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onAddFrom(true, 1)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                </TouchableOpacity>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group7_x07}>{from.getHours() < 10 ? "0" + from.getHours() : from.getHours()}</Text>
            </View>
            <Text style={styles.main_tCh3c0aa05f_group15_x9f45184b}>:</Text>
            <View style={styles.main_tCh3c0aa05f_group15_group6}>
              <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081}>
                <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_rectangle1462849d287b}></View>
                <TouchableOpacity onPress={() => onAddFrom(false, -10)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onAddFrom(false, 10)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                </TouchableOpacity>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group7_x07}>{from.getMinutes() < 10 ? "0" + from.getMinutes() : from.getMinutes()}</Text>
            </View>
            <View style={styles.main_tCh3c0aa05f_group15_group5}>
              <View style={styles.main_tCh3c0aa05f_group15_group5_rectangle14634dd2b9b8}></View>
              <Text style={from.getHours() < 12 ? styles.main_tCh3c0aa05f_group15_group5_am70a769fb : styles.main_tCh3c0aa05f_group15_group5_pme55ffa0b}>AM</Text>
              <Text style={from.getHours() >= 12 ? styles.main_tCh3c0aa05f_group15_group5_am70a769fb : styles.main_tCh3c0aa05f_group15_group5_pme55ffa0b}>PM</Text>
            </View>
          </View>
        )}
      >
      </Select>
      <Dropdown ref={dropdownRef}>
        <Dropdown.Option onPress={() => { setPeroid('30 phút'); dropdownRef.current.close() }}>30 phút</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid('45 phút'); dropdownRef.current.close() }}>45 phút</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid('1 tiếng'); dropdownRef.current.close() }}>1 tiếng</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid('1 tiếng rưỡi'); dropdownRef.current.close() }}>1 tiếng rưỡi</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid('2 tiếng'); dropdownRef.current.close() }}>2 tiếng</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid('2 tiếng rưỡi'); dropdownRef.current.close() }}>2 tiếng rưỡi</Dropdown.Option>
      </Dropdown>
      <Overlay visible={viewComplete} p="xl">
        <NotificationCompletedPopUp close={() => { navigation.goBack(); }} />
      </Overlay>
    </View>
  );
}

export default BookingScreen; const styles = StyleSheet.create({
  "main": {
    flex: 1
  },
  "shopinfo_header": {
    "width": "100%",
    paddingBottom: 10,
    backgroundColor: "rgba(240, 211, 122, 1)",
  },
  "shopinfo_header_bg": {
    "opacity": 1,
    "position": "absolute",
    "width": "100%",
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "shopinfo_header_thongTinQuan": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    "textAlign": "center",
    alignSelf: "center",
    marginTop: 50
  },
  "shopinfo_header_backicon": {
    "width": 20,
    "height": 20,
  },
  "shopinfo_timeslot": {
    margin: 5,
    padding: 5,
    marginBottom: 10,
    backgroundColor: "#FFF"
  },
  "shopinfo_timeslot_today": {
    flexDirection: "row",
    flex: 1,
    marginRight: 10,
  },
  "shopinfo_timeslot_today_homNay": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontFamily": "Roboto",
    textAlign: "right",
    marginRight: 10,
    flex: 1,
  },
  "shopinfo_timeslot_today_backIcon2f9ac0684": {
    "width": 18,
    "height": 18,
    "transform": [{ rotate: '-90deg' }],
  },
  "shopinfo_timeslot_today_thiGian": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontFamily": "Roboto",
  },
  "shopinfo_timeslot_timen": {
  },
  "shopinfo_timeslot_timen_x1Gi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 25,
    "height": 15,
    "alignSelf": 'center',

  },
  "shopinfo_timeslot_timen_backIcon27fde8a1b": {
    "opacity": 1,
    "position": "absolute",
    "width": 13,
    "height": 13,
    "left": 91.78,
    "top": 0.57
  },
  "shopinfo_timeslot_timen_khong": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontFamily": "Roboto",
  },
  "shopinfo_timeslot_timet": {
    "width": 127.94,
    "height": 13,
  },
  "shopinfo_timeslot_timet_backIcon2": {
    "opacity": 1,
    "position": "absolute",
    "width": 13,
    "height": 13,
    "left": 114.94,
    "top": 0,
    "transform": [{ rotate: '-90deg' }],
  },
  "shopinfo_timeslot_timet_x0700Am": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 60,
    "height": 13,
    "left": 64.02,
    "top": 0
  },
  "shopinfo_timeslot_timet_btULuc": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 70,
    "height": 15,

  },
  "shopinfo_timeslot_khungGiTrng": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontFamily": "Roboto",

  },
  "shopinfo_timeslot_btnsearch": {
    "backgroundColor": "rgba(191, 151, 104, 1)",
    "borderRadius": 11,
    paddingHorizontal: 15,
    paddingVertical: 7,
    alignItems: "center",
    marginLeft: "50%",
    marginTop: 10,
    marginBottom: 10,
  },
  "shopinfo_timeslot_btnsearch_timKim": {
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 16,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "shopinfo_result": {
    margin: 5,
    padding: 5,
    marginBottom: 10
  },
  "shopinfo_result_tableempty2": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderWidth": 1,
    "borderColor": "rgba(191, 151, 104, 1)",
    "borderRadius": 9,
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 5,
  },
  "shopinfo_result_tableempty2_s": {
    "backgroundColor": "#FBDBB5",
    "borderWidth": 1,
    "borderColor": "rgba(191, 151, 104, 1)",
    "borderRadius": 9,
    flexDirection: "row",
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 5,
  },
  "shopinfo_result_tableempty2_ban": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    textAlign: "center"
  },
  "shopinfo_result_tableempty2_loi6Ch": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    textAlign: "center"
  },
  "shopinfo_result_tableempty2_banTrngTLuc0800169f5e91": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontWeight": "500",
    "fontFamily": "Roboto",
    flex: 3,
    paddingHorizontal: 15
  },
  "shopinfo_result_title": {
    "color": "rgba(191, 151, 104, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontFamily": "Roboto",

  },
  "shopinfo_group19_dangkyngayBtn_n": {
    "width": "95%",
    "alignSelf": 'center',
    backgroundColor: "#A1A1A1",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 10,
  },
  "shopinfo_group19_dangkyngayBtn": {
    "width": "95%",
    "alignSelf": 'center',
    backgroundColor: "rgba(212, 174, 57, 1)",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 10,
  },
  "shopinfo_group19_dangkyngayBtn_path643": {


    "width": 155.99,
    "height": 31,

  },
  "shopinfo_group19_dangkyngayBtn_tChNgay": {
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
  },


  "main_tCh3c0aa05f_group15_group7_x07": {

    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",
    "fontFamily": "Roboto",
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_rectangle1467420d5d2d": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_rectangle14613f364951": {
    "position": "absolute",
    "backgroundColor": "rgba(233, 233, 233, 1)",
    "borderRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 92,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866": {
    "transform": [{ rotate: '180deg' }],
    "position": "absolute",
    "width": "100%",
    "height": "50%",
    top: 0,
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3": {

    "position": "absolute",
    "width": 9.4,
    "height": 6.1,
    "bottom": 5,
    alignSelf: "center"
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_rectangle1466c5ca2772": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e": {
    "position": "absolute",
    "width": "100%",
    "height": "50%",
    "bottom": 0
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc": {

    "position": "absolute",
    "width": 9.4,
    "height": 6.1,
    "bottom": 5,
    alignSelf: "center"
  },
  "main_tCh3c0aa05f_group15_x9f45184b": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    marginLeft: 5
  },
  "main_tCh3c0aa05f_group15_group7": {
    "width": 92,
    "height": 90,
    justifyContent: "center",
    alignItems: "center"
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group6": {
    "width": 92,
    "height": 90,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  "main_tCh3c0aa05f_group15_group6_group41f437081": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group6_group41f437081_rectangle1462849d287b": {

    "position": "absolute",
    "backgroundColor": "rgba(233, 233, 233, 1)", "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 92,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group5": {
    "width": 58,
    "height": 90,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
  },
  "main_tCh3c0aa05f_group15_group5_rectangle14634dd2b9b8": {

    "position": "absolute",
    "backgroundColor": "rgba(233, 233, 233, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 10,
    "borderBottomLeftRadius": 10,
    "borderBottomRightRadius": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 58,
    "height": 90,
    "left": 0,
    "top": 0,
    zIndex: -1
  },
  "main_tCh3c0aa05f_group15_group5_am70a769fb": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontFamily": "Roboto",
  },
  "main_tCh3c0aa05f_group15_group5_pme55ffa0b": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 20,
    "fontWeight": "700",

    "fontFamily": "Roboto",
  },
  shopinfo_info_giaRoomCoffee: {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 25,
    "fontWeight": "700",
    "fontFamily": "Roboto",
  },
  shopinfo_info_inThoi033456789: {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    fontStyle: "italic",
    "fontFamily": "Roboto",
  },
});