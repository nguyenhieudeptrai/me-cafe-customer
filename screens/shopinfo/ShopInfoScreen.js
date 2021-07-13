import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';

import { Overlay } from 'react-native-magnus';

import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { Dropdown, Button, Select } from "react-native-magnus";



const ShopInfoScreen = ({ navigation }) => {
  const [tableSelected, setTableSelected] = useState(null);
  const [viewMenu, setViewMenu] = useState(false);



  const onPressContinuous = () => {
    navigation.navigate('Booking')
  }



  return (
    <View style={styles.shopinfo}>
      <View style={styles.shopinfo_header}>
        <Text style={styles.shopinfo_header_thongTinQuan}>THÔNG TIN QUÁN</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: "absolute", top: 50, left: 15 }}>
          <ReactImage source={require('../../assets/backicon.png')} style={styles.shopinfo_header_backicon} />
        </TouchableOpacity>
      </View>
      <ScrollView>

        <ScrollView horizontal={true}>
          <ReactImage source={require('../../assets/x2.png')} style={styles.shopinfo_group19_picture} />
          <ReactImage source={require('../../assets/x2.png')} style={styles.shopinfo_group19_picture} />
          <ReactImage source={require('../../assets/x2.png')} style={styles.shopinfo_group19_picture} />
        </ScrollView>

        <View style={styles.shopinfo_info}>
          <Text style={styles.shopinfo_info_giaRoomCoffee}>GIA ROOM COFFEE</Text>
          <View style={styles.shopinfo_info_start}>
            <Svg style={styles.shopinfo_info_start_path157} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 156, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path157} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 155, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path157} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 155, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path157} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(255, 220, 156, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.shopinfo_info_start_path157} preserveAspectRatio="none" viewBox="0 0 12 11.4000244140625" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Text style={styles.shopinfo_info_start_x45}> 4.5</Text>
          </View>
          <Text style={styles.shopinfo_info_inThoi033456789}>10/1 Đoàn Thị Điểm, Quận Phú Nhuận, TP.HCM</Text>
          <Text style={styles.shopinfo_info_inThoi033456789}>Giờ mở cửa: 07h00 - 21h00 (Thứ 2 - Chủ nhật)</Text>
          <Text style={styles.shopinfo_info_inThoi033456789}>Điện thoại: 033456789</Text>
          <Text lineBreakMode="head" style={styles.shopinfo_info_inThoi033456789_drs}>
            🌟Về thiết kế của 𝗚𝗶𝗮 𝗥𝗼𝗼𝗺, quán có 2 tầng, và lấy tông trắng kem làm chủ đạo nhìn khá nịn mắt, ở tầng một chỗ ngồi hơi hạn chế vì chiếc quầy order đã chiếm gần hết diện tích, mình thấy góc ngồi ngay cửa sổ trước hiên nhà ở đây khá lý tưởng cho bạn nào thích thả dáng check-in. Lên đến tầng 2 thì không gian thoáng và rộng hơn, với phong cách thiết kế tối giản cộng với ánh sáng tự nhiên cũng khá đầy đủ nhờ có giếng trời đã tạo được cảm giác khá thoải mái cho mình khi ngồi ở đây. Sẽ bắt gặp được kha khá các góc nhỏ trong quán được decor xinh xắn. List nhạc lúc mình đến quán đa số là nhạc Hàn Quốc nghe cũng vui tai. Quán nằm trong hẻm nhỏ nên cũng khá yên tĩnh, phù hợp cho bạn nào thích đọc sách hoặc tìm một chỗ tán gẫu với bạn bè.</Text>
          <TouchableOpacity onPress={() => setViewMenu(true)} style={styles.shopinfo_info_menubt}>
            <Text style={styles.shopinfo_info_menubt_menuQuan}>Menu quán</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.shopinfo_tienich}>
          <Text style={styles.shopinfo_tienich_tinIch}>Tiện ích</Text>
          <View style={{ flexDirection: "row", paddingLeft: 10, paddingTop: 10 }}>
            <View style={styles.shopinfo_tienich_room}>
              <Text style={styles.shopinfo_tienich_room_phongHp10Ngi}>Phòng họp 10 người</Text>
              <ReactImage source={require('../../assets/pinclipartcommeetingClipartFree63947.png')} style={styles.shopinfo_tienich_room_pinclipartcommeetingClipartFree63947} />
            </View>
            <View style={styles.shopinfo_tienich_projector}>
              <Text style={styles.shopinfo_tienich_room_phongHp10Ngi}>Máy chiếu</Text>
              <ReactImage source={require('../../assets/x2020624419991071872977076642162411729179112n.png')} style={styles.shopinfo_tienich_projector_x2020624419991071872977076642162411729179112n} />
            </View>
          </View>
          <View style={{ flexDirection: "row", paddingLeft: 10, paddingLeft: 10, paddingTop: 10 }}>
            <View style={styles.shopinfo_tienich_ac}>
              <Text style={styles.shopinfo_tienich_room_phongHp10Ngi}>Phòng máy lạnh</Text>
              <ReactImage source={require('../../assets/aaaa.png')} style={styles.shopinfo_tienich_ac_aaaa} />
            </View>
            <View style={styles.shopinfo_tienich_wifi}>
              <Text style={styles.shopinfo_tienich_room_phongHp10Ngi}>Wifi miễn phí</Text>
              <ReactImage source={require('../../assets/image4.png')} style={styles.shopinfo_tienich_wifi_image4} />
            </View>
          </View>

          <Text style={{ marginTop: 10, color: "rgba(194, 151, 106, 0.9803921568627451)" }}>Giá cho phòng họp: 30k/giờ</Text>
        </View>



        <View style={{ marginHorizontal: 10, marginVertical: 10, backgroundColor: "#FFF", padding: 10 }}>
          <Text style={styles.commentshop_anhGiaTxt_anhGiaKhachHang}>Đánh giá khách hàng</Text>
          <View style={styles.commentshop_group45}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ReactImage source={require('../../assets/rectangle1472.png')} style={styles.commentshop_group45_rectangle1472c74ae538} />
              <View style={styles.commentshop_group45_group36}>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
              </View>
            </View>
            <View style={styles.commentshop_group45_messagec41c5359}>
              <Svg style={styles.commentshop_group45_messagec41c5359_path1127b8c95f5} preserveAspectRatio="none" viewBox="0 -2 261.189697265625 32.46502685546875" fill="rgba(254, 205, 151, 1)"><SvgPath d="M 9.584942817687988 30.46502685546875 L 261.189697265625 30.46502685546875 L 261.189697265625 -2 L 9.584942817687988 -2 L 9.584942817687988 9.594653129577637 L 0 14.23251247406006 L 9.584942817687988 18.8703727722168 L 9.584942817687988 30.46502685546875 Z" /></Svg>
              <Text style={styles.commentshop_group45_messagec41c5359_ngDngTinLiKhiCBookTrcChKhiIOng}>Ứng dụng tiện lợi khi được book trước chỗ khi đi đông</Text>
            </View>
          </View>
          <View style={styles.commentshop_group45}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <ReactImage source={require('../../assets/rectangle1472.png')} style={styles.commentshop_group45_rectangle1472c74ae538} />
              <View style={styles.commentshop_group45_group36}>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(246, 87, 0, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
                <Svg style={styles.commentshop_group45_group36_path1574cb28200} preserveAspectRatio="none" viewBox="0 0 4.744873046875 4.507568359375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 2.37239146232605 0 L 3.113763809204102 1.482744693756104 L 4.7447829246521 1.71998405456543 L 3.558587312698364 2.876524686813354 L 3.825480937957764 4.507543563842773 L 2.37239146232605 3.736516952514648 L 0.9193016290664673 4.507543563842773 L 1.186195731163025 2.876524686813354 L 0 1.71998405456543 L 1.631019115447998 1.482744693756104 L 2.37239146232605 0 Z" /></Svg>
              </View>
            </View>
            <View style={styles.commentshop_group45_messagec41c5359}>
              <Svg style={styles.commentshop_group45_messagec41c5359_path1127b8c95f5} preserveAspectRatio="none" viewBox="0 -2 261.189697265625 32.46502685546875" fill="rgba(254, 205, 151, 1)"><SvgPath d="M 9.584942817687988 30.46502685546875 L 261.189697265625 30.46502685546875 L 261.189697265625 -2 L 9.584942817687988 -2 L 9.584942817687988 9.594653129577637 L 0 14.23251247406006 L 9.584942817687988 18.8703727722168 L 9.584942817687988 30.46502685546875 Z" /></Svg>
              <Text style={styles.commentshop_group45_messagec41c5359_ngDngTinLiKhiCBookTrcChKhiIOng}>Quán đẹp, nhân viên nhiệt tình</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={onPressContinuous} style={styles.shopinfo_group19_dangkyngayBtn}>
        <View style={styles.shopinfo_group19_dangkyngayBtn_tChNgay}><Text style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>BẮT ĐẦU CHỖ NGAY</Text></View>
      </TouchableOpacity>

      <Overlay visible={viewMenu} p="sm">
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setViewMenu(false)} style={{
            "width": 40,
            "height": 40,
            justifyContent: "center",
            alignItems: "center",
            // borderWidth: 1,
          }}>
            <Svg style={{
              "transform": [{ rotate: '180deg' }],
              "width": 16,
              "height": 16,
            }}
              preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)">
              <SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z" />
            </Svg>
          </TouchableOpacity>
          <Text style={{ flex: 1, fontWeight: "700", fontSize: 18, textAlign: "center" }}>Menu</Text>
          <View style={{ "width": 40, "height": 40, }} />
        </View>
        <View style={{ marginTop: 15, width: "100%" }}>
          <ReactImage source={require('../../assets/menu.jpg')} style={styles.shopinfo_group19_picture_popup} />
        </View>
      </Overlay>
    </View>
  );
}
export default ShopInfoScreen;


