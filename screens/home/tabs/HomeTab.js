import React, { Component, useState } from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Image as ReactImage } from 'react-native';
import Svg, { Defs, Pattern } from 'react-native-svg';
import { Path as SvgPath } from 'react-native-svg';
import { Text as SvgText } from 'react-native-svg';
import { Image as SvgImage } from 'react-native-svg';
import { Line as SvgLine } from 'react-native-svg';
import { Circle as SvgCircle } from 'react-native-svg';
import { Rect as SvgRect } from 'react-native-svg';
import { Checkbox } from 'react-native-magnus';

const data = [
  {
    id: "Ollin Premium",
    name: "Ollin Premium",
    address: "16 Quốc Hương, Quận 2",
    img: require("../../../assets/i4.png"),
    distance: "500m",
    rate: "4.8",
    bookingNum: 48,
    utilities: true,
    room: { price: 30, persons: 15 },
    ac: true,
    wifi: true,
    projecter: true,
  },
  {
    id: "The Feine Cafe",
    name: "The Feine Cafe",
    address: "33 Đường số 4, Trung Sơn, Quận 7",
    img: require('../../../assets/cafe3.jpg'),
    distance: "1.1km",
    rate: "4.5",
    bookingNum: 76,
    utilities: true,
    room: undefined,
    ac: false,
    wifi: true,
    projecter: false,
  },
  {
    id: "Quán của Thời Thanh Xuân",
    name: "The Feine Cafe",
    address: "43 Đồng Khởi, Quận 1",
    img: require('../../../assets/cafe4.jpg'),
    distance: "1.3km",
    rate: "3.8",
    bookingNum: 35,
    utilities: true,
    room: undefined,
    ac: true,
    wifi: true,
    projecter: true,
  },
  {
    id: "Cafe Cú trên cây Garden",
    name: "Cafe Cú trên cây Garden",
    address: "262 Ung Văn Khiêm, Quận Bình Thạnh",
    img: require('../../../assets/cafe5.jpg'),
    distance: "1.7km",
    rate: "4.0",
    bookingNum: 5,
    utilities: true,
    room: { price: 40, persons: 10 },
    ac: true,
    wifi: true,
    projecter: true,
  },
  {
    id: "Farmers’ Garden",
    name: "Farmers’ Garden",
    address: "Lầu 2, 486 Nguyễn Thị Thập, Quận 7",
    img: require('../../../assets/cafe6.jpg'),
    distance: "2km",
    rate: "4.3",
    bookingNum: 12,
    utilities: true,
    room: { price: 40, persons: 15 },
    ac: true,
    wifi: true,
    projecter: true,
  },
]
const dataTop = [
  {
    name: "September Cafe",
    image: require("../../../assets/cafe1.jpg"),
    rate: "3.5",
  },
  {
    name: "The Dome Kaffe",
    image: require("../../../assets/cafe2.jpg"),
    rate: "3.0",
  },
  {
    name: " Chanchamayo",
    image: require("../../../assets/cafe8.jpg"),
    rate: "3.0",
  },
]

const checkboxData = [
  {
    name: "Có phòng họp",
    value: "Có phòng họp",
  },
  {
    name: "Quán ngoài trời",
    value: "Quán ngoài trời",
  },
  {
    name: "Phòng họp",
    value: "Phòng họp",
  }
]


