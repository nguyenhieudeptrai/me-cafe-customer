import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { Modal } from "react-native-magnus";

const ShopInfoScreen = ({ navigation }) => {
  const [tableSelected, setTableSelected] = useState(null);

  const onConfirmPress = () => {
    navigation.navigate('DetailShop')
  }

  const [timeSearch, setTimeSearch] = useState('7:00');

  const onReviewPress = () => {
    navigation.navigate('DetailShop')
  }

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

  const [visible, setVisible] = useState(false);

  const onAddFrom = (isHour, num) => {
    let fromTmp = from;
    if (isHour)
      fromTmp = new Date(fromTmp.setHours(fromTmp.getHours() + num));
    else
      fromTmp = new Date(fromTmp.setMinutes(fromTmp.getMinutes() + num));
    setFrom(fromTmp);
  }

  const [from, setFrom] = useState(new Date());

  return (
    <View style={styles.shopinfo}>
      <View style={styles.shopinfo_header}>
        <Svg style={styles.shopinfo_header_bg} preserveAspectRatio="none" viewBox="0 0 393 75.1141357421875" fill="rgba(240, 211, 122, 1)"><SvgPath d="M 0 0 L 393 0 L 393 75.1141357421875 L 0 75.1141357421875 L 0 0 Z" /></Svg>
        <Text style={styles.shopinfo_header_thongTinQuan}>THÔNG TIN QUÁN</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}><ReactImage source={require('./assets/backicon.png')} style={styles.shopinfo_header_backicon} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.shopinfo_group19}>
          <ReactImage source={require('./assets/picture.png')} style={styles.shopinfo_group19_picture} />
        </View>

        <View style={styles.shopinfo_info}>
          <Text style={styles.shopinfo_info_giaRoomCoffee}>GIA ROOM COFFEE</Text>
          <Text style={styles.shopinfo_info_x101OanThImQunPhuNhunTphcm}>10/1 Đoàn Thị Điểm, Quận Phú Nhuận, TP.HCM</Text>
          <Text style={styles.shopinfo_info_giMCa07h0021h00Th2ChNht}>Giờ mở cửa: 07h00 - 21h00 (Thứ 2 - Chủ nhật)</Text>
          <Text style={styles.shopinfo_info_inThoi033456789}>Điện thoại: 033456789</Text>
          <View style={styles.shopinfo_info_menubt}>
            <Text style={styles.shopinfo_info_menubt_menuQuan}>Menu quán</Text>
          </View>
          <View style={styles.shopinfo_info_reviewbtn}>
            <Text style={styles.shopinfo_info_reviewbtn_xemAnhGia}>Xem đánh giá</Text>
          </View>
          <View style={styles.shopinfo_info_start}>
            <Svg style={styles.shopinfo_info_start_path157} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 156, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path158} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 155, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path159} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 155, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path160} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 156, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path161} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Text style={styles.shopinfo_info_start_x45}> 4.5</Text>
          </View>
        </View>
        <View style={styles.shopinfo_tienich}>
          <View style={styles.shopinfo_tienich_room}>
            <Text style={styles.shopinfo_tienich_room_phongHp10Ngi}>Phòng họp 10 người</Text>
            <ReactImage source={require('./assets/pinclipartcommeetingClipartFree63947.png')} style={styles.shopinfo_tienich_room_pinclipartcommeetingClipartFree63947} />
          </View>
          <View style={styles.shopinfo_tienich_projector}>
            <Text style={styles.shopinfo_tienich_projector_mayChiu}>Máy chiếu</Text>
            <ReactImage source={require('./assets/x2020624419991071872977076642162411729179112n.png')} style={styles.shopinfo_tienich_projector_x2020624419991071872977076642162411729179112n} />
          </View>
          <View style={styles.shopinfo_tienich_ac}>
            <Text style={styles.shopinfo_tienich_ac_phongMayLnh}>Phòng máy lạnh</Text>
            <ReactImage source={require('./assets/aaaa.png')} style={styles.shopinfo_tienich_ac_aaaa} />
          </View>
          <View style={styles.shopinfo_tienich_wifi}>
            <Text style={styles.shopinfo_tienich_wifi_wifiMinPhi}>Wifi miễn phí</Text>
            <ReactImage source={require('./assets/image4.png')} style={styles.shopinfo_tienich_wifi_image4} />
          </View>
          <Text style={styles.shopinfo_tienich_tinIch}>Tiện ích</Text>
        </View>
        <View style={styles.shopinfo_timeslot}>
          <Text style={styles.shopinfo_timeslot_khungGiTrng}>Khung giờ trống</Text>
          <View style={styles.shopinfo_timeslot_today}>
            <Text style={styles.shopinfo_timeslot_today_thiGian}>Thời gian:</Text>
            <Text style={styles.shopinfo_timeslot_today_homNay}>Hôm nay</Text>
            <ReactImage source={require('./assets/backIcon2f9ac0684.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
          </View>
          <View style={styles.shopinfo_timeslot_timet}>
            <Text style={styles.shopinfo_timeslot_timet_btULuc}>Bắt đầu lúc:</Text>
            <Text style={styles.shopinfo_timeslot_timet_x0700Am} onPress={() => { loadTimeSearch(); setVisible(true) }}>{timeSearch}</Text>
            <Modal isVisible={visible}>
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
              <Button title="OK" onPress={() => { setTimeSearch(getFullTime()); setVisible(false) }} ></Button>
            </Modal>
            <ReactImage source={require('./assets/backIcon2.png')} style={styles.shopinfo_timeslot_timet_backIcon2} />
          </View>
          <View style={styles.shopinfo_timeslot_timen}>
            <Text style={styles.shopinfo_timeslot_timen_khong}>Khoảng:</Text>
            <Text style={styles.shopinfo_timeslot_timen_x1Gi}>1 giờ</Text>
            <ReactImage source={require('./assets/backIcon27fde8a1b.png')} style={styles.shopinfo_timeslot_today_backIcon2f9ac0684} />
          </View>
          <View style={styles.shopinfo_timeslot_btnsearch}>
            <View style={styles.shopinfo_timeslot_btnsearch_rectangle1471}></View>
            <Text style={styles.shopinfo_timeslot_btnsearch_timKim}>Tìm kiếm</Text>
          </View>
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

        <TouchableOpacity onPress={onConfirmPress} style={styles.shopinfo_group19_dangkyngayBtn}>
          <Svg style={styles.shopinfo_group19_dangkyngayBtn_path643} preserveAspectRatio="none" viewBox="0 0 155.9873046875 31" fill={tableSelected == null ? "#868686" : "rgba(212, 174, 57, 1)"}>
            <SvgPath d="M 1.908100247383118 0 L 154.0790863037109 0 C 155.1328887939453 0 155.9871826171875 1.15659761428833 155.9871826171875 2.583333253860474 L 155.9871826171875 28.41666603088379 C 155.9871826171875 29.84340286254883 155.1328887939453 31 154.0790863037109 31 L 1.908100247383118 31 C 0.8542854785919189 31 0 29.84340286254883 0 28.41666603088379 L 0 2.583333253860474 C 0 1.15659761428833 0.8542854785919189 0 1.908100247383118 0 Z" /></Svg>
          <View style={styles.shopinfo_group19_dangkyngayBtn_tChNgay}><Text style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>ĐẶT CHỖ NGAY</Text></View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
export default ShopInfoScreen;


const styles = StyleSheet.create({
  "shopinfo": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "width": "100%",
    "height": 851,
    "alignSelf": 'center',
    "top": 0
  },
  "shopinfo_group19": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "width": "100%",
  },
  "shopinfo_group19_picture": {
    "width": "100%",
    "height": 222.1,
  },
  "shopinfo_group19_bg2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 30,
    "borderTopRightRadius": 30,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": "100%",
    "height": 578,
    "left": 0,
    "top": 198.89
  },
  "shopinfo_group19_dangkyngayBtn": {
    "backgroundColor": "transparent",
    "width": 155.99,
    "height": 31,
    "alignSelf": 'center',
  },
  "shopinfo_group19_dangkyngayBtn_path643": {
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
    "width": 155.99,
    "height": 31,
    "left": 0,
    "top": 0
  },
  "shopinfo_group19_dangkyngayBtn_tChNgay": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 16.5,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 106,
    "height": 20,
    "left": 25.71,
    "top": 9
  },
  "shopinfo_header": {
    "backgroundColor": "transparent",
    "width": "100%",
  },
  "shopinfo_header_bg": {
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
    "width": "100%",
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "shopinfo_header_thongTinQuan": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 124,
    "height": 20,
    "alignSelf": 'center',
    "top": 37
  },
  "shopinfo_header_backicon": {
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
    "width": 20,
    "height": 20,
    "left": 13,
    "top": 37
  },
  "shopinfo_menu": {
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
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 772
  },
  "shopinfo_menu_group57": {
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
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group57_path5": {
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
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.3411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group6": {
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
    "width": 50,
    "height": 51,
    "left": 23,
    "top": 14
  },
  "shopinfo_menu_group6_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "shopinfo_menu_group6_group14": {
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
    "width": 50,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group6_group14_tabHome": {
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
    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "shopinfo_menu_group6_group14_trangCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 50,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_menu_group7": {
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
    "width": 38,
    "height": 51,
    "left": 128,
    "top": 14
  },
  "shopinfo_menu_group7_rectangle12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -29,
    "top": -14
  },
  "shopinfo_menu_group7_group13": {
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
    "width": 38,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group7_group13_boking": {
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
    "width": 33,
    "height": 33,
    "left": 3,
    "top": 0
  },
  "shopinfo_menu_group7_group13_tCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 38,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_menu_group8": {
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
    "width": 50,
    "height": 51,
    "left": 221,
    "top": 14
  },
  "shopinfo_menu_group8_rectangle13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "shopinfo_menu_group8_group12": {
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
    "width": 50,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group8_group12_tab3": {
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
    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "shopinfo_menu_group8_group12_tichIm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 50,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_menu_group9": {
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
    "width": 36,
    "height": 51,
    "left": 327,
    "top": 14
  },
  "shopinfo_menu_group9_rectangle14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 96,
    "height": 79,
    "left": -30,
    "top": -14
  },
  "shopinfo_menu_group9_group11": {
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
    "width": 36,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group9_group11_setting2": {
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
    "width": 33,
    "height": 33,
    "left": 2,
    "top": 0
  },
  "shopinfo_menu_group9_group11_caiT": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 36,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_info": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "width": "100%",
    "height": 119.36,
  },
  "shopinfo_info_giaRoomCoffee": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 19,
  },
  "shopinfo_info_x101OanThImQunPhuNhunTphcm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 11,
    "left": 17.5,
    "top": 32
  },
  "shopinfo_info_giMCa07h0021h00Th2ChNht": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 9,
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
    "width": 179,
    "height": 11,
    "left": 17.5,
    "top": 54
  },
  "shopinfo_info_inThoi033456789": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 100,
    "height": 11,
    "left": 17.5,
    "top": 76
  },
  "shopinfo_info_menubt": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(191, 151, 104, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(191, 151, 104, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(191, 151, 104, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(191, 151, 104, 1)",
    "borderTopLeftRadius": 11,
    "borderTopRightRadius": 11,
    "borderBottomLeftRadius": 11,
    "borderBottomRightRadius": 11,
    "width": 88.02,
    "height": 22,
    "right": 150,
    "top": 97.36
  },
  "shopinfo_info_menubt_rectangle1471df089f47": {
    "opacity": 1,
    "position": "absolute",

    "width": 88.02,
    "height": 22,
    "left": 0,
    "top": 0
  },
  "shopinfo_info_menubt_menuQuan": {
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
    "width": 50,
    "height": 13,
    "left": 19.01,
    "top": 4.5
  },
  "shopinfo_info_reviewbtn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(191, 151, 104, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(191, 151, 104, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(191, 151, 104, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(191, 151, 104, 1)",
    "borderTopLeftRadius": 11,
    "borderTopRightRadius": 11,
    "borderBottomLeftRadius": 11,
    "borderBottomRightRadius": 11,
    "width": 88.02,
    "height": 22,
    "right": 50,
    "top": 97.36
  },
  "shopinfo_info_reviewbtn_rectangle1471fc49ee5c": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(191, 151, 104, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(191, 151, 104, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(191, 151, 104, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(191, 151, 104, 1)",
    "borderTopLeftRadius": 11,
    "borderTopRightRadius": 11,
    "borderBottomLeftRadius": 11,
    "borderBottomRightRadius": 11,
    "width": 88.02,
    "height": 22,
  },
  "shopinfo_info_reviewbtn_xemAnhGia": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 65,
    "height": 13,
    "left": 13.51,
    "top": 4
  },
  "shopinfo_info_start": {
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
    "width": 91.31,
    "height": 13.33,
    "left": 15.69,
    "top": 102.67
  },
  "shopinfo_info_start_path157": {
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
    "width": 12,
    "height": 11.4,
    "left": 0,
    "top": 0
  },
  "shopinfo_info_start_path158": {
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
    "width": 12,
    "height": 11.4,
    "left": 14.96,
    "top": 0
  },
  "shopinfo_info_start_path159": {
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
    "width": 12,
    "height": 11.4,
    "left": 29.91,
    "top": 0
  },
  "shopinfo_info_start_path160": {
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
    "width": 12,
    "height": 11.4,
    "left": 44.87,
    "top": 0
  },
  "shopinfo_info_start_path161": {
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
    "width": 12,
    "height": 11.4,
    "left": 59.83,
    "top": 0
  },
  "shopinfo_info_start_x45": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 20,
    "height": 13,
    "left": 75.31,
    "top": 0.33
  },
  "shopinfo_timeslot": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "width": "100%",
    "height": 84.27,
  },
  "shopinfo_timeslot_today": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 116.44,
    "height": 13.58,
    "left": 28.5,
    "top": 34.46
  },
  "shopinfo_timeslot_today_homNay": {
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
    "width": 40,
    "height": 13,
    "left": 54.52,
    "top": 0
  },
  "shopinfo_timeslot_today_backIcon2f9ac0684": {
    "opacity": 1,
    "position": "absolute",
    "width": 13,
    "height": 13,
    "left": 103.44,
    "top": 0.45,
    "transform": [{ rotate: '-90deg' }],
  },
  "shopinfo_timeslot_today_thiGian": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 50,
    "height": 13,
    "left": 0,
    "top": 0.58
  },
  "shopinfo_timeslot_timen": {
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
    "width": 104.78,
    "height": 13.61,
    "left": 165,
    "top": 66.75
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
    "width": 22,
    "height": 13,
    "alignSelf": 'center',
    "top": 0.61
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
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 50,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "shopinfo_timeslot_timet": {
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
    "width": 127.94,
    "height": 13,
    "left": 19,
    "top": 67.77
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
    "width": 43,
    "height": 13,
    "left": 64.02,
    "top": 0
  },
  "shopinfo_timeslot_timet_btULuc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
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
    "width": 53,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "shopinfo_timeslot_khungGiTrng": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "500",
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
    "width": 93,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "shopinfo_timeslot_btnsearch": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 64.4,
    "height": 22,
    "right": 50,
    "top": 62.27
  },
  "shopinfo_timeslot_btnsearch_rectangle1471": {
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
    "width": 64.4,
    "height": 22,
    "left": 0,
    "top": 0
  },
  "shopinfo_timeslot_btnsearch_timKim": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 10,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 42,
    "height": 13,
    "alignSelf": 'center',
    "top": 5
  },
  "shopinfo_result": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "width": "100%",
    "height": 139,
  },
  "shopinfo_result_tableempty2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 287,
    "height": 53,
    "top": 23
  },
  "shopinfo_result_tableempty2_rectangle14922f124342": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(191, 151, 104, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(191, 151, 104, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(191, 151, 104, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(191, 151, 104, 1)",
    "borderTopLeftRadius": 9,
    "borderTopRightRadius": 9,
    "borderBottomLeftRadius": 9,
    "borderBottomRightRadius": 9,
    "width": 287,
    "height": 53,
    "left": 0,
    "top": 0
  },
  "shopinfo_result_tableempty2_ban": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 30,
    "height": 18,
    "left": 37.34,
    "top": 12
  },
  "shopinfo_result_tableempty2_loi6Ch": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 60,
    "height": 13,
    "left": 26.83,
    "top": 28.64
  },
  "shopinfo_result_tableempty2_banTrngTLuc0800169f5e91": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 120,
    "height": 13,
    "left": 106.5,
    "top": 22.14
  },
  "shopinfo_result_tableempty2_line8": {
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
    "width": 1,
    "height": 34,
    "left": 95,
    "top": 9.5
  },
  "shopinfo_result_roombtn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 288,
    "height": 53,
    "top": 86,
  },
  "shopinfo_result_roombtn_rectangle1492": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(191, 151, 104, 1)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(191, 151, 104, 1)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(191, 151, 104, 1)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(191, 151, 104, 1)",
    "borderTopLeftRadius": 9,
    "borderTopRightRadius": 9,
    "borderBottomLeftRadius": 9,
    "borderBottomRightRadius": 9,
    "width": 288,
    "height": 53,
    "left": 0,
    "top": 0
  },
  "shopinfo_result_roombtn_phongHp": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 80,
    "height": 18,
    "left": 14,
    "top": 10.5
  },
  "shopinfo_result_roombtn_loi10Ngi": {
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
    "width": 62,
    "height": 13,
    "left": 20,
    "top": 27.5
  },
  "shopinfo_result_roombtn_line9": {
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
    "width": 1,
    "height": 34,
    "left": 97,
    "top": 10.5
  },
  "shopinfo_result_roombtn_banTrngTLuc0800": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 120,
    "height": 13,
    "left": 106.5,
    "top": 21
  },
  "shopinfo_result_title": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
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
    "width": 42,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 289.5,
    "height": 68,
  },
  "shopinfo_tienich_room": {
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
    "width": 116.5,
    "height": 15,
    "left": 173,
    "top": 48
  },
  "shopinfo_tienich_room_phongHp10Ngi": {
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
    "width": 90,
    "height": 13,
    "left": 26.5,
    "top": 1
  },
  "shopinfo_tienich_room_pinclipartcommeetingClipartFree63947": {
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
    "width": 19,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich_projector": {
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
    "width": 70.5,
    "height": 18,
    "left": 174,
    "top": 21
  },
  "shopinfo_tienich_projector_mayChiu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 50,
    "height": 13,
    "left": 25.5,
    "top": 4
  },
  "shopinfo_tienich_projector_x2020624419991071872977076642162411729179112n": {
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
    "width": 18,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich_ac": {
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
    "width": 103.5,
    "height": 25,
    "left": 8,
    "top": 43
  },
  "shopinfo_tienich_ac_phongMayLnh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 75,
    "height": 13,
    "left": 32.5,
    "top": 6
  },
  "shopinfo_tienich_ac_aaaa": {
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
    "width": 25,
    "height": 25,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich_wifi": {
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
    "width": 86.5,
    "height": 15,
    "left": 13,
    "top": 24
  },
  "shopinfo_tienich_wifi_wifiMinPhi": {
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
    "width": 58,
    "height": 13,
    "left": 28.5,
    "top": 1
  },
  "shopinfo_tienich_wifi_image4": {
    "opacity": 1,
    "position": "absolute",
    "width": 15,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich_tinIch": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "500",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 50,
    "height": 18,
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
  "main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_rectangle1467420d5d2d": {

    "position": "absolute",

    "width": 10,
    "height": 10,
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
  "main_tCh3c0aa05f_group15_x9f45184b": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "width": 8,
    "height": 37,
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
    "transform":[{rotate:'180deg'}],
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
    "transform":[{rotate:'180deg'}],
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
});