const styles = StyleSheet.create({
  "shopinfo": {
    flex: 1
  },
  "shopinfo_group19": {
    "opacity": 1,
    "backgroundColor": "transparent",
    "width": "100%",
  },
  "shopinfo_group19_picture": {
    "borderRadius": 5,
    padding: 0,
    width:600, 
    height:300
  },
  "shopinfo_group19_picture_popup": {
    "borderRadius": 5,
    width: "100%",
    height: undefined,
    padding: 0,
    aspectRatio: 1,
    resizeMode: 'contain',
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
  "shopinfo_menu": {

    "backgroundColor": "transparent",

    "width": 393,
    "height": 79,
    "left": 0,
    "top": 772
  },
  "shopinfo_menu_group57": {

    "backgroundColor": "transparent",
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group57_path5": {


    "shadowOpacity": 0.3411764705882353,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 10,
    "width": 393,
    "height": 79,

  },
  "shopinfo_menu_group6": {

    "backgroundColor": "transparent",

    "width": 50,
    "height": 51,
    "left": 23,
    "top": 14
  },
  "shopinfo_menu_group6_rectangle11": {
    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",
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
    "backgroundColor": "transparent",
    "width": 50,
    "height": 51,

  },
  "shopinfo_menu_group6_group14_tabHome": {

    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "shopinfo_menu_group6_group14_trangCh": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 50,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_menu_group7": {

    "backgroundColor": "transparent",

    "width": 38,
    "height": 51,
    "left": 128,
    "top": 14
  },
  "shopinfo_menu_group7_rectangle12": {

    "backgroundColor": "rgba(152, 235, 255, 0.2)",

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

    "backgroundColor": "transparent",

    "width": 38,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "shopinfo_menu_group7_group13_boking": {


    "width": 33,
    "height": 33,
    "left": 3,
    "top": 0
  },
  "shopinfo_menu_group7_group13_tCh": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",

    "width": 38,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_menu_group8": {

    "backgroundColor": "transparent",

    "width": 50,
    "height": 51,
    "left": 221,
    "top": 14
  },
  "shopinfo_menu_group8_rectangle13": {

    "backgroundColor": "rgba(105, 180, 255, 0.1803921568627451)",

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

    "backgroundColor": "transparent",

    "width": 50,
    "height": 51,

  },
  "shopinfo_menu_group8_group12_tab3": {

    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "shopinfo_menu_group8_group12_tichIm": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",

    "width": 50,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_menu_group9": {

    "backgroundColor": "transparent",

    "width": 36,
    "height": 51,
    "left": 327,
    "top": 14
  },
  "shopinfo_menu_group9_rectangle14": {
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "borderTopWidth": 1,
    "borderTopColor": "rgba(0, 0, 0, 0)",
    "borderRightWidth": 1,
    "borderRightColor": "rgba(0, 0, 0, 0)",
    "borderBottomWidth": 1,
    "borderBottomColor": "rgba(0, 0, 0, 0)",
    "borderLeftWidth": 1,
    "borderLeftColor": "rgba(0, 0, 0, 0)",
    "width": 96,
    "height": 79,
    "left": -30,
    "top": -14
  },
  "shopinfo_menu_group9_group11": {
    "backgroundColor": "transparent",
    "width": 36,
    "height": 51,
  },
  "shopinfo_menu_group9_group11_setting2": {
    "width": 33,
    "height": 33,
    "left": 2,
    "top": 0
  },
  "shopinfo_menu_group9_group11_caiT": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 0.9411764705882353)",
    "fontSize": 11,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 36,
    "height": 15,
    "left": 0,
    "top": 36
  },
  "shopinfo_info": {
    "backgroundColor": "#FFF",
    margin: 10,
    padding: 10
  },
  "shopinfo_info_giaRoomCoffee": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 22,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
  },
  "shopinfo_info_inThoi033456789": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    marginVertical: 5,
  },
  "shopinfo_info_inThoi033456789_drs": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 16,
    "fontWeight": "400",
    "fontFamily": "Roboto",
    marginVertical: 5,
  },
  "shopinfo_info_menubt": {
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderWidth": 1,
    "borderColor": "rgba(191, 151, 104, 1)",
    "borderRadius": 11,
    padding: 10,
  },
  "shopinfo_info_menubt_rectangle1471df089f47": {
    "width": 88.02,
    "height": 22,
    "left": 0,
    "top": 0
  },
  "shopinfo_info_menubt_menuQuan": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    textAlign: "center"
  },

  "shopinfo_info_start": {
    "width": "100%",
    flexDirection: "row",
  },
  "shopinfo_info_start_path157": {

    "width": 20,
    "height": 20,

  },
  "shopinfo_info_start_x45": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "shopinfo_tienich": {
    marginHorizontal: 10,
    backgroundColor: "#FFF",
    padding: 10
  },
  "shopinfo_tienich_room": {
    "height": 15,
    flex: 1,
  },
  "shopinfo_tienich_room_phongHp10Ngi": {
    "position": "absolute",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 30,
    "top": 1
  },
  "shopinfo_tienich_room_pinclipartcommeetingClipartFree63947": {
    "opacity": 1,
    "position": "absolute",
    "width": 19,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich_projector": {
    "height": 18,
    flex: 1,
  },
  "shopinfo_tienich_projector_x2020624419991071872977076642162411729179112n": {

    "width": 18,
    "height": 18,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich_ac": {
    flex: 1,
    "height": 25,
  },
  "shopinfo_tienich_ac_aaaa": {
    "width": 25,
    "height": 25,
    "left": 0,
    "top": 0
  },
  "shopinfo_tienich_wifi": {
    flex: 1,
    "height": 15,
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
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 19,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
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
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 30,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "width": 8,
    "height": 37,
    marginLeft: 5
  },
  "main_tCh3c0aa05f_group15_group7": {
    "width": 92,
    "height": 90,
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
    "width": 92,
    "height": 90,
    marginLeft: 5
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




  "commentshop_anhGiaTxt_anhGiaKhachHang": {
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 19,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "commentshop_x3": {
    "width": 300,
    "height": 200,
    alignSelf: "center",
    marginBottom: 20
  },
  "commentshop_pagination": {
    "backgroundColor": "transparent",
    "width": 54,
    "height": 6,
    "left": 170,
    "top": 457
  },
  "commentshop_pagination_ellipse8": {
    "width": 6,
    "height": 6,
    "left": 0,
    "top": 0
  },
  "commentshop_pagination_ellipse9": {
    "width": 6,
    "height": 6,
    "left": 16,
    "top": 0
  },
  "commentshop_pagination_ellipse10": {
    "width": 6,
    "height": 6,
    "left": 32,
    "top": 0
  },
  "commentshop_pagination_ellipse11": {
    "width": 6,
    "height": 6,
    "left": 48,
    "top": 0
  },
  "commentshop_group45": {
    marginTop: 15,
    flexDirection: "row",
  },
  "commentshop_group45_messagec41c5359": {
    paddingLeft: "5%",
    flex: 1,
    marginLeft: 5,
    justifyContent: "center",
  },
  "commentshop_group45_messagec41c5359_path1127b8c95f5": {
    "position": "absolute",
    "width": "100%",
    "height": "100%",
    "left": 0,
    "top": 0
  },
  "commentshop_group45_messagec41c5359_ngDngTinLiKhiCBookTrcChKhiIOng": {
    "color": "rgba(0, 0, 0, 1)",
    "fontSize": 14,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    width: "90%",
    zIndex: 1
  },
  "commentshop_group45_rectangle1472c74ae538": {
    "borderRadius": 15,
    "width": 40,
    "height": 40,
  },
  "commentshop_group45_group36": {
    flexDirection: "row",
    flex: 1
  },
  "commentshop_group45_group36_path1574cb28200": {
    "width": 10,
    "height": 10,
  },
  "commentshop_group45_group36_path15845c728c9": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 6.33,
    "top": 0
  },
  "commentshop_group45_group36_path159fc09b523": {
    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 12.65,
    "top": 0
  },
  "commentshop_group45_group36_path16065ae2b0e": {
    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 18.98,
    "top": 0
  },
  "commentshop_group45_group36_path16149021f86": {

    "position": "absolute",
    "width": 4.74,
    "height": 4.51,
    "left": 25.31,
    "top": 0
  },
});