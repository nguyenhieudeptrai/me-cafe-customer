import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const DetailShopScreen = () => {

  return (
    <View style={styles.main}>

      <View style={styles.main_group38}>
        <View style={styles.main_group38_navigationBar}>
          <Svg style={styles.main_group38_navigationBar_path647} preserveAspectRatio="none" viewBox="0 0 393 75.1141357421875" fill="rgba(240, 211, 122, 1)"><SvgPath d="M 0 0 L 393 0 L 393 75.1141357421875 L 0 75.1141357421875 L 0 0 Z" /></Svg>
          <View style={styles.main_group38_navigationBar_component1}>
            <Svg style={styles.main_group38_navigationBar_component1_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z" /></Svg>
          </View>
          <Text style={styles.main_group38_navigationBar_tCh}>ĐẶT CHỖ</Text>
        </View>
      </View>
      <ScrollView>
        <Text style={styles.main_group19_group112_thongTinQuanBnChn}>Thông tin quán bạn chọn</Text>

        <View style={styles.main_group19}>
          <ScrollView horizontal={true}>
            <ReactImage source={require('./assets/x2.png')} style={styles.main_group19_x2} />
            <ReactImage source={require('./assets/x2.png')} style={styles.main_group19_x2} />
            <ReactImage source={require('./assets/x2.png')} style={styles.main_group19_x2} />
          </ScrollView>
          <View style={styles.main_group19_group36}>
            <Svg style={styles.main_group19_group36_path157} preserveAspectRatio="none" viewBox="0 0 12 11.399993896484375" fill="rgba(255, 220, 156, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.main_group19_group36_path158} preserveAspectRatio="none" viewBox="0 0 12 11.399993896484375" fill="rgba(255, 220, 155, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.main_group19_group36_path159} preserveAspectRatio="none" viewBox="0 0 12 11.399993896484375" fill="rgba(255, 220, 155, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.main_group19_group36_path160} preserveAspectRatio="none" viewBox="0 0 12 11.399993896484375" fill="rgba(255, 220, 156, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
            <Svg style={styles.main_group19_group36_path161} preserveAspectRatio="none" viewBox="0 0 12 11.399993896484375" fill="rgba(176, 177, 181, 1)"><SvgPath d="M 6 0 L 7.875 3.75 L 12 4.350000381469727 L 9 7.274999618530273 L 9.674999237060547 11.39999961853027 L 6 9.450000762939453 L 2.324999809265137 11.39999961853027 L 3 7.274999618530273 L 0 4.350000381469727 L 4.125 3.75 L 6 0 Z" /></Svg>
          </View>
          <Text style={styles.main_group19_giaRoomCoffee}>GIA ROOM COFFEE</Text>

          <Text style={styles.main_group19_x101OanThImQunPhuNhunTphcm}>10/1 Đoàn Thị Điểm, Quận Phú Nhuận, TP.HCM</Text>
          <Text style={styles.main_group19_giMCa07h0021h00Th2ChNht}>Giờ mở cửa: 07h00 - 21h00 (Thứ 2 - Chủ nhật)</Text>
          <Text style={styles.main_group19_moTKhongGianKtHpMayLnhVaNgoaiTriRiengTThichHpLamVicVaCSach}>Mô tả: Không gian kết hợp máy lạnh và ngoài trời, riêng tư, thích hợp làm
việc và đọc sách.</Text>
          <Text style={styles.main_group19_inThoi033456789}>Điện thoại: 033456789</Text>
          <TouchableOpacity style={styles.main_group19_btnXemAnhGia}>
            <View style={styles.main_group19_btnXemAnhGia_rectangle1471}></View>
            <Text style={styles.main_group19_btnXemAnhGia_xemAnhGia}>Xem đánh giá</Text>
          </TouchableOpacity>

        </View>

        <Text style={styles.main_tCh3c0aa05f_thongTinTChTxt_thongTinTCh}>Thông tin đặt chỗ</Text>

        <View style={styles.main_tCh3c0aa05f}>
          <Svg style={styles.main_tCh3c0aa05f_path650} preserveAspectRatio="none" viewBox="0 0 352 544.3028564453125" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 15 0 L 337 0 C 345.2842712402344 0 352 5.905315399169922 352 13.18989276885986 L 352 544.3028564453125 L 0 544.3028564453125 L 0 390.1172485351563 L 0 13.18989276885986 C 0 5.905315399169922 6.715728759765625 0 15 0 Z" /></Svg>
          <View style={styles.main_tCh3c0aa05f_group15}>
            <View style={styles.main_tCh3c0aa05f_group15_group2}>
              <Svg style={styles.main_tCh3c0aa05f_group15_group2_iconMaterialAccessTime} preserveAspectRatio="none" viewBox="3 3 24 24" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 14.98800086975098 3 C 8.36400032043457 3 3 8.376001358032227 3 15 C 3 21.62400054931641 8.36400032043457 27.00000190734863 14.98800086975098 27.00000190734863 C 21.62400245666504 27.00000190734863 27.00000190734863 21.62400245666504 27.00000190734863 15 C 27.00000190734863 8.375999450683594 21.62400245666504 3 14.98800086975098 3 Z M 15 24.60000038146973 C 9.696001052856445 24.60000038146973 5.40000057220459 20.30400276184082 5.40000057220459 15 C 5.40000057220459 9.695999145507813 9.696001052856445 5.40000057220459 15 5.40000057220459 C 20.30400276184082 5.40000057220459 24.60000038146973 9.696001052856445 24.60000038146973 15 C 24.60000038146973 20.30400276184082 20.30400276184082 24.60000038146973 15 24.60000038146973 Z M 15.60000133514404 9.000000953674316 L 13.80000019073486 9.000000953674316 L 13.80000019073486 16.20000076293945 L 20.10000038146973 19.98000144958496 L 21.00000190734863 18.50400161743164 L 15.60000133514404 15.30000019073486 L 15.60000133514404 9.000000953674316 Z" /></Svg>
              <Text style={styles.main_tCh3c0aa05f_group15_group2_thiGian}>Thời gian</Text>
            </View>
            <Text style={styles.main_tCh3c0aa05f_group15_x9f45184b}>:</Text>
            <View style={styles.main_tCh3c0aa05f_group15_group7}>
              <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0}>
                <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_rectangle14613f364951}></View>
                <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_path3616a19af3} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_upArrowSmallaeee9866_rectangle1466c5ca2772}></View>
                </View>
                <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_path36285acddc} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group7_group31da10ff0_downArrowSmall6076289e_rectangle1467420d5d2d}></View>
                </View>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group7_x07}>07</Text>
            </View>
            <View style={styles.main_tCh3c0aa05f_group15_group6}>
              <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081}>
                <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_rectangle1462849d287b}></View>
                <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7_path368c6742fa} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_upArrowSmall718025b7_rectangle1466f965c57f}></View>
                </View>
                <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5_path36169828bb} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group6_group41f437081_downArrowSmall961a7bc5_rectangle14670b498141}></View>
                </View>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group6_x00ba94441d}>00</Text>
            </View>
            <View style={styles.main_tCh3c0aa05f_group15_group5}>
              <View style={styles.main_tCh3c0aa05f_group15_group5_rectangle14634dd2b9b8}></View>
              <Text style={styles.main_tCh3c0aa05f_group15_group5_am70a769fb}>AM</Text>
              <Text style={styles.main_tCh3c0aa05f_group15_group5_pme55ffa0b}>PM</Text>
            </View>
            <Text style={styles.main_tCh3c0aa05f_group15_t}>Từ</Text>
            <Text style={styles.main_tCh3c0aa05f_group15_x83733205}>:</Text>
            <View style={styles.main_tCh3c0aa05f_group15_group8}>
              <View style={styles.main_tCh3c0aa05f_group15_group8_group3}>
                <View style={styles.main_tCh3c0aa05f_group15_group8_group3_rectangle1461}></View>
                <View style={styles.main_tCh3c0aa05f_group15_group8_group3_upArrowSmall5e30bcb4}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group8_group3_upArrowSmall5e30bcb4_path364bcb30d1} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group8_group3_upArrowSmall5e30bcb4_rectangle1466b5ae663c}></View>
                </View>
                <View style={styles.main_tCh3c0aa05f_group15_group8_group3_downArrowSmall65105bad}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group8_group3_downArrowSmall65105bad_path36e499b374} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group8_group3_downArrowSmall65105bad_rectangle1467372bffc8}></View>
                </View>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group8_x08}>08</Text>
            </View>
            <View style={styles.main_tCh3c0aa05f_group15_group9}>
              <View style={styles.main_tCh3c0aa05f_group15_group9_group4}>
                <View style={styles.main_tCh3c0aa05f_group15_group9_group4_rectangle1462}></View>
                <View style={styles.main_tCh3c0aa05f_group15_group9_group4_upArrowSmall}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group9_group4_upArrowSmall_path3692134fa2} preserveAspectRatio="none" viewBox="0 0 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4.699999809265137 6.100000381469727 L 0 1.400000095367432 L 1.400000095367432 0 L 4.699999809265137 3.300000190734863 L 8 0 L 9.399999618530273 1.400000095367432 L 4.699999809265137 6.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group9_group4_upArrowSmall_rectangle1466}></View>
                </View>
                <View style={styles.main_tCh3c0aa05f_group15_group9_group4_downArrowSmall}>
                  <Svg style={styles.main_tCh3c0aa05f_group15_group9_group4_downArrowSmall_path36} preserveAspectRatio="none" viewBox="2 2 9.4000244140625 6.0999755859375" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 6.699999809265137 8.100000381469727 L 2 3.400000095367432 L 3.400000095367432 2 L 6.699999809265137 5.300000190734863 L 10 2 L 11.39999961853027 3.400000095367432 L 6.699999809265137 8.100000381469727 Z" /></Svg>
                  <View style={styles.main_tCh3c0aa05f_group15_group9_group4_downArrowSmall_rectangle1467}></View>
                </View>
              </View>
              <Text style={styles.main_tCh3c0aa05f_group15_group9_x00}>00</Text>
            </View>
            <View style={styles.main_tCh3c0aa05f_group15_group10}>
              <View style={styles.main_tCh3c0aa05f_group15_group10_rectangle1463}></View>
              <Text style={styles.main_tCh3c0aa05f_group15_group10_am}>AM</Text>
              <Text style={styles.main_tCh3c0aa05f_group15_group10_pm}>PM</Text>
            </View>
            <Text style={styles.main_tCh3c0aa05f_group15_n}>Đến</Text>
          </View>
          <View style={styles.main_tCh3c0aa05f_group17}>
            <View style={styles.main_tCh3c0aa05f_group17_date}>
              <Text style={styles.main_tCh3c0aa05f_group17_date_ngay}>Ngày</Text>
              <View style={styles.main_tCh3c0aa05f_group17_date_calendar}>
                <View style={styles.main_tCh3c0aa05f_group17_date_calendar_rectangle557}></View>
                <Svg style={styles.main_tCh3c0aa05f_group17_date_calendar_path149} preserveAspectRatio="none" viewBox="0 0 20 23.66668701171875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 2.5 7.395839691162109 L 2.5 20.70835113525391 L 17.5 20.70835113525391 L 17.5 7.395839691162109 L 2.5 7.395839691162109 Z M 16.25 2.958335876464844 L 18.75 2.958335876464844 C 19.5 2.958335876464844 20 3.55000376701355 20 4.437503814697266 L 20 22.18751907348633 C 20 23.07502174377441 19.5 23.66668701171875 18.75 23.66668701171875 L 1.25 23.66668701171875 C 0.5 23.66668701171875 0 23.07502174377441 0 22.18751907348633 L 0 4.437503814697266 C 0 3.55000376701355 0.5000000596046448 2.958335876464844 1.25 2.958335876464844 L 3.75 2.958335876464844 L 3.75 1.479167938232422 C 3.75 0.5916671752929688 4.25 0 5 0 C 5.75 0 6.25 0.5916672348976135 6.25 1.479167938232422 L 6.25 2.958335876464844 L 13.75 2.958335876464844 L 13.75 1.479167938232422 C 13.75 0.5916671752929688 14.25 0 15 0 C 15.75000095367432 0 16.25 0.5916672348976135 16.25 1.479167938232422 L 16.25 2.958335876464844 Z M 15 17.75001525878906 L 12.5 17.75001525878906 L 12.5 14.79167938232422 L 15 14.79167938232422 L 15 17.75001525878906 Z M 11.25 17.75001525878906 L 8.75 17.75001525878906 L 8.75 14.79167938232422 L 11.25 14.79167938232422 L 11.25 17.75001525878906 Z M 15 13.3125114440918 L 12.5 13.3125114440918 L 12.5 10.35417556762695 L 15 10.35417556762695 L 15 13.3125114440918 Z M 11.25 13.3125114440918 L 8.75 13.3125114440918 L 8.75 10.35417556762695 L 11.25 10.35417556762695 L 11.25 13.3125114440918 Z M 7.5 17.75001525878906 L 5 17.75001525878906 L 5 14.79167938232422 L 7.5 14.79167938232422 L 7.5 17.75001525878906 Z" /></Svg>
              </View>
            </View>
            <View style={styles.main_tCh3c0aa05f_group17_group11}>
              <Svg style={styles.main_tCh3c0aa05f_group17_group11_path648} preserveAspectRatio="none" viewBox="0 0 77 32" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4 0 L 73 0 C 75.20913696289063 0 77 1.790860891342163 77 4 L 77 28 C 77 30.20913887023926 75.20913696289063 32 73 32 L 4 32 C 1.790860891342163 32 0 30.20913887023926 0 28 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z" /></Svg>
              <View style={styles.main_tCh3c0aa05f_group17_group11_homNay}><Text style={{ "marginTop": -0.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 13, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 14.3 }}>Hôm nay</Text></View>
            </View>
            <View style={styles.main_tCh3c0aa05f_group17_x65a376b3}>
              <Svg style={styles.main_tCh3c0aa05f_group17_x65a376b3_path644134eaa72} preserveAspectRatio="none" viewBox="-1.5 -1.5 32 32" fill="transparent"><SvgPath d="M 14.5 0 C 22.50812911987305 0 29 6.49187183380127 29 14.5 C 29 22.50812911987305 22.50812911987305 29 14.5 29 C 6.49187183380127 29 0 22.50812911987305 0 14.5 C 0 6.49187183380127 6.49187183380127 0 14.5 0 Z" /></Svg>
              <Svg style={styles.main_tCh3c0aa05f_group17_x65a376b3_union19966745e} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 7.000112533569336 16 L 7.000112533569336 8.999887466430664 L 0 8.999887466430664 L 0 7.000112533569336 L 7.000112533569336 7.000112533569336 L 7.000112533569336 0 L 8.999887466430664 0 L 8.999887466430664 7.000112533569336 L 16 7.000112533569336 L 16 8.999887466430664 L 8.999887466430664 8.999887466430664 L 8.999887466430664 16 L 7.000112533569336 16 Z" /></Svg>
            </View>
            <View style={styles.main_tCh3c0aa05f_group17_ngayMai3510066a}>
              <View style={styles.main_tCh3c0aa05f_group17_ngayMai3510066a_rectangle1459f62ba752}></View>
              <View style={styles.main_tCh3c0aa05f_group17_ngayMai3510066a_ngayMai}><Text style={{ "marginTop": -0.5, "color": "rgba(191, 151, 104, 1)", "fontSize": 13, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 14.3 }}>Ngày mai</Text></View>
            </View>
          </View>
          <View style={styles.main_tCh3c0aa05f_sLng6503c4b5}>
            <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_group12}>
              <Svg style={styles.main_tCh3c0aa05f_sLng6503c4b5_group12_path645} preserveAspectRatio="none" viewBox="0 0 77 32" fill="rgba(191, 151, 104, 1)"><SvgPath d="M 4 0 L 73 0 C 75.20913696289063 0 77 1.790860891342163 77 4 L 77 28 C 77 30.20913887023926 75.20913696289063 32 73 32 L 4 32 C 1.790860891342163 32 0 30.20913887023926 0 28 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z" /></Svg>
              <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_group12_x1Ch}><Text style={{ "marginTop": -0.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 13, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 14.3 }}>1 Chỗ</Text></View>
            </View>
            <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_x2Chaba63bd6}>
              <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_x2Chaba63bd6_rectangle1459}></View>
              <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_x2Chaba63bd6_x2Ch}><Text style={{ "marginTop": -0.5, "color": "rgba(191, 151, 104, 1)", "fontSize": 13, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 14.3 }}>2 Chỗ</Text></View>
            </View>
            <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_x3Ch44fd3e7b}>
              <Svg style={styles.main_tCh3c0aa05f_sLng6503c4b5_x3Ch44fd3e7b_path646} preserveAspectRatio="none" viewBox="-1.5 -1.5 80 35" fill="transparent"><SvgPath d="M 4 0 L 73 0 C 75.20913696289063 0 77 1.790860891342163 77 4 L 77 28 C 77 30.20913887023926 75.20913696289063 32 73 32 L 4 32 C 1.790860891342163 32 0 30.20913887023926 0 28 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z" /></Svg>
              <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_x3Ch44fd3e7b_x3Ch}><Text style={{ "marginTop": -0.5, "color": "rgba(191, 151, 104, 1)", "fontSize": 13, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 14.3 }}>3 Chỗ</Text></View>
            </View>
            <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_xf1140690}>
              <Svg style={styles.main_tCh3c0aa05f_sLng6503c4b5_xf1140690_path644} preserveAspectRatio="none" viewBox="-1.5 -1.5 32 32" fill="transparent"><SvgPath d="M 14.5 0 C 22.50812911987305 0 29 6.49187183380127 29 14.5 C 29 22.50812911987305 22.50812911987305 29 14.5 29 C 6.49187183380127 29 0 22.50812911987305 0 14.5 C 0 6.49187183380127 6.49187183380127 0 14.5 0 Z" /></Svg>
              <Svg style={styles.main_tCh3c0aa05f_sLng6503c4b5_xf1140690_union14a434d17} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 7.000112533569336 16 L 7.000112533569336 8.999887466430664 L 0 8.999887466430664 L 0 7.000112533569336 L 7.000112533569336 7.000112533569336 L 7.000112533569336 0 L 8.999887466430664 0 L 8.999887466430664 7.000112533569336 L 16 7.000112533569336 L 16 8.999887466430664 L 8.999887466430664 8.999887466430664 L 8.999887466430664 16 L 7.000112533569336 16 Z" /></Svg>
            </View>
            <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_group16}>
              <View style={styles.main_tCh3c0aa05f_sLng6503c4b5_group16_component1b935fc7b}>
                <Svg style={styles.main_tCh3c0aa05f_sLng6503c4b5_group16_component1b935fc7b_union1} preserveAspectRatio="none" viewBox="0 0 16.00018310546875 16.000213623046875" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 0 16.00021362304688 L 0 14.00042724609375 C 0 11.7999267578125 3.600000143051147 9.999908447265625 8.000100135803223 9.999908447265625 C 12.40019989013672 9.999908447265625 16.00020027160645 11.7999267578125 16.00020027160645 14.00042724609375 L 16.00020027160645 16.00021362304688 L 0 16.00021362304688 Z M 3.999600172042847 4.000518798828125 C 3.999600172042847 1.791015625 5.790600299835205 0 8.000100135803223 0 C 10.20870018005371 0 11.99970054626465 1.791015625 11.99970054626465 4.000518798828125 C 11.99970054626465 6.2091064453125 10.20870018005371 8.0001220703125 8.000100135803223 8.0001220703125 C 5.790600299835205 8.0001220703125 3.999600172042847 6.2091064453125 3.999600172042847 4.000518798828125 Z" /></Svg>
              </View>
              <Text style={styles.main_tCh3c0aa05f_sLng6503c4b5_group16_sLng}>Số lượng</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.main_group19_continue}>
          <Svg style={styles.main_group19_continue_path643} preserveAspectRatio="none" viewBox="0 0 129 31" fill="rgba(212, 174, 57, 1)"><SvgPath d="M 1.57798171043396 0 L 127.4220199584961 0 C 128.2935028076172 0 129 1.15659761428833 129 2.583333253860474 L 129 28.41666603088379 C 129 29.84340286254883 128.2935028076172 31 127.4220199584961 31 L 1.57798171043396 31 C 0.7064864039421082 31 0 29.84340286254883 0 28.41666603088379 L 0 2.583333253860474 C 0 1.15659761428833 0.7064864039421082 0 1.57798171043396 0 Z" /></Svg>
          <View style={styles.main_group19_continue_tChf4c11d26}><Text style={{ "marginTop": -1.5, "color": "rgba(255, 255, 255, 1)", "fontSize": 15, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 16.5 }}>ĐẶT CHỖ</Text></View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default DetailShopScreen; const styles = StyleSheet.create({
  "main": {
    "backgroundColor": "rgba(220, 220, 220, 1)",
    "width": "100%",
    "height": 851,
  },
  "main_tCh3c0aa05f": {
    "width": 352,
    "height": 573.8,
    alignSelf: "center"
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

    "position": "absolute",
    "width": 323,
    "height": 235,
    "left": 14.5,
    "top": 209.19
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
    "width": 55,
    "height": 15,
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
    "top": 29
  },
  "main_tCh3c0aa05f_group15_group5_rectangle14634dd2b9b8": {

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
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group5_am70a769fb": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 14,
    "top": 17
  },
  "main_tCh3c0aa05f_group15_group5_pme55ffa0b": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 20,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 14,
    "top": 42
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
    "top": 145
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
    "top": 0
  },
  "main_tCh3c0aa05f_group15_group10_am": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 20,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 14,
    "top": 17
  },
  "main_tCh3c0aa05f_group15_group10_pm": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(176, 177, 181, 1)",
    "fontSize": 20,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 14,
    "top": 42
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

    "position": "absolute",
    "width": 219,
    "height": 65,
    "left": 15,
    "top": 120.86
  },
  "main_tCh3c0aa05f_group17_date": {

    "position": "absolute",
    "width": 57,
    "height": 24,
    "left": 0,
    "top": 0
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
  "main_tCh3c0aa05f_group17_group11": {

    "position": "absolute",
    "width": 77,
    "height": 32,
    "left": 0,
    "top": 33
  },
  "main_tCh3c0aa05f_group17_group11_path648": {

    "position": "absolute", "width": 77,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_group17_group11_homNay": {

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

    "position": "absolute",
    "width": 29,
    "height": 29,
    "left": 190,
    "top": 35
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
  "main_tCh3c0aa05f_group17_ngayMai3510066a": {

    "position": "absolute",
    "width": 77,
    "height": 32,
    "left": 95,
    "top": 33
  },
  "main_tCh3c0aa05f_group17_ngayMai3510066a_rectangle1459f62ba752": {

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
  "main_tCh3c0aa05f_group17_ngayMai3510066a_ngayMai": {

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

    "position": "absolute",
    "width": 319,
    "height": 59.5,
    "left": 15,
    "top": 41.5
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group12": {

    "position": "absolute",
    "width": 77,
    "height": 32,
    "left": 5,
    "top": 27
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group12_path645": {

    "position": "absolute", "width": 77,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group12_x1Ch": {

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
  "main_tCh3c0aa05f_sLng6503c4b5_x2Chaba63bd6": {

    "position": "absolute",
    "width": 77,
    "height": 32,
    "left": 100,
    "top": 27
  },
  "main_tCh3c0aa05f_sLng6503c4b5_x2Chaba63bd6_rectangle1459": {

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
  "main_tCh3c0aa05f_sLng6503c4b5_x2Chaba63bd6_x2Ch": {

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
  "main_tCh3c0aa05f_sLng6503c4b5_x3Ch44fd3e7b": {

    "position": "absolute",
    "width": 77,
    "height": 32,
    "left": 195,
    "top": 27.5
  },
  "main_tCh3c0aa05f_sLng6503c4b5_x3Ch44fd3e7b_path646": {

    "position": "absolute", "width": 77,
    "height": 32,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_sLng6503c4b5_x3Ch44fd3e7b_x3Ch": {

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
  "main_tCh3c0aa05f_sLng6503c4b5_xf1140690": {

    "position": "absolute",
    "width": 29,
    "height": 29,
    "left": 290,
    "top": 29
  },
  "main_tCh3c0aa05f_sLng6503c4b5_xf1140690_path644": {

    "position": "absolute", "width": 29,
    "height": 29,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_sLng6503c4b5_xf1140690_union14a434d17": {

    "position": "absolute", "width": 16,
    "height": 16,
    "left": 7,
    "top": 7
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group16": {

    "position": "absolute",
    "width": 75,
    "height": 17,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group16_component1b935fc7b": {

    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group16_component1b935fc7b_union1": {

    "position": "absolute", "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "main_tCh3c0aa05f_sLng6503c4b5_group16_sLng": {

    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "700",

    "fontFamily": "Roboto",
    "left": 23,
    "top": 2
  },
  "main_tCh3c0aa05f_thongTinTChTxt_thongTinTCh": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 13,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    margin: 10,
  },
  "main_tCh3c0aa05f_thongTinTChTxt_path81206a64e": {

    "position": "absolute", "width": 280.71,
    "height": 4,
    "left": -2,
    "top": 14
  },
  "main_group19": {

    "width": "80%",
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
    "fontSize": 7,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "main_group19_giMCa07h0021h00Th2ChNht": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 7,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "main_group19_moTKhongGianKtHpMayLnhVaNgoaiTriRiengTThichHpLamVicVaCSach": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 7,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
  },
  "main_group19_inThoi033456789": {

    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 7,
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
    "right": 15,
    "top": 200
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
    "fontSize": 13,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    margin: 10,
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
    "lineHeight": 16.5,
    "left": 34,
    "top": 9
  },
  "main_group38": {

    "width": "100%",
    "height": 75.11,
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
    "width": 393,
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "main_group38_navigationBar_component1": {

    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 19,
    "top": 39
  },
  "main_group38_navigationBar_component1_path10": {

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
    "left": 166,
    "top": 37
  }
});