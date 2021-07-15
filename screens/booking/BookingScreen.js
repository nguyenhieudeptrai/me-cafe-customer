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
import moment from 'moment';

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
const dataResults = [
  {
    id: 2,
    isRoom: true,
    quantity: 10,
    startTime: "09:00",
  },
  {
    id: 3,
    isRoom: false,
    quantity: 4,
    startTime: "08:00",
  },
  {
    id: 1,
    isRoom: false,
    quantity: 6,
    startTime: "08:00",
  },
]
const BookingScreen = ({ navigation }) => {
  const [from, setFrom] = useState(moment(new Date()).minutes(Math.round((new Date().getMinutes() / 10)) * 10));
  const [timeSearch, setTimeSearch] = useState(moment(new Date()).minutes(Math.round((new Date().getMinutes() / 10)) * 10));
  const [viewComplete, setViewComplete] = useState(false);
  const [viewTimeSelect, setViewTimeSelect] = useState(false);
  const [daySearch, setDaySearch] = useState(moment(new Date()).format("L") + ' (Hôm nay)');
  const [period, setPeroid] = useState(['30 phút', 30]);
  const [showResult, setShowResult] = useState(false);
  const [selectItem, setSelectItem] = useState(-1);
  const [timeSelect, setTimeSelect] = useState(-1);


  const dropdownRef = React.createRef();
  const selectRef = React.createRef();
  const dropdownRefDate = React.createRef();

  const onAddTime = (isHour, num) => {
    let fromTmp = from;
    if (isHour)
      fromTmp = fromTmp.add(num, "hour");
    else
      fromTmp = fromTmp.add(num, "minutes");
    setFrom(moment(fromTmp));
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
              <Text style={styles.shopinfo_timeslot_today_thiGian}>Ngày bạn muốn đặt:</Text>
              <View style={{ flexDirection: "row", flex: 1, alignItems: "center", borderColor: "rgba(191, 151, 104, 1)", borderBottomWidth: 2, marginLeft: 10 }}>
                <Text style={styles.shopinfo_timeslot_today_homNay} onPress={() => { dropdownRefDate.current.open() }}>{daySearch}</Text>
                <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginVertical: 15 }}>

            <View style={styles.shopinfo_timeslot_today}>
              <Text style={styles.shopinfo_timeslot_today_thiGian}>Bạn muốn ngồi từ:</Text>
              <View style={{ flexDirection: "row", flex: 1, alignItems: "center", borderColor: "rgba(191, 151, 104, 1)", borderBottomWidth: 2, marginLeft: 10 }}>
                <Text style={styles.shopinfo_timeslot_today_homNay} onPress={() => { selectRef.current.open() }}>{timeSearch.format("LT")}</Text>
                <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
              </View>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginVertical: 15 }}>

            <View style={styles.shopinfo_timeslot_today}>
              <Text style={styles.shopinfo_timeslot_today_thiGian}>Thời gian bạn ngồi:</Text>
              <View style={{ flexDirection: "row", flex: 1, alignItems: "center", borderColor: "rgba(191, 151, 104, 1)", borderBottomWidth: 2, marginLeft: 10 }}>

                <Text style={styles.shopinfo_timeslot_today_homNay} onPress={() => { dropdownRef.current.open() }}>
                  {period[0]}
                </Text>

                <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => { setShowResult(true); setTimeSelect(-2); }} style={styles.shopinfo_timeslot_btnsearch}>
            <Text style={styles.shopinfo_timeslot_btnsearch_timKim}>Tìm kiếm</Text>
          </TouchableOpacity>
        </View>
        {showResult &&
          <View style={styles.shopinfo_result}>
            <Text style={styles.shopinfo_result_title}>KẾT QUẢ:</Text>
            <FlatList
              data={dataResults}
              renderItem={({ item, index }) => (
                <TouchableOpacity key={index+""} style={selectItem == index ?
                  styles.shopinfo_result_tableempty2_s :
                  styles.shopinfo_result_tableempty2}
                  onPress={() => { setSelectItem(index); setViewTimeSelect(true); }}
                >
                  <View style={{ flex: 2, paddingHorizontal: 10, borderColor: "rgba(191, 151, 104, 1)", borderRightWidth: 2 }}>
                    <Text style={styles.shopinfo_result_tableempty2_ban}>{item.isRoom ? "PHÒNG HỌP" : "BÀN"}</Text>
                    <Text style={styles.shopinfo_result_tableempty2_loi6Ch}>Loại: {item.quantity} {item.isRoom ? "người" : "chỗ"}</Text>
                  </View>
                  <View style={{ flexDirection: "row", flexWrap: "wrap", flex: 4, paddingLeft: 10 }}>
                    {[0, 1, 2, 3, 4].map(val => {
                      let timeFrom = moment(timeSearch).add(val, "h");
                      let timeTo = moment(timeSearch).add(val, "h").add(period[1], "minutes");
                      if (timeTo.hours() >= 21) {
                        return null;
                      }
                      return (
                        <Text key={val} style={styles.shopinfo_result_tableempty2_banTrngTLuc0800169f5e91}>
                          {timeFrom.format("LT")} - {timeTo.format("LT")}
                        </Text>)
                    })}

                  </View>
                </TouchableOpacity>
              )} />
          </View>
        }

      </ScrollView>


      <Select
        ref={selectRef}
        onSelect={() => { }}
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
            onPress={() => { setTimeSearch(moment(from)); selectRef.current.close() }} >
            XÁC NHẬN
          </Button>
        )}
        renderItem={(item, index) => (
          <View key={index} style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
            <View style={styles.main_tCh3c0aa05f_group15_group7}>
              <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0}>
                <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_rectangle14613f364951}></View>
                <TouchableOpacity onPress={() => onAddTime(true, -1)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onAddTime(true, 1)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                </TouchableOpacity>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group7_x07}>{from.format("h")}</Text>
            </View>
            <Text style={styles.main_tCh3c0aa05f_group15_x9f45184b}>:</Text>
            <View style={styles.main_tCh3c0aa05f_group15_group6}>
              <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081}>
                <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_rectangle1462849d287b}></View>
                <TouchableOpacity onPress={() => onAddTime(false, -10)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onAddTime(false, 10)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                </TouchableOpacity>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group7_x07}>{from.format("mm")}</Text>
            </View>
            <View style={styles.main_tCh3c0aa05f_group15_group5}>
              <View style={styles.main_tCh3c0aa05f_group15_group5_rectangle14634dd2b9b8}></View>
              <Text style={from.hour() < 12 ? styles.main_tCh3c0aa05f_group15_group5_am70a769fb : styles.main_tCh3c0aa05f_group15_group5_pme55ffa0b}>AM</Text>
              <Text style={from.hour() >= 12 ? styles.main_tCh3c0aa05f_group15_group5_am70a769fb : styles.main_tCh3c0aa05f_group15_group5_pme55ffa0b}>PM</Text>
            </View>
          </View>
        )}
      >
      </Select>
      <Dropdown ref={dropdownRef}>
        <Dropdown.Option onPress={() => { setPeroid(['30 phút', 30]); dropdownRef.current.close() }}>30 phút</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid(['45 phút', 45]); dropdownRef.current.close() }}>45 phút</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid(['1 tiếng', 60]); dropdownRef.current.close() }}>1 tiếng</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid(['1 tiếng rưỡi', 90]); dropdownRef.current.close() }}>1 tiếng rưỡi</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid(['2 tiếng', 120]); dropdownRef.current.close() }}>2 tiếng</Dropdown.Option>
        <Dropdown.Option onPress={() => { setPeroid(['2 tiếng rưỡi', 150]); dropdownRef.current.close() }}>2 tiếng rưỡi</Dropdown.Option>
      </Dropdown>
      <Dropdown ref={dropdownRefDate}>
        {[0, 1, 2, 3, 4, 5, 6].map(val => {
          let date = moment(new Date()).add(val, "day");
          let today = (date.get("day") == (new Date().getDay()) ? "(Hôm nay)" : "")
            + (date.get("day") == (new Date().getDay() + 1) ? "(Ngày mai)" : "");
          let strDate = date.format("L") + " " + today;
          return (<Dropdown.Option key={strDate} onPress={() => {
            setDaySearch(strDate)
          }}>
            {strDate}
          </Dropdown.Option>)
        })}
      </Dropdown>
      <Overlay visible={viewComplete} p="xl">
        <NotificationCompletedPopUp close={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params:{initialRoute:"Đặt chỗ"} }],
          });
        }} />
      </Overlay>
      <Overlay visible={viewTimeSelect} p={"sm"}>
        <View style={{ marginTop: 10, paddingHorizontal: 5 }}>
          <Text style={{
            "color": "rgba(83, 71, 65, 1)",
            "fontSize": 20,
            "fontWeight": "bold",
            "fontFamily": "Roboto",
            textAlign: "center"
          }}>{dataResults[selectItem]?.isRoom ? "PHÒNG HỌP" : "BÀN"} </Text>
          <Text style={styles.shopinfo_result_tableempty2_loi6Ch}>Loại: {dataResults[selectItem]?.quantity} {dataResults[selectItem]?.isRoom ? "người" : "chỗ"}</Text>

          <View style={{ borderTopWidth: 2, borderColor: "rgba(191, 151, 104, 1)", marginTop: 5, paddingTop: 5 }}>
            <Text style={{ fontSize: 15 }}>Bạn có thể chọn khoảng thời gian:</Text>
            {[0, 1, 2, 3, 4].map((val, index) => {
              let timeFrom = moment(timeSearch).add(val, "h");
              let timeTo = moment(timeSearch).add(val, "h").add(period[1], "m");
              if (timeTo.hours() >= 21) {
                return null;
              }
              return (
                <TouchableOpacity key={val} onPress={() => { setTimeSelect(index) }}>
                  <Text style={{
                    "color": "rgba(83, 71, 65, 1)",
                    "fontSize": 16,
                    textAlign: "center",
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: "rgba(191, 151, 104, 1)",
                    padding: 5,
                    margin: 3,
                    "backgroundColor": timeSelect == index ? "#FBDBB5" : "#FFF"
                  }}>
                    {timeFrom.format("LT")} - {timeTo.format("LT")}
                  </Text>
                </TouchableOpacity>)
            })}
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10, }}>
          <TouchableOpacity onPress={() => {
            if (timeSelect > -1) {
              setViewComplete(true);
              setViewTimeSelect(false);
            }
          }}
            style={styles.shopinfo_group19_dangkyngayBtn}>
            <View style={styles.shopinfo_group19_dangkyngayBtn_tChNgay}>
              <Text style={{ "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center" }}>
                ĐẶT NGAY
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setViewTimeSelect(false);
            setTimeSelect(-1);
          }}
            style={styles.shopinfo_group19_dangkyngayBtn_n}>
            <View style={styles.shopinfo_group19_dangkyngayBtn_tChNgay}>
              <Text style={{ "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center" }}>
                HỦY
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
}

export default BookingScreen;

const styles = StyleSheet.create({
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
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "rgba(191, 151, 104, 1)",
    padding: 5,
    margin: 3
  },
  "shopinfo_result_title": {
    "color": "rgba(191, 151, 104, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontFamily": "Roboto",

  },
  "shopinfo_group19_dangkyngayBtn_n": {
    "alignSelf": 'center',
    backgroundColor: "#A1A1A1",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
    marginLeft: "5%",
    marginRight: "10%",
    flex: 1,
  },
  "shopinfo_group19_dangkyngayBtn": {
    "alignSelf": 'center',
    backgroundColor: "rgba(212, 174, 57, 1)",
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 10,
    marginRight: "5%",
    marginLeft: "10%",
    flex: 1,
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