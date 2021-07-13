import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Overlay } from 'react-native-magnus';
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

const DetailShopScreen = ({ navigation }) => {
  const [slot, setSlot] = useState(0);
  const [date, setDate] = useState(0);
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [viewComment, setViewComment] = useState(false);
  const [viewComplete, setViewComplete] = useState(false);
  const [timeSearch, setTimeSearch] = useState('7:00');

  const getFullTime = () => {
    let _hour = from.getHours() < 10 ? `0${from.getHours()}` : `${from.getHours()}`
    let _min = from.getMinutes() < 10 ? `0${from.getMinutes()}` : `${from.getMinutes()}`
    let beforeMidDate = from.getHours() >= 12;

    let fullTime = `${_hour}:${_min} ${beforeMidDate ? 'A.M' : 'P.M'}`
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

      <View style={styles.main_group38}>
        <View style={styles.main_group38_navigationBar}>
          <Svg style={styles.main_group38_navigationBar_path647} preserveAspectRatio="none" viewBox="0 0 393 75.1141357421875" fill="rgba(240, 211, 122, 1)"><SvgPath d="M 0 0 L 393 0 L 393 75.1141357421875 L 0 75.1141357421875 L 0 0 Z" /></Svg>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.main_group38_navigationBar_component1}>
            <Svg style={styles.main_group38_navigationBar_component1_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z" /></Svg>
          </TouchableOpacity>
          <Text style={styles.main_group38_navigationBar_tCh}>ĐẶT CHỖ</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.shopinfo_timeslot}>
          <Text style={styles.shopinfo_timeslot_khungGiTrng}>Khung giờ trống</Text>
          <View style={styles.shopinfo_timeslot_today}>
            <Text style={styles.shopinfo_timeslot_today_thiGian}>Thời gian:</Text>
            <Text style={styles.shopinfo_timeslot_today_homNay}>Hôm nay</Text>
            <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
          </View>
          <View style={styles.shopinfo_timeslot_timet}>
            <Text style={styles.shopinfo_timeslot_timet_btULuc}>Bắt đầu lúc:</Text>
            <Text style={styles.shopinfo_timeslot_timet_x0700Am} onPress={() => { loadTimeSearch(); selectRef.current.open() }}>{timeSearch}</Text>
            <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_timet_backIcon2} />
          </View>

          <Select
            ref={selectRef}
            onSelect={() => { setTimeSearch(getFullTime()) }}
            multiple
            data={[1]}
            footer={(
              <Button
                w="90%"
                ml="5%"
                mb={10}
                h={40}
                bg='#D4AE39'
                onPress={() => { setTimeSearch(getFullTime()); selectRef.current.close() }} >
                XÁC NHẬN
              </Button>
            )}
            renderItem={(item, index) => (
              <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", height: 200 }}>
                <View style={styles.main_tCh3c0aa05f_group15_group7}>
                  <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0}>
                    <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_rectangle14613f364951}></View>
                    <TouchableOpacity onPress={() => onAddFrom(true, 1)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866}>
                      <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                      <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_rectangle1466c5ca2772}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onAddFrom(true, -1)} style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e}>
                      <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                      <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_rectangle1467420d5d2d}></View>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.main_tCh3c0aa05f_group15_group7_x07}>{from.getHours() < 10 ? "0" + from.getHours() : from.getHours()}</Text>
                </View>
                <Text style={styles.main_tCh3c0aa05f_group15_x9f45184b}>:</Text>
                <View style={styles.main_tCh3c0aa05f_group15_group6}>
                  <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081}>
                    <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_rectangle1462849d287b}></View>
                    <TouchableOpacity onPress={() => onAddFrom(false, 10)} style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7}>
                      <Svg style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7_path368c6742fa} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                      <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7_rectangle1466f965c57f}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => onAddFrom(false, -10)} style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5}>
                      <Svg style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5_path36169828bb} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                      <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5_rectangle14670b498141}></View>
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.main_tCh3c0aa05f_group15_group6_x00ba94441d}>{from.getMinutes() < 10 ? "0" + from.getMinutes() : from.getMinutes()}</Text>
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
          <View style={styles.shopinfo_timeslot_timen}>
            <Text style={styles.shopinfo_timeslot_timen_khong}>Khoảng:</Text>
            <Text style={styles.shopinfo_timeslot_timen_x1Gi} onPress={() => { dropdownRef.current.open() }}>{period}</Text>
            <Dropdown ref={dropdownRef}>
              <Dropdown.Option onPress={() => { setPeroid('30 phút'); dropdownRef.current.close() }}>30 phút</Dropdown.Option>
              <Dropdown.Option onPress={() => { setPeroid('45 phút'); dropdownRef.current.close() }}>45 phút</Dropdown.Option>
              <Dropdown.Option onPress={() => { setPeroid('1 tiếng'); dropdownRef.current.close() }}>1 tiếng</Dropdown.Option>
              <Dropdown.Option onPress={() => { setPeroid('1 tiếng rưỡi'); dropdownRef.current.close() }}>1 tiếng rưỡi</Dropdown.Option>
              <Dropdown.Option onPress={() => { setPeroid('2 tiếng'); dropdownRef.current.close() }}>2 tiếng</Dropdown.Option>
              <Dropdown.Option onPress={() => { setPeroid('2 tiếng rưỡi'); dropdownRef.current.close() }}>2 tiếng rưỡi</Dropdown.Option>
            </Dropdown>
            <ReactImage source={require('../../assets/backIcon2.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
          </View>
          {/* <View style={styles.shopinfo_timeslot_btnsearch}>
            <View style={styles.shopinfo_timeslot_btnsearch_rectangle1471}></View>
            <Text style={styles.shopinfo_timeslot_btnsearch_timKim}>Tìm kiếm</Text>
          </View> */}
        </View>
        <View style={styles.shopinfo_result}>
          <Text style={styles.shopinfo_result_title}>KẾT QUẢ:</Text>
          <TouchableOpacity style={styles.shopinfo_result_tableempty2}>
            <View style={styles.shopinfo_result_tableempty2_rectangle14922f124342}></View>
            <Text style={styles.shopinfo_result_tableempty2_ban}>BÀN</Text>
            <Text style={styles.shopinfo_result_tableempty2_loi6Ch}>Loại: 6 chỗ</Text>
            <Text style={styles.shopinfo_result_tableempty2_banTrngTLuc0800169f5e91}>Bàn trống từ lúc 08:00</Text>
            <Svg style={styles.shopinfo_result_tableempty2_line8} preserveAspectRatio="none" viewBox="-0.5 0 1 34" fill="transparent"><SvgPath d="M 0 0 L 0 34" /></Svg>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shopinfo_result_roombtn}>
            <View style={styles.shopinfo_result_roombtn_rectangle1492}></View>
            <Text style={styles.shopinfo_result_roombtn_phongHp}>PHÒNG HỌP</Text>
            <Text style={styles.shopinfo_result_roombtn_loi10Ngi}>Loại: 10 người</Text>
            <Svg style={styles.shopinfo_result_roombtn_line9} preserveAspectRatio="none" viewBox="-0.5 0 1 34" fill="transparent"><SvgPath d="M 0 0 L 0 34" /></Svg>
            <Text style={styles.shopinfo_result_roombtn_banTrngTLuc0800}>Bàn trống từ lúc 08:00</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => setViewComplete(true)} style={styles.main_group19_continue}>
          <Svg style={styles.main_group19_continue_path643} preserveAspectRatio="none" viewBox="0 0 129 31" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.57798171043396 0 L 127.4220199584961 0 C 128.2935028076172 0 129 1.15659761428833 129 2.583333253860474 L 129 28.41666603088379 C 129 29.84340286254883 128.2935028076172 31 127.4220199584961 31 L 1.57798171043396 31 C 0.7064864039421082 31 0 29.84340286254883 0 28.41666603088379 L 0 2.583333253860474 C 0 1.15659761428833 0.7064864039421082 0 1.57798171043396 0 Z" /></Svg>
          <View style={styles.main_group19_continue_tChf4c11d26}><Text style={{ "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>ĐẶT CHỖ</Text></View>
        </TouchableOpacity>
      </ScrollView>

      <Overlay visible={viewComplete} p="xl">
        <NotificationCompletedPopUp close={() => { setViewComplete(false); navigation.goBack(); }} />
      </Overlay>
    </View>
  );
}

