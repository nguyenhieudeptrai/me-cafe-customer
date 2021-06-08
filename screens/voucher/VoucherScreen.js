import React, { Component } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';

const VoucherScreen = () => {
  return (
    <View style={styles.voucher}>
      <Svg style={styles.voucher_ellipse2} preserveAspectRatio="none" viewBox="0 0 302 253" fill="transparent"><SvgPath d="M 151 0 C 234.3949890136719 0 302 56.63597869873047 302 126.5 C 302 196.364013671875 234.3949890136719 253 151 253 C 67.60500335693359 253 0 196.364013671875 0 126.5 C 0 56.63597869873047 67.60500335693359 0 151 0 Z" /></Svg>
      <Svg style={styles.voucher_line5} preserveAspectRatio="none" viewBox="-0.00146484375 -0.5 341.0029296875 2" fill="transparent"><SvgPath d="M 0 1 L 341 0" /></Svg>
      <Text style={styles.voucher_uAiDanhChoBn}>Ưu đãi dành cho bạn</Text>
      <View style={styles.voucher_group38}>
        <View style={styles.voucher_group38_navigationBar}>
          <Svg style={styles.voucher_group38_navigationBar_path647} preserveAspectRatio="none" viewBox="0 0 393 75.1141357421875" fill="rgba(240, 211, 122, 1)"><SvgPath d="M 0 0 L 393 0 L 393 75.1141357421875 L 0 75.1141357421875 L 0 0 Z" /></Svg>
          <View style={styles.voucher_group38_navigationBar_component4}>
            <Svg style={styles.voucher_group38_navigationBar_component4_path10} preserveAspectRatio="none" viewBox="0 0 16 16" fill="rgba(83, 71, 65, 1)"><SvgPath d="M 8 0 L 6.545454978942871 1.454545497894287 L 12.05194854736328 6.961039066314697 L 0 6.961039066314697 L 0 9.038961410522461 L 12.05194854736328 9.038961410522461 L 6.545454978942871 14.54545497894287 L 8 16 L 16 8 L 8 0 Z" /></Svg>
          </View>
          <Text style={styles.voucher_group38_navigationBar_thThanhVienUAi}>THẺ THÀNH VIÊN/ ƯU ĐÃI</Text>
        </View>
      </View>
      <View style={styles.voucher_rectangle1477}></View>
      <View style={styles.voucher_rectangle1476}></View>
      <Text style={styles.voucher_miGiaoDchTChTrenAppThanhCongBnSCTngImThngBnCoThDungImILyRtNhiuUAiHpDnimKhongCoGiaTrQuyIThanhTinMt}>Mỗi giao dịch đặt chỗ trên app thành công bạn sẽ được tặng điểm thưởng.
      Bạn có thể dùng điểm đổi lấy rất nhiều ưu đãi hấp dẫn.
Điểm không có giá trị quy đổi thành tiền mặt.</Text>
      <View style={styles.voucher_group118}>
        <ReactImage source={require('./assets/logoPng.png')} style={styles.voucher_group118_logoPng} />
        <ReactImage source={require('./assets/asset1.png')} style={styles.voucher_group118_asset1} />
      </View>
      <View style={styles.voucher_nguynVnA}><Text style={{ "marginTop": -5, "color": "rgba(255, 255, 255, 1)", "fontSize": 20, "fontWeight": "700", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 22 }}>NGUYỄN VĂN A</Text></View>
      <Text style={styles.voucher_x30Im}>30 điểm</Text>
      <View style={styles.voucher_group119}>
        <View style={styles.voucher_group119_scroll}>
          <View style={styles.voucher_group119_scroll_rectangle555}></View>
          <View style={styles.voucher_group119_scroll_rectangle556}></View>
          <Svg style={styles.voucher_group119_scroll_ellipse155} preserveAspectRatio="none" viewBox="0 0 2 2" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1 0 C 1.552284717559814 0 2 0.4477152824401855 2 1 C 2 1.552284717559814 1.552284717559814 2 1 2 C 0.4477152824401855 2 0 1.552284717559814 0 1 C 0 0.4477152824401855 0.4477152824401855 0 1 0 Z" /></Svg>
          <Svg style={styles.voucher_group119_scroll_ellipse236} preserveAspectRatio="none" viewBox="0 0 2 2" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 1 0 C 1.552284717559814 0 2 0.4477152824401855 2 1 C 2 1.552284717559814 1.552284717559814 2 1 2 C 0.4477152824401855 2 0 1.552284717559814 0 1 C 0 0.4477152824401855 0.4477152824401855 0 1 0 Z" /></Svg>
        </View>
        <Text style={styles.voucher_group119_ng}>Đồng</Text>
        <Text style={styles.voucher_group119_kimCng}>Kim cương</Text>
        <Text style={styles.voucher_group119_vang}>Vàng</Text>
        <ReactImage source={require('./assets/bean.png')} style={styles.voucher_group119_bean} />
      </View>
      <View style={styles.voucher_hngNg}><Text style={{ "marginTop": -1, "color": "rgba(255, 255, 255, 1)", "fontSize": 12, "fontWeight": "400", "fontStyle": "normal", "fontFamily": "Roboto", "textAlign": "center", "lineHeight": 13.200000000000001 }}>Hạng Đồng</Text></View>
      <View style={styles.voucher_group121}>
        <View style={styles.voucher_group121_rectangle1478}></View>
        <View style={styles.voucher_group121_rectangle1479}></View>
        <Svg style={styles.voucher_group121_ellipse237} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse238} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse239} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse240} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse241} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse242} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse243} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse244} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse245} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse246} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse247} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse248} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse249} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse250} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse251} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse252} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse253} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
        <Svg style={styles.voucher_group121_ellipse254} preserveAspectRatio="none" viewBox="0 0 3 3" fill="rgba(219, 219, 219, 1)"><SvgPath d="M 1.5 0 C 2.328427076339722 0 3 0.6715729236602783 3 1.5 C 3 2.328427076339722 2.328427076339722 3 1.5 3 C 0.6715729236602783 3 0 2.328427076339722 0 1.5 C 0 0.6715729236602783 0.6715729236602783 0 1.5 0 Z" /></Svg>
      </View>
      <View style={styles.voucher_group143}>
        <View style={styles.voucher_group143_group126}>
          <View style={styles.voucher_group143_group126_group87b6e89e62}>
            <View style={styles.voucher_group143_group126_group87b6e89e62_group86f20f57fc}>
              <View style={styles.voucher_group143_group126_group87b6e89e62_group86f20f57fc_rectangle32a5676426}></View>
              <View style={styles.voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120}>
                <View style={styles.voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144}>
                  <Text style={styles.voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144_uAi20ToanMenu}>Ưu đãi 20% toàn menu</Text>
                  <Text style={styles.voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144_htHn30072021d22f9f3b}>Hết hạn: 30/07/2021</Text>
                  <Text style={styles.voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144_aChBiCoffeeNgTrungSnQ07}>Địa chỉ: Bụi Coffee, Đường Trung Sơn, Q.07</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.voucher_group143_group126_group12559072dc7}>
            <View style={styles.voucher_group143_group126_group12559072dc7_rectangle1480660e865b}></View>
            <View style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f}>
              <View style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59}>
                <View style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980}>
                  <View style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980_rectangle148179fbdb4a}></View>
                  <View style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980_rectangle148292244152}></View>
                  <View style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980_rectangle148361bd58bd}></View>
                </View>
                <Text style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_delivery}>Delivery</Text>
              </View>
              <Text style={styles.voucher_group143_group126_group12559072dc7_group1248e272b4f_x20}>20%</Text>
            </View>
          </View>
        </View>
        <View style={styles.voucher_group143_group130}>
          <View style={styles.voucher_group143_group130_group147}>
            <View style={styles.voucher_group143_group130_group147_group127}>
              <View style={styles.voucher_group143_group130_group147_group127_group8794872b57}>
                <View style={styles.voucher_group143_group130_group147_group127_group8794872b57_group863f6262a2}>
                  <View style={styles.voucher_group143_group130_group147_group127_group8794872b57_group863f6262a2_rectangle32775e448d}></View>
                </View>
              </View>
              <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6}>
                <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6_rectangle14806a0ef2a7}></View>
                <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7}>
                  <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e}>
                    <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff}>
                      <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle148165d1791b}></View>
                      <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle1482af7a277f}></View>
                      <View style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle14839c367ca7}></View>
                    </View>
                    <Text style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_xUng}>Đồ uống</Text>
                  </View>
                  <Text style={styles.voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_x50k}>50K</Text>
                </View>
              </View>
            </View>
            <View style={styles.voucher_group143_group130_group147_group146}>
              <Text style={styles.voucher_group143_group130_group147_group146_uAi50kToanMenu}>Ưu đãi 50K toàn menu</Text>
              <Text style={styles.voucher_group143_group130_group147_group146_htHn30072021380a9479}>Hết hạn: 30/07/2021</Text>
              <Text style={styles.voucher_group143_group130_group147_group146_aChFarmersGardenNgVnBiQthC}>Địa chỉ: Farmer's Garden, Đặng Văn Bi, Q.Thủ Đức</Text>
            </View>
          </View>
        </View>
        <View style={styles.voucher_group143_group150}>
          <View style={styles.voucher_group143_group150_group132}>
            <View style={styles.voucher_group143_group150_group132_group128}>
              <View style={styles.voucher_group143_group150_group132_group128_group87}>
                <View style={styles.voucher_group143_group150_group132_group128_group87_group86}>
                  <View style={styles.voucher_group143_group150_group132_group128_group87_group86_rectangle32}></View>
                </View>
              </View>
              <View style={styles.voucher_group143_group150_group132_group128_group125}>
                <View style={styles.voucher_group143_group150_group132_group128_group125_rectangle1480}></View>
                <View style={styles.voucher_group143_group150_group132_group128_group125_group124}>
                  <View style={styles.voucher_group143_group150_group132_group128_group125_group124_group123}>
                    <View style={styles.voucher_group143_group150_group132_group128_group125_group124_group123_group122}>
                      <View style={styles.voucher_group143_group150_group132_group128_group125_group124_group123_group122_rectangle1481}></View>
                      <View style={styles.voucher_group143_group150_group132_group128_group125_group124_group123_group122_rectangle1482}></View>
                      <View style={styles.voucher_group143_group150_group132_group128_group125_group124_group123_group122_rectangle1483}></View>
                    </View>
                    <Text style={styles.voucher_group143_group150_group132_group128_group125_group124_group123_combo}>Combo</Text>
                  </View>
                  <Svg style={styles.voucher_group143_group150_group132_group128_group125_group124_ellipse255} preserveAspectRatio="none" viewBox="0 0 58 17" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 29 0 C 45.01625823974609 0 58 3.805579662322998 58 8.5 C 58 13.19441986083984 45.01625823974609 17 29 17 C 12.98374366760254 17 0 13.19441986083984 0 8.5 C 0 3.805579662322998 12.98374366760254 0 29 0 Z" /></Svg>
                  <ReactImage source={require('./assets/coffeeMockup.png')} style={styles.voucher_group143_group150_group132_group128_group125_group124_coffeeMockup} />
                  <Text style={styles.voucher_group143_group150_group132_group128_group125_group124_x1Ly}>1 Ly</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.voucher_group143_group150_group149}>
            <Text style={styles.voucher_group143_group150_group149_uAi1LyCaPheSa}>Ưu đãi 1 Ly Cà phê sữa</Text>
            <Text style={styles.voucher_group143_group150_group149_htHn30072021}>Hết hạn: 30/07/2021</Text>
            <Text style={styles.voucher_group143_group150_group149_aChOngBuCoffeeLeVnVitQ9}>Địa chỉ: Ông Bầu Coffee, Lê Văn Việt, Q.9</Text>
          </View>
        </View>
      </View>
      <View style={styles.voucher_menu}>
        <View style={styles.voucher_menu_group57}>
          <Svg style={styles.voucher_menu_group57_path5} preserveAspectRatio="none" viewBox="0 0 393 79" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 16 0 L 377 0 C 385.8365478515625 0 393 7.160732746124268 393 15.99394512176514 L 393 78.73075103759766 L 0 79 L 0 15.99394512176514 C 0 7.160732746124268 7.163443565368652 0 16 0 Z" /></Svg>
        </View>
        <View style={styles.voucher_menu_group6}>
          <View style={styles.voucher_menu_group6_group14}>
            <ReactImage source={require('./assets/tabHome.png')} style={styles.voucher_menu_group6_group14_tabHome} />
            <Text style={styles.voucher_menu_group6_group14_trangCh}>Trang chủ</Text>
          </View>
        </View>
        <View style={styles.voucher_menu_group7}>
          <View style={styles.voucher_menu_group7_group13}>
            <ReactImage source={require('./assets/boking.png')} style={styles.voucher_menu_group7_group13_boking} />
            <Text style={styles.voucher_menu_group7_group13_tCh}>Đặt chỗ</Text>
          </View>
        </View>
        <View style={styles.voucher_menu_group8}>
          <View style={styles.voucher_menu_group8_group12}>
            <ReactImage source={require('./assets/tab3.png')} style={styles.voucher_menu_group8_group12_tab3} />
            <Text style={styles.voucher_menu_group8_group12_tichIm}>Tích điểm</Text>
          </View>
        </View>
        <View style={styles.voucher_menu_group9}>
          <View style={styles.voucher_menu_group9_group11}>
            <ReactImage source={require('./assets/setting2.png')} style={styles.voucher_menu_group9_group11_setting2} />
            <Text style={styles.voucher_menu_group9_group11_caiT}>Cài đặt</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