const HomeTab = ({ navigation }) => {
  const [isFilter, hasFilter] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [dataFilter, setDataFilter] = useState([]);


  const onItemPress = () => {
    navigation.navigate('ShopInfo')
  }
  const onFilter = (item, checked) => {
    let index = dataFilter.indexOf(item);
    let newArr = dataFilter;
    console.log("find:", index, checked, item)
    if (index > -1) {
      newArr.splice(index, 1);
    }
    if (checked) {
      newArr.push(item);
    }
    console.log("new arr", dataFilter, newArr)
    setDataFilter([...newArr]);
    hasFilter(true);
  }


  const onRemoveFilter = () => {
    hasFilter(false);
    setOpenFilter(false);
  }

  return (

    <View style={styles.home}>
      <View style={styles.header}>
        <View style={styles.header_group_up}>
          <View style={styles.header_logo}>
            <ReactImage source={require('../../../assets/logoPng.png')} style={styles.header_logo_logoPng} />
            <ReactImage source={require('../../../assets/asset1.png')} style={styles.header_logo_asset1} />
          </View>
          <View style={styles.header_search}>
            <TextInput style={{ flex: 1 }} placeholder="Tìm kiếm quán Cafe...." />
            <Svg width="20" height="20" viewBox="0 0 15.224 15.03">
              <SvgLine x2="5" y2="5" transform="translate(10 11)" fill="none" stroke="#707070" strokeWidth="1.5" />
              <SvgCircle cx="6" cy="6" r="5.5" fill="none" stroke="#707070" />
            </Svg>
          </View>
          <TouchableOpacity onPress={() => setOpenFilter(!openFilter)} style={styles.header_group101}>
            <ReactImage source={require('../../../assets/filter.png')} style={styles.header_filter} />
          </TouchableOpacity>
        </View>
        {isFilter &&
          <View style={{ flexDirection: "row", width: "100%", paddingHorizontal: 10 }}>
            {dataFilter.map((item, index) => {
              console.log(index);
              return (
                <View key={index} style={{ borderRadius: 30, borderColor: "#000", padding: 5, borderWidth: 1, marginRight: 5 }}>
                  <Text style={{ fontSize: 12 }}>{item.name}</Text>
                </View>
              )
            })}
          </View>
        }
      </View>
      <View style={{ flex: 1 }}>
        {openFilter &&
          <View style={styles.filter}>
            <View><Text style={styles.filter_title}>Loại quán</Text></View>
            <Checkbox.Group>
              {checkboxData.map(item => (
                <View>
                  <Checkbox onChecked={(check) => onFilter(item, check)} activeColor="#544741" value={item.value} style={styles.filter_item} suffix={<Text style={styles.filter_label}>{item.name}</Text>} />
                </View>
              ))}
            </Checkbox.Group>
            <View style={{ width: "100%" }}>
              <TouchableOpacity onPress={onRemoveFilter} style={{ alignSelf: "flex-end", backgroundColor: "rgba(250, 175, 82, 1)", padding: 5 }}>
                <Text>Bỏ lọc</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.filter_bg} onPress={() => setOpenFilter(false)} />

          </View>
        }
        <ScrollView contentContainerStyle={{ alignItems: "center" }}>

          {!isFilter ? <>
            <ScrollView style={styles.Hotdeal} horizontal={true}>
              <ReactImage source={require('../../../assets/ComponentTMP_0-image.jpg')} style={styles.HotDeal_Picture} />
              <ReactImage source={require('../../../assets/ComponentTMP_0-image.jpg')} style={styles.HotDeal_Picture} />
              <ReactImage source={require('../../../assets/ComponentTMP_0-image.jpg')} style={styles.HotDeal_Picture} />
              <ReactImage source={require('../../../assets/ComponentTMP_0-image.jpg')} style={styles.HotDeal_Picture} />
              <ReactImage source={require('../../../assets/ComponentTMP_0-image.jpg')} style={styles.HotDeal_Picture} />
            </ScrollView>
            <View style={styles.hotShop}>
              <Text style={styles.hotShop_group103_hotShopNht}>TOP 5 Yêu thích nhất</Text>
              <FlatList
                style={styles.hotShop_group103}
                data={dataTop}
                horizontal={true}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={onItemPress} key={index} style={styles.hotShop_group103_group102_group17}>

                    <ReactImage source={item.image} style={styles.hotShop_group103_group102_group17_i1} />
                    <View>
                      <Text style={styles.hotShop_group103_group102_group17_septemberCafe}>{item.name}</Text>
                      <View style={styles.hotShop_group103_group102_group17_group42_group370f51e497}>
                        <ReactImage source={require('../../../assets/star.png')} style={styles.hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                        <ReactImage source={require('../../../assets/star.png')} style={styles.hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                        <ReactImage source={require('../../../assets/star.png')} style={styles.hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                        <ReactImage source={require('../../../assets/halfStar2.png')} style={styles.hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                        <ReactImage source={require('../../../assets/none-star.png')} style={styles.hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                        <Text style={{ marginLeft: 7 }}>{item.rate}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <View style={{ marginLeft: 5, flexDirection: "row" }}>
                          <ReactImage source={require('../../../assets/wifiicon.png')} style={{ "width": 17, "height": 17, }} />
                          <View style={{ alignItems: "center" }}>
                            <ReactImage source={require('../../../assets/roomicon.png')} style={{ "width": 22, "height": 17 }} />
                            <Text style={{ fontSize: 11 }}>10 người</Text>
                          </View>
                          <ReactImage source={require('../../../assets/projectericon.png')} style={{ "width": 20, "height": 20, }} />
                          <ReactImage source={require('../../../assets/acicon.png')} style={{ "width": 27, "height": 26, }} />

                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )} />
              <Svg style={styles.hotShop_path8} preserveAspectRatio="none" viewBox="-1.5 -1.5 327.1445007324219 3" fill="transparent"><SvgPath d="M 0 0 C 0 0 168.9582214355469 0 249.9569244384766 0 C 330.9556274414063 0 323.9947814941406 0 323.9947814941406 0" /></Svg>
            </View>
            <View style={styles.quanGnBnb2eef024}>
              <Text style={styles.quanGnBnb2eef024_quanGnBn}>Quán gần bạn</Text>

              <FlatList data={data} style={{ flex: 1 }} renderItem={({ item, index }) => (
                <TouchableOpacity key={index} onPress={onItemPress} style={styles.quanGnBnb2eef024_group23}>
                  <View style={styles.quanGnBnb2eef024_group23_group105}>
                    <Text style={styles.quanGnBnb2eef024_group23_group105_x700m}>{item.distance}</Text>

                    <View style={styles.quanGnBnb2eef024_item_left}>
                      <ReactImage source={item.img} style={styles.quanGnBnb2eef024_group23_group105_i4} />
                      <Text style={{ marginTop: 7 }}>{item.rate} <ReactImage source={require('../../../assets/star.png')} style={styles.hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                      </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text style={styles.quanGnBnb2eef024_group23_group105_bstoryCafe}>{item.name}</Text>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <ReactImage source={require('../../../assets/location.png')} style={styles.item_icon_label} />
                        <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>{item.address}</Text>
                      </View>
                      {item.room != undefined &&
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <ReactImage source={require('../../../assets/priceicon.png')} style={styles.item_icon_label} />

                          <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>Giá phòng họp: {item.room.price}K/Giờ</Text>

                        </View>}
                      {item.utilities &&
                        <View style={{ flexDirection: "row" }}>
                          <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>Tiện ích</Text>
                          <View style={{ marginLeft: 5, flexDirection: "row" }}>
                            {item.wifi &&
                              <ReactImage source={require('../../../assets/wifiicon.png')} style={{ "width": 17, "height": 17, marginRight: 5 }} />
                            }
                            {item.room != undefined &&
                              <View style={{ alignItems: "center", marginRight: 5 }}>
                                <ReactImage source={require('../../../assets/roomicon.png')} style={{ "width": 22, "height": 17 }} />
                                <Text style={{ fontSize: 11 }}>{item.room.persons} người</Text>
                              </View>
                            }
                            {item.projecter &&
                              <ReactImage source={require('../../../assets/projectericon.png')} style={{ "width": 20, "height": 20, marginRight: 5 }} />
                            }
                            {item.ac &&
                              <ReactImage source={require('../../../assets/acicon.png')} style={{ "width": 27, "height": 26, marginRight: 5 }} />
                            }

                          </View>
                        </View>
                      }
                      <View style={{ position: "absolute", bottom: 0, right: 0, flexDirection: "row" }}>
                        <Text style={{ flex: 1, textAlign: "right" }}>Đã có {item.bookingNum} lần đặt chỗ</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )} />
            </View>
          </> :
            <View style={styles.quanGnBnb2eef024}>
              <FlatList data={data} style={{ flex: 1 }} renderItem={({ item, index }) => (
                <TouchableOpacity key={index} onPress={onItemPress} style={styles.quanGnBnb2eef024_group23}>
                  <View style={styles.quanGnBnb2eef024_group23_group105}>
                    <Text style={styles.quanGnBnb2eef024_group23_group105_x700m}>{item.distance}</Text>

                    <View style={styles.quanGnBnb2eef024_item_left}>
                      <ReactImage source={item.img} style={styles.quanGnBnb2eef024_group23_group105_i4} />
                      <Text style={{ marginTop: 7 }}>{item.rate} <ReactImage source={require('../../../assets/star.png')} style={styles.hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98} />
                      </Text>
                    </View>

                    <View style={{ flex: 1, }}>
                      <Text style={styles.quanGnBnb2eef024_group23_group105_bstoryCafe}>{item.name}</Text>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <ReactImage source={require('../../../assets/location.png')} style={styles.item_icon_label} />
                        <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>{item.address}</Text>
                      </View>
                      {item.room != undefined &&
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <ReactImage source={require('../../../assets/priceicon.png')} style={styles.item_icon_label} />

                          <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>Giá phòng họp: {item.room.price}K/Giờ</Text>

                        </View>}
                      {item.utilities &&
                        <View style={{ flexDirection: "row" }}>
                          <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>Tiện ích</Text>
                          <View style={{ marginLeft: 5, flexDirection: "row" }}>
                            {item.wifi &&
                              <ReactImage source={require('../../../assets/wifiicon.png')} style={{ "width": 17, "height": 17, marginRight: 5 }} />
                            }
                            {item.room != undefined &&
                              <View style={{ alignItems: "center", marginRight: 5 }}>
                                <ReactImage source={require('../../../assets/roomicon.png')} style={{ "width": 22, "height": 17 }} />
                                <Text style={{ fontSize: 11 }}>{item.room.persons} người</Text>
                              </View>
                            }
                            {item.projecter &&
                              <ReactImage source={require('../../../assets/projectericon.png')} style={{ "width": 20, "height": 20, marginRight: 5 }} />
                            }
                            {item.ac &&
                              <ReactImage source={require('../../../assets/acicon.png')} style={{ "width": 27, "height": 26, marginRight: 5 }} />
                            }

                          </View>
                          <View style={{ flexDirection: "row" }}>
                            <Text style={styles.quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3}>Tiện ích</Text>
                            <View style={{ marginLeft: 5, flexDirection: "row", }}>
                              <ReactImage source={require('../../../assets/wifiicon.png')} style={{ "width": 17, "height": 17, }} />
                              <View style={{ alignItems: "center" }}>
                                <ReactImage source={require('../../../assets/roomicon.png')} style={{ "width": 22, "height": 17 }} />
                                <Text style={{ fontSize: 11 }}>10 người</Text>
                              </View>
                              <ReactImage source={require('../../../assets/projectericon.png')} style={{ "width": 20, "height": 20, }} />
                              <ReactImage source={require('../../../assets/acicon.png')} style={{ "width": 27, "height": 20 }} />

                            </View>
                          </View>
                        </View>
                      }

                      <View style={{ position: "absolute", bottom: 0, right: 0, flexDirection: "row" }}>
                        <Text style={{ flex: 1, textAlign: "right" }}>Đã có {item.bookingNum} lần đặt chỗ</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

              )} />
            </View>}

        </ScrollView>
      </View>
    </View >
  );
}

export default HomeTab;

const styles = StyleSheet.create({
  "home": {
    "flex": 1,
    "backgroundColor": "rgba(220, 220, 220, 1)",
  },

  "quanGnBnb2eef024": {
    "flex": 1,
    "width": "90%",
    marginTop: 10
  },
  "quanGnBnb2eef024_quanGnBn": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",

    "width": "100%",
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  "quanGnBnb2eef024_group23": {
    "width": "100%",
    "position": "relative",
    "marginBottom": 10,
  },
  "quanGnBnb2eef024_group23_group105": {
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "borderRadius": 4,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": "100%",
    flexDirection: "row",
    padding: 10
  },
  "quanGnBnb2eef024_group23_group105_i4": {
    "borderRadius": 4,
    "width": 83,
    "height": 83,
    marginRight: 10
  },
  "quanGnBnb2eef024_group23_group105_x57eTuXngPhng7Qun3": {
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
    "fontSize": 13,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "quanGnBnb2eef024_group23_group105_x700m": {
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
    "fontWeight": "400",
    "fontStyle": "italic",
    "fontFamily": "Roboto",
    "right": 10,
    "top": 16
  },
  "quanGnBnb2eef024_group23_group105_bstoryCafe": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 18,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
  },
  "hotShop": {
    "width": "90%",
    "marginBottom": 10,
  },
  "hotShop_group103": {
    "width": "100%",
  },
  "hotShop_group103_hotShopNht": {
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "width": "100%",
    "paddingBottom": 5,
    "marginBottom": 10,
    "borderBottomWidth": 1,
  },
  "hotShop_group103_group102_group17": {
    "backgroundColor": "#FFF",
    "borderRadius": 5,
    "margin": 5,
    "marginBottom": 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    flexDirection: "row",
    padding: 10,
  },
  "hotShop_group103_group102_group17_i1": {
    "width": 79,
    "height": 80,
    marginRight: 10,
  },
  "hotShop_group103_group102_group17_septemberCafe": {
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "left": 93,
    "top": 41
  },

  "Hotdeal": {
    "width": "100%",
    paddingLeft: 10,
    marginBottom: 10,
    marginTop: 10
  },

  "HotDeal_Picture": {
    "borderRadius": 4,
    "width": 340,
    "height": 150,
    marginRight: 10
  },

  "hotShop_group103_group102_group17_group42_group370f51e497": {
    flexDirection: "row",
    alignItems: "center"
  },
  "hotShop_group103_group102_group17_group42_group370f51e497_star55a2af98": {
    "width": 12,
    "height": 13,
  },
  "hotShop_group103_group102_group17_group42_group3850e2cc78": {
    "position": "absolute",

    "width": 12,
    "height": 13,
    "left": 16,

  },
  "hotShop_group103_group102_group17_group42_group3850e2cc78_star2e40c2f1": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 13,


  },
  "hotShop_group103_group102_group17_group42_group391f531ae3": {
    "position": "absolute",

    "width": 13,
    "height": 13,
    "left": 31,

  },
  "hotShop_group103_group102_group17_group42_group391f531ae3_starbef87d39": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 13,
    "height": 13,


  },
  "hotShop_group103_group102_group17_group42_group41ea5fbe0b": {
    "position": "absolute",

    "width": 13,
    "height": 13,
    "left": 62,

  },
  "hotShop_group103_group102_group17_group42_group41ea5fbe0b_halfStar22d835025": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 13,
    "height": 13,


  },
  "hotShop_group103_group102_group17_group42_group1138d5db7c6": {
    "position": "absolute",

    "width": 12,
    "height": 13,
    "left": 47,

  },
  "hotShop_group103_group102_group17_group42_group1138d5db7c6_star0159e37c": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 12,
    "height": 13,


  },
  "hotShop_path8": {
    "position": "absolute",
    "width": 328.14,
    "height": 4,
    "left": -2,
    "top": 14
  },
  "header": {
    "backgroundColor": "rgba(241, 211, 126, 1)",
    "width": "100%",
    "paddingTop": 40,
    paddingBottom: 10,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 6
    },
    "shadowRadius": 6,
  },
  header_group_up: {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "100%",
  },
  "header_group101": {
    "width": 40,
    "height": 21,
  },
  "header_logo": {
    "width": 105,
    "height": 65,
  },
  "header_logo_logoPng": {
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 90,
    "height": 65,
  },
  "header_logo_asset1": {
    "position": "absolute",
    "borderTopLeftRadius": 0,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 0,
    "width": 50,
    "height": 16,
    "left": 55,
    "top": 39
  },
  "header_search": {
    "borderWidth": 1,
    "borderColor": "rgba(177, 137, 16, 1)",
    "borderWidth": 1,
    "borderRadius": 5,
    "height": 30,
    "paddingLeft": 5,
    "paddingRight": 5,
    "marginLeft": 5,
    "marginRight": 5,
    "fontSize": 14,
    "fontWeight": "300",
    "fontStyle": "normal",
    "fontFamily": "Roboto",
    "flexDirection": "row",
    "alignItems": "center",
    "flex": 1,
  },
  "header_filter": {
    "width": 23,
    "height": 23,
    marginLeft: 5,
    marginRight: 5
  },
  filter: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    zIndex: 1
  },
  filter_bg: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flex: 1,
  },
  filter_title: {
    "fontSize": 14,
    "fontWeight": "700",
    "fontFamily": "Roboto",
    "color": "rgba(84, 71, 65, 1)",
    marginBottom: 5
  },
  filter_item: {
    marginLeft: 10,
  },
  filter_label: {
    "fontSize": 14,
    "fontWeight": "400",
    "fontFamily": "Roboto",
    "color": "rgba(84, 71, 65, 1)",
  },
  quanGnBnb2eef024_item_left: {
    "width": 83,
    "height": 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10
  },
  quanGnBnb2eef024_item_left_numstar: {

  },
  quanGnBnb2eef024_item_left_star2918bd71: {

  },
  item_icon_label: {
    "width": 8.24,
    "height": 13.19,
    marginRight: 4,
  },
  item_price: {
    "width": 8.96,
    "height": 8.96,
    marginRight: 4,
  }
});