export default DetailShopScreen; const styles = StyleSheet.create({
  "main": {
    "backgroundColor": "rgba(220, 220, 220, 1)",
    flex: 1
  },
  "main_tCh3c0aa05f": {
    "width": "90%",
    alignSelf: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 5,
    padding: 10,
  },
  "main_tCh3c0aa05f_path650": {

    "position": "absolute", "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 3,
      "height": 5
    },
    "shadowRadius": 6,
    "width": 352,
    "height": 544.3,
    "left": 0,
    "top": 29.5
  },
  "main_tCh3c0aa05f_group15": {

    "width": "100%",
    "height": 235,
    marginBottom: 10,
  },
  "main_tCh3c0aa05f_group15_group2": {

    "position": "absolute",
    "width": 86,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group2_iconMaterialAccessTime": {

    "position": "absolute", "width": 24,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group2_thiGian": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    "left": 31,
    "top": 5
  },
  "main_tCh3c0aa05f_group15_x9f45184b": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 141,
    "top": 56
  },
  "main_tCh3c0aa05f_group15_group7": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 38,
    "top": 29
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_rectangle14613f364951": {

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
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866": {
    "transform": [{ rotate: '180deg' }],
    "position": "absolute",
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 8
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
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
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 72
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
  },
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_rectangle1467420d5d2d": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group7_x07": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 30,
    "top": 27
  },
  "main_tCh3c0aa05f_group15_group6": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 162,
    "top": 29
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
  "main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7": {
    "transform": [{ rotate: '180deg' }],
    "position": "absolute",
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 8
  },
  "main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7_path368c6742fa": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
  },
  "main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7_rectangle1466f965c57f": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5": {

    "position": "absolute",
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 72
  },
  "main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5_path36169828bb": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
  },
  "main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5_rectangle14670b498141": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group6_x00ba94441d": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 29,
    "top": 27
  },
  "main_tCh3c0aa05f_group15_group5": {

    "position": "absolute",
    "width": 58,
    "height": 90,
    "left": 265,
    "top": 29,
    alignItems: "center",
    justifyContent: "center",
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
  "main_tCh3c0aa05f_group15_t": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 15,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 8,
    "top": 66
  },
  "main_tCh3c0aa05f_group15_x83733205": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 141,
    "top": 172
  },
  "main_tCh3c0aa05f_group15_group8": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 38,
    "top": 145
  },
  "main_tCh3c0aa05f_group15_group8_group3": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group8_group3_rectangle1461": {

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
  "main_tCh3c0aa05f_group15_group8_group3_upArrowSmall5e30bcb4": {
    "transform": [{ rotate: '180deg' }],
    "position": "absolute",
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 8
  },
  "main_tCh3c0aa05f_group15_group8_group3_upArrowSmall5e30bcb4_path364bcb30d1": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
  },
  "main_tCh3c0aa05f_group15_group8_group3_upArrowSmall5e30bcb4_rectangle1466b5ae663c": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group8_group3_downArrowSmall65105bad": {

    "position": "absolute",
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 72
  },
  "main_tCh3c0aa05f_group15_group8_group3_downArrowSmall65105bad_path36e499b374": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
  },
  "main_tCh3c0aa05f_group15_group8_group3_downArrowSmall65105bad_rectangle1467372bffc8": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group8_x08": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 30,
    "top": 27
  },
  "main_tCh3c0aa05f_group15_group9": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 162,
    "top": 145
  },
  "main_tCh3c0aa05f_group15_group9_group4": {

    "position": "absolute",
    "width": 92,
    "height": 90,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group9_group4_rectangle1462": {

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
  "main_tCh3c0aa05f_group15_group9_group4_upArrowSmall": {
    "transform": [{ rotate: '180deg' }],
    "position": "absolute",
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 8
  },
  "main_tCh3c0aa05f_group15_group9_group4_upArrowSmall_path3692134fa2": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
  },
  "main_tCh3c0aa05f_group15_group9_group4_upArrowSmall_rectangle1466": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group9_group4_downArrowSmall": {

    "position": "absolute",
    "width": 10,
    "height": 10,
    "left": 41,
    "top": 72
  },
  "main_tCh3c0aa05f_group15_group9_group4_downArrowSmall_path36": {

    "position": "absolute", "width": 9.4,
    "height": 6.1,
    "left": 0,
    "top": 2
  },
  "main_tCh3c0aa05f_group15_group9_group4_downArrowSmall_rectangle1467": {

    "position": "absolute",

    "width": 10,
    "height": 10,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group9_x00": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 29,
    "top": 27
  },
  "main_tCh3c0aa05f_group15_group10": {

    "position": "absolute",
    "width": 58,
    "height": 90,
    "left": 265,
    "top": 145,
    alignItems: "center",
    justifyContent: "center",
  },
  "main_tCh3c0aa05f_group15_group10_rectangle1463": {

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
    "width": 58,
    "height": 90,
    "left": 0,
    "top": 0,
    zIndex: -1
  },
  "main_tCh3c0aa05f_group15_n": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 15,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 0,
    "top": 183
  },
  "main_tCh3c0aa05f_group17": {

    "width": "100%",
    "height": 65,
    marginBottom: 10,
  },
  "main_tCh3c0aa05f_group17_date": {

    "width": 57,
    "height": 24,
  },
  "main_tCh3c0aa05f_group17_date_ngay": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 27,
    "top": 5
  },
  "main_tCh3c0aa05f_group17_date_calendar": {

    "position": "absolute",
    "width": 20,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group17_date_calendar_rectangle557": {

    "position": "absolute",

    "width": 19,
    "height": 19,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group17_date_calendar_path149": {

    "position": "absolute", "width": 20,
    "height": 23.67,
    "left": 0,
    "top": 0
  },
  "main_date": {

    "width": 77,
    "height": 32,
    marginRight: 10
  },
  "main_date_path": {

    "position": "absolute",
    "width": 77,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "main_date_homNay": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 13,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 14.3,
    "left": 13,
    "top": 10.5
  },
  "main_tCh3c0aa05f_group17_x65a376b3": {

    "width": 29,
    "height": 29,
  },
  "main_tCh3c0aa05f_group17_x65a376b3_path644134eaa72": {

    "position": "absolute", "width": 29,
    "height": 29,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group17_x65a376b3_union19966745e": {

    "position": "absolute", "width": 16,
    "height": 16,
    "left": 7,
    "top": 7
  },
  "main_date_none_rectangle1459f62ba752": {

    "position": "absolute",
    "borderTopWidth": 2,
    "borderTopColor": "rgba(191, 151, 104, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(191, 151, 104, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(191, 151, 104, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(191, 151, 104, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 77,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "main_date_none_ngayMai": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
    "fontSize": 13,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 14.3,
    "left": 12,
    "top": 10.5
  },
  "main_tCh3c0aa05f_sLng6503c4b5": {

    "width": "100%",
    "height": 59.5,
    marginBottom: 10,
  },

  "main_tCh3c0aa05f_thongTinTChTxt_path81206a64e": {
    flexDirection: "row",
    marginTop: 10,
  },
  "main_table": {

    "width": 77,
    "height": 32,
    marginRight: 15
  },
  "main_table_path645": {

    "position": "absolute",
    "width": 77,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "main_table_x1Ch": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 13,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 14.3,
    "left": 22,
    "top": 10.5
  },

  "main_table_none": {
    "width": 77,
    "height": 32,
    marginRight: 15
  },
  "main_table_none_rectangle1459": {

    "position": "absolute",
    "borderTopWidth": 2,
    "borderTopColor": "rgba(191, 151, 104, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(191, 151, 104, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(191, 151, 104, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(191, 151, 104, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 77,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "main_table_none_x2Ch": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
    "fontSize": 13,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 14.3,
    "left": 22,
    "top": 10.5
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group16": {
    flexDirection: "row"
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group16_component1b935fc7b_union1": {
    "width": 16,
    "height": 16,
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group16_sLng": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    marginLeft: 10
  },
  "main_tCh3c0aa05f_thongTinTChTxt_thongTinTCh": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    margin: 10,
  },
  "main_group19": {

    "width": "90%",
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 5,
    padding: 10,
    alignSelf: "center",
  },
  "main_group19_path649": {

    "position": "absolute", "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 5
    },
    "shadowRadius": 6,
    "width": 350.61,
    "height": 291.13,
    "left": 0,
    "top": 22
  },
  "main_group19_giaRoomCoffee": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    marginTop: 15,
  },
  "main_group19_group36": {
    "position": "absolute",
    "width": 76,
    "height": 11.4,
    right: 15,
    top: 150
  },
  "main_group19_group36_path157": {

    "position": "absolute", "width": 12,
    "height": 11.4,
    "left": 0,
    "top": 0
  },
  "main_group19_group36_path158": {

    "position": "absolute", "width": 12,
    "height": 11.4,
    "left": 16,
    "top": 0
  },
  "main_group19_group36_path159": {

    "position": "absolute", "width": 12,
    "height": 11.4,
    "left": 32,
    "top": 0
  },
  "main_group19_group36_path160": {

    "position": "absolute", "width": 12,
    "height": 11.4,
    "left": 48,
    "top": 0
  },
  "main_group19_group36_path161": {

    "position": "absolute", "width": 12,
    "height": 11.4,
    "left": 64,
    "top": 0
  },
  "main_group19_x101OanThImQunPhuNhunTphcm": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    marginTop: 5,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "main_group19_giMCa07h0021h00Th2ChNht": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    marginTop: 5,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "main_group19_moTKhongGianKtHpMayLnhVaNgoaiTriRiengTThichHpLamVicVaCSach": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    marginTop: 5,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "main_group19_inThoi033456789": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 12,
    marginTop: 5,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "main_group19_x2": {

    "borderRadius": 5,
    "width": 145.81,
    "height": 127.7,
    marginRight: 10
  },
  "main_group19_btnXemAnhGia": {

    "position": "absolute",
    "width": 84,
    "height": 22,
    "right": 10,
    "bottom": 7
  },
  "main_group19_btnXemAnhGia_rectangle1471": {

    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderColor": "rgba(191, 151, 104, 1)",
    "borderWidth": 1,
    "borderRadius": 11,
    "width": 84,
    "height": 22,
  },
  "main_group19_btnXemAnhGia_xemAnhGia": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",

    "fontFamily": "Roboto",
    top: 5,
    alignSelf: "center"
  },
  "main_group19_group112": {

    "width": 301.08,
    "height": 16,
  },
  "main_group19_group112_thongTinQuanBnChn": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    "margin": 10,
  },
  "main_group19_group112_path8": {

    "position": "absolute", "width": 305.08,
    "height": 4,
    "left": -2,
    "top": 14
  },
  "main_group19_pagination": {

    "width": 54,
    "height": 6,
  },
  "main_group19_pagination_ellipse8": {

    "position": "absolute", "width": 6,
    "height": 6,
    "left": 0,
    "top": 0
  },
  "main_group19_pagination_ellipse9": {

    "position": "absolute", "width": 6,
    "height": 6,
    "left": 16,
    "top": 0
  },
  "main_group19_pagination_ellipse10": {

    "position": "absolute", "width": 6,
    "height": 6,
    "left": 32,
    "top": 0
  },
  "main_group19_pagination_ellipse11": {

    "position": "absolute", "width": 6,
    "height": 6,
    "left": 48,
    "top": 0
  },
  "main_group19_continue": {
    "width": 129,
    "height": 31,
    margin: 10,
    alignSelf: "center"
  },
  "main_group19_continue_path643": {
    "position": "absolute", "width": 129,
    "height": 31,
    "left": 0,
    "top": 0
  },
  "main_group19_continue_tChf4c11d26": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "left": 34,
    "top": 7
  },
  "main_group38": {

    "width": "100%",
    "height": 80,
  },
  "main_group38_navigationBar": {

    "position": "absolute",
    "width": "100%",
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "main_group38_navigationBar_path647": {

    "position": "absolute", "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 4
    },
    "shadowRadius": 6,
    "width": "100%",
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "main_group38_navigationBar_component1": {

    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 19,
    "top": 40
  },
  "main_group38_navigationBar_component1_path10": {
    "transform": [{ rotate: '180deg' }],
    "position": "absolute", "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "main_group38_navigationBar_tCh": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "textAlign": "center",
    "top": 42,
    alignSelf: "center",
  }
});