export default VoucherScreen;

Voucher.propTypes = {

}

Voucher.defaultProps = {

}


const styles = StyleSheet.create({
  "voucher": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(219, 219, 219, 1)",
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "voucher_ellipse2": {
    "opacity": 1,
    "position": "relative",
    "width": 302,
    "height": 253,
    "left": 11,
    "top": 110
  },
  "voucher_line5": {
    "opacity": 1,
    "position": "absolute",
    "width": 341,
    "height": 2,
    "left": 34,
    "top": 405.5
  },
  "voucher_uAiDanhChoBn": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(112, 112, 112, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 260,
    "height": 32,
    "left": 30,
    "top": 370
  },
  "voucher_group38": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "voucher_group38_navigationBar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 75.11,
    "left": 0,
    "top": 0
  },
  "voucher_group38_navigationBar_path647": {
    "opacity": 1,
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
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
  "voucher_group38_navigationBar_component4": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 16,
    "height": 16,
    "left": 19,
    "top": 39
  },
  "voucher_group38_navigationBar_component4_path10": {
    "opacity": 1,
    "position": "absolute",
    "width": 16,
    "height": 16,
    "left": 0,
    "top": 0
  },
  "voucher_group38_navigationBar_thThanhVienUAi": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(83, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 190,
    "height": 19,
    "left": 108,
    "top": 37
  },
  "voucher_rectangle1477": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 298,
    "height": 246,
    "left": 48,
    "top": 110
  },
  "voucher_rectangle1476": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(212, 174, 57, 1)",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "width": 298,
    "height": 110,
    "left": 48,
    "top": 128
  },
  "voucher_miGiaoDchTChTrenAppThanhCongBnSCTngImThngBnCoThDungImILyRtNhiuUAiHpDnimKhongCoGiaTrQuyIThanhTinMt": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 261,
    "height": 72,
    "left": 66,
    "top": 295
  },
  "voucher_group118": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 95,
    "height": 67,
    "left": 149,
    "top": 104
  },
  "voucher_group118_logoPng": {
    "opacity": 1,
    "position": "absolute",
    "width": 95,
    "height": 67,
    "left": 0,
    "top": 0
  },
  "voucher_group118_asset1": {
    "opacity": 1,
    "position": "absolute",
    "width": 42,
    "height": 13,
    "left": 48,
    "top": 43
  },
  "voucher_nguynVnA": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 20,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 22,
    "width": 298,
    "height": 22,
    "left": 48,
    "top": 178
  },
  "voucher_x30Im": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 10,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 296,
    "height": 22,
    "left": 49,
    "top": 217.5
  },
  "voucher_group119": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 291,
    "height": 27,
    "left": 49,
    "top": 251
  },
  "voucher_group119_scroll": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 276,
    "height": 4,
    "left": 10,
    "top": 5
  },
  "voucher_group119_scroll_rectangle555": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(240, 211, 122, 1)",
    "width": 276,
    "height": 4,
    "left": 0,
    "top": 0
  },
  "voucher_group119_scroll_rectangle556": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(83, 71, 65, 1)",
    "width": 49,
    "height": 4,
    "left": 0,
    "top": 0
  },
  "voucher_group119_scroll_ellipse155": {
    "opacity": 1,
    "position": "absolute",
    "width": 2,
    "height": 2,
    "left": 273,
    "top": 1
  },
  "voucher_group119_scroll_ellipse236": {
    "opacity": 1,
    "position": "absolute",
    "width": 2,
    "height": 2,
    "left": 1,
    "top": 1
  },
  "voucher_group119_ng": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 41,
    "height": 13,
    "left": 0,
    "top": 15.5
  },
  "voucher_group119_kimCng": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 53,
    "height": 13,
    "left": 238,
    "top": 15.5
  },
  "voucher_group119_vang": {
    "opacity": 0.7,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 2, 2, 1)",
    "fontSize": 9,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 10,
    "width": 41,
    "height": 13,
    "left": 119,
    "top": 15.5
  },
  "voucher_group119_bean": {
    "opacity": 1,
    "position": "absolute",
    "width": 14,
    "height": 14,
    "left": 51,
    "top": 0
  },
  "voucher_hngNg": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "lineHeight": 13.2,
    "width": 296,
    "height": 22,
    "left": 49,
    "top": 202
  },
  "voucher_group121": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 7,
    "height": 98,
    "left": 129,
    "top": 430
  },
  "voucher_group121_rectangle1478": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(219, 219, 219, 1)",
    "borderBottomLeftRadius": 5,
    "borderBottomRightRadius": 5,
    "width": 7,
    "height": 4,
    "left": 0,
    "top": 0
  },
  "voucher_group121_rectangle1479": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(219, 219, 219, 1)",
    "borderTopLeftRadius": 5,
    "borderTopRightRadius": 5,
    "width": 7,
    "height": 3,
    "left": 0,
    "top": 95
  },
  "voucher_group121_ellipse237": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 6
  },
  "voucher_group121_ellipse238": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 11
  },
  "voucher_group121_ellipse239": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 16
  },
  "voucher_group121_ellipse240": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 21
  },
  "voucher_group121_ellipse241": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 26
  },
  "voucher_group121_ellipse242": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 31
  },
  "voucher_group121_ellipse243": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 36
  },
  "voucher_group121_ellipse244": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 41
  },
  "voucher_group121_ellipse245": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 46
  },
  "voucher_group121_ellipse246": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 51
  },
  "voucher_group121_ellipse247": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 56
  },
  "voucher_group121_ellipse248": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 61
  },
  "voucher_group121_ellipse249": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 66
  },
  "voucher_group121_ellipse250": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 71
  },
  "voucher_group121_ellipse251": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 76
  },
  "voucher_group121_ellipse252": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 81
  },
  "voucher_group121_ellipse253": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 86
  },
  "voucher_group121_ellipse254": {
    "opacity": 1,
    "position": "absolute",
    "width": 3,
    "height": 3,
    "left": 2,
    "top": 91
  },
  "voucher_group143": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 342,
    "left": 30,
    "top": 421
  },
  "voucher_group143_group126": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group87b6e89e62": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group87b6e89e62_group86f20f57fc": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group87b6e89e62_group86f20f57fc_rectangle32a5676426": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 200,
    "height": 58,
    "left": 109,
    "top": 18
  },
  "voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",

    "width": 200,
    "height": 58,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144_uAi20ToanMenu": {
    "opacity": 0.75,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144_htHn30072021d22f9f3b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 8,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 89,
    "height": 13,
    "left": 0,
    "top": 45
  },
  "voucher_group143_group126_group87b6e89e62_group86f20f57fc_group120_group144_aChBiCoffeeNgTrungSnQ07": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 9,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 20,
    "left": 0,
    "top": 28
  },
  "voucher_group143_group126_group12559072dc7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 80,
    "height": 79,
    "left": 12,
    "top": 10
  },
  "voucher_group143_group126_group12559072dc7_rectangle1480660e865b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "width": 80,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 64,
    "left": 3,
    "top": 6
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980_rectangle148179fbdb4a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 170, 0, 1)",
    "width": 68,
    "height": 15,
    "left": 3,
    "top": 0
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980_rectangle148292244152": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 68,
    "top": 4
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_group122eaf91980_rectangle148361bd58bd": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 0,
    "top": 4
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f_group123d585ed59_delivery": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 9,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 45,
    "height": 13,
    "left": 14,
    "top": 1
  },
  "voucher_group143_group126_group12559072dc7_group1248e272b4f_x20": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 170, 0, 1)",
    "fontSize": 33,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 74,
    "height": 42,
    "left": 6,
    "top": 22
  },
  "voucher_group143_group130": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 123
  },
  "voucher_group143_group130_group147": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group8794872b57": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group8794872b57_group863f6262a2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group8794872b57_group863f6262a2_rectangle32775e448d": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.2,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group125906bcef6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 80,
    "height": 79,
    "left": 12,
    "top": 10
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_rectangle14806a0ef2a7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "width": 80,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 64,
    "left": 3,
    "top": 6
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle148165d1791b": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 170, 0, 1)",
    "width": 68,
    "height": 15,
    "left": 3,
    "top": 0
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle1482af7a277f": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 68,
    "top": 4
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_group122408a60ff_rectangle14839c367ca7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 0,
    "top": 4
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_group123558bc14e_xUng": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 9,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 44,
    "height": 13,
    "left": 14,
    "top": 1
  },
  "voucher_group143_group130_group147_group127_group125906bcef6_group124378320a7_x50k": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 170, 0, 1)",
    "fontSize": 33,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 80,
    "height": 42,
    "left": 6,
    "top": 22
  },
  "voucher_group143_group130_group147_group146": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 210,
    "height": 58,
    "left": 104,
    "top": 20
  },
  "voucher_group143_group130_group147_group146_uAi50kToanMenu": {
    "opacity": 0.75,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 18,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 24,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group130_group147_group146_htHn30072021380a9479": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 8,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 89,
    "height": 13,
    "left": 0,
    "top": 45
  },
  "voucher_group143_group130_group147_group146_aChFarmersGardenNgVnBiQthC": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 8,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 210,
    "height": 13,
    "left": 0,
    "top": 28
  },
  "voucher_group143_group150": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 245
  },
  "voucher_group143_group150_group132": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group150_group132_group128": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group87": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group87_group86": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group87_group86_rectangle32": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderTopLeftRadius": 7,
    "borderTopRightRadius": 7,
    "borderBottomLeftRadius": 7,
    "borderBottomRightRadius": 7,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.16,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 5,
    "width": 324,
    "height": 97,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group125": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 80,
    "height": 79,
    "left": 12,
    "top": 10
  },
  "voucher_group143_group150_group132_group128_group125_rectangle1480": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "width": 80,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group125_group124": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 76,
    "height": 68,
    "left": 2,
    "top": 6
  },
  "voucher_group143_group150_group132_group128_group125_group124_group123": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 15,
    "left": 1,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group125_group124_group123_group122": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 75,
    "height": 15,
    "left": 0,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group125_group124_group123_group122_rectangle1481": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 170, 0, 1)",
    "width": 68,
    "height": 15,
    "left": 3,
    "top": 0
  },
  "voucher_group143_group150_group132_group128_group125_group124_group123_group122_rectangle1482": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 68,
    "top": 4
  },
  "voucher_group143_group150_group132_group128_group125_group124_group123_group122_rectangle1483": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(248, 226, 161, 1)",
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 7,
    "height": 7,
    "left": 0,
    "top": 4
  },
  "voucher_group143_group150_group132_group128_group125_group124_group123_combo": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 8,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 32,
    "height": 13,
    "left": 21,
    "top": 1
  },
  "voucher_group143_group150_group132_group128_group125_group124_ellipse255": {
    "opacity": 1,
    "position": "absolute",
    "width": 58,
    "height": 17,
    "left": 6,
    "top": 51
  },
  "voucher_group143_group150_group132_group128_group125_group124_coffeeMockup": {
    "opacity": 1,
    "position": "absolute",
    "width": 41,
    "height": 61,
    "left": 0,
    "top": 6
  },
  "voucher_group143_group150_group132_group128_group125_group124_x1Ly": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 170, 0, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 36,
    "height": 24,
    "left": 31,
    "top": 25
  },
  "voucher_group143_group150_group149": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 210,
    "height": 58,
    "left": 106,
    "top": 20
  },
  "voucher_group143_group150_group149_uAi1LyCaPheSa": {
    "opacity": 0.74,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 17,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 200,
    "height": 26,

  },
  "voucher_group143_group150_group149_htHn30072021": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 8,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 89,
    "height": 13,
    "left": 0,
    "top": 45
  },
  "voucher_group143_group150_group149_aChOngBuCoffeeLeVnVitQ9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(16, 0, 0, 1)",
    "fontSize": 8,
    "fontWeight": "300",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "textAlign": "left",
    "width": 172,
    "height": 13,
    "left": 0,
    "top": 28
  },
  "voucher_menu": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 772
  },
  "voucher_menu_group57": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 393,
    "height": 79,
    "left": 0,
    "top": 0
  },
  "voucher_menu_group57_path5": {
    "opacity": 1,
    "position": "absolute",
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.4,
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
  "voucher_menu_group6": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 50,
    "height": 51,
    "left": 23,
    "top": 14
  },
  "voucher_menu_group6_rectangle11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.2)",

    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "voucher_menu_group6_group14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 50,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "voucher_menu_group6_group14_tabHome": {
    "opacity": 1,
    "position": "absolute",
    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "voucher_menu_group6_group14_trangCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 50,
    "height": 15,
    "left": 0,
    "top": 38
  },
  "voucher_menu_group7": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 38,
    "height": 51,
    "left": 128,
    "top": 14
  },
  "voucher_menu_group7_rectangle12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "width": 96,
    "height": 79,
    "left": -29,
    "top": -14
  },
  "voucher_menu_group7_group13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 38,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "voucher_menu_group7_group13_boking": {
    "opacity": 1,
    "position": "absolute",
    "width": 33,
    "height": 33,
    "left": 3,
    "top": 0
  },
  "voucher_menu_group7_group13_tCh": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 38,
    "height": 15,
    "left": 0,
    "top": 38
  },
  "voucher_menu_group8": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 50,
    "height": 51,
    "left": 221,
    "top": 14
  },
  "voucher_menu_group8_rectangle13": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(105, 180, 255, 0.18)",
    "width": 96,
    "height": 79,
    "left": -23,
    "top": -14
  },
  "voucher_menu_group8_group12": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 50,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "voucher_menu_group8_group12_tab3": {
    "opacity": 1,
    "position": "absolute",
    "width": 33,
    "height": 33,
    "left": 9,
    "top": 0
  },
  "voucher_menu_group8_group12_tichIm": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 50,
    "height": 13,
    "left": 0,
    "top": 38
  },
  "voucher_menu_group9": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 36,
    "height": 51,
    "left": 327,
    "top": 14
  },
  "voucher_menu_group9_rectangle14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(152, 235, 255, 0.2)",
    "width": 96,
    "height": 79,
    "left": -30,
    "top": -14
  },
  "voucher_menu_group9_group11": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "width": 36,
    "height": 51,
    "left": 0,
    "top": 0
  },
  "voucher_menu_group9_group11_setting2": {
    "opacity": 1,
    "position": "absolute",
    "width": 33,
    "height": 33,
    "left": 2,
    "top": 0
  },
  "voucher_menu_group9_group11_caiT": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 10,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "textAlign": "center",
    "width": 36,
    "height": 15,
    "left": 0,
    "top": 38
  }
});