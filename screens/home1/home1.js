import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class Home1 extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="5a85548f-921d-43d9-8115-19321cddfe1f" style={styles.home1}>
        <View data-layer="055ead07-7a55-4e0a-9429-c29944406f91" style={styles.home1_item}>
            <View data-layer="133ddfc0-b233-4a4c-b012-3fc848ee149a" style={styles.home1_item_rectangle18}></View>
            <View data-layer="61663dda-9e50-441f-9fe0-08ed910357ce" style={styles.home1_item_right}>
                <Text data-layer="c843d388-51d5-4330-b0d4-b16e4bc706c6" style={styles.home1_item_right_distance}>500m</Text>
                <Text data-layer="534b8d90-cf83-4e46-94c7-d6a27c159069" style={styles.home1_item_right_name}>Ollin Premium</Text>
                <Text data-layer="abc0995a-a133-4a0e-9b59-23eada55a036" style={styles.home1_item_right_bookingNum}>Đã có 45 lần đặt chỗ</Text>
                <View data-layer="527031b1-6cf7-48c3-bc28-69df305911f7" style={styles.home1_item_right_tienich}>
                    <ReactImage data-layer="4eea1b84-2aa9-4199-88b3-2441951fc3cf" source={require('./assets/roomicon.png')} style={styles.home1_item_right_tienich_roomicon} />
                    <ReactImage data-layer="4374be89-5d84-4839-af92-24958ca00116" source={require('./assets/projectericon.png')} style={styles.home1_item_right_tienich_projectericon} />
                    <ReactImage data-layer="8548222f-5d59-42e3-8573-def3dcd6f25a" source={require('./assets/acicon.png')} style={styles.home1_item_right_tienich_acicon} />
                    <ReactImage data-layer="9ffce888-f846-45d3-9820-bfd52df517e1" source={require('./assets/wifiicon.png')} style={styles.home1_item_right_tienich_wifiicon} />
                    <Text data-layer="68d1422e-974b-4e21-85d7-7d22d7cc8b40" style={styles.home1_item_right_tienich_personnum}>10 người</Text>
                    <Text data-layer="97e86235-9d64-4387-bc3a-22f087f7d0f6" style={styles.home1_item_right_tienich_tienichLabel}>Tiện ích</Text>
                </View>
                <View data-layer="f69e16ec-6202-4b52-8c9c-5f585001c99e" style={styles.home1_item_right_priced27d5375}>
                    <Text data-layer="151e59dc-46fe-4956-b76f-4ce89ed506d6" style={styles.home1_item_right_priced27d5375_price}>Giá: 30K/Giờ</Text>
                    <View data-layer="08bfdc03-b6cc-4104-b4a6-d4f83864fb84" style={styles.home1_item_right_priced27d5375_priceicon}>
                        <Svg data-layer="760d7e25-0345-4259-ba67-b860f547536f" style={styles.home1_item_right_priced27d5375_priceicon_path668} preserveAspectRatio="none" viewBox="2.25 2.25 7.97900390625 8.048095703125" fill="rgba(242, 154, 69, 1)"><SvgPath d="M 9.675115585327148 2.25 L 7.311396598815918 2.25 C 7.237404823303223 2.25 7.167413234710693 2.279996633529663 7.115420341491699 2.331990242004395 L 2.411980628967285 7.053427696228027 C 2.196006536483765 7.269401073455811 2.196006536483765 7.621360301971436 2.411980628967285 7.837334632873535 L 4.641715049743652 10.08706569671631 C 4.857688903808594 10.30304050445557 5.189649105072021 10.40902709960938 5.509611129760742 10.12906074523926 L 10.14705944061279 5.483614444732666 C 10.19905185699463 5.431620597839355 10.22904968261719 5.361629009246826 10.22904968261719 5.287638187408447 L 10.22904968261719 2.803934097290039 C 10.22904968261719 2.497970581054688 9.981078147888184 2.25 9.675115585327148 2.25 Z M 8.757224082946777 4.399744033813477 C 8.36527156829834 4.441738605499268 8.037310600280762 4.111778259277344 8.079304695129395 3.721824884414673 C 8.109302520751953 3.435858964920044 8.339274406433105 3.207885980606079 8.625240325927734 3.175889730453491 C 9.017193794250488 3.133894681930542 9.34515380859375 3.463855504989624 9.303158760070801 3.853808879852295 C 9.273162841796875 4.139774799346924 9.043190002441406 4.369747161865234 8.757224082946777 4.399744033813477 Z"  /></Svg>
                        <Svg data-layer="d327101b-c98a-4518-960e-e746deee6b2a" style={styles.home1_item_right_priced27d5375_priceicon_path669} preserveAspectRatio="none" viewBox="13.549219131469727 5.646093845367432 5.7451171875 7.990966796875" fill="rgba(242, 154, 69, 1)"><SvgPath d="M 18.8145923614502 5.646093845367432 L 18.8145923614502 7.919822692871094 C 18.8145923614502 7.993814468383789 18.78459548950195 8.063806533813477 18.73260307312012 8.115798950195312 L 13.54921913146973 13.29918098449707 L 13.72519779205322 13.47516059875488 C 13.94117259979248 13.69113540649414 14.29313087463379 13.69113540649414 14.50910472869873 13.47516059875488 L 19.21254348754883 8.751724243164062 C 19.26453590393066 8.699729919433594 19.29453468322754 8.629737854003906 19.29453468322754 8.555747985839844 L 19.29453468322754 6.194028377532959 C 19.29453468322754 5.914061546325684 19.08455848693848 5.682089805603027 18.8145923614502 5.646093845367432 Z"  /></Svg>
                    </View>
                </View>
                <View data-layer="28a42a03-ad9b-4f5c-ada8-f71707d3214b" style={styles.home1_item_right_address}>
                    <Text data-layer="8206cbd7-0f5b-4b79-98fe-39edb9a1c881" style={styles.home1_item_right_address_x16QucHngQun2}>16 Quốc Hương, Quận 2</Text>
                    <Svg data-layer="6aaf8d92-8a78-4d52-bb44-692539bd19c4" style={styles.home1_item_right_address_location} preserveAspectRatio="none" viewBox="8.354801177978516 1.928033471107483 8.244873046875 13.19189453125" fill="rgba(242, 154, 69, 1)"><SvgPath d="M 12.47726440429688 1.928033471107483 C 10.20047950744629 1.928033471107483 8.354801177978516 3.773711681365967 8.354801177978516 6.050497055053711 C 8.354801177978516 10.17296028137207 12.47726440429688 15.11991596221924 12.47726440429688 15.11991596221924 C 12.47726440429688 15.11991596221924 16.59972763061523 10.17296028137207 16.59972763061523 6.050497055053711 C 16.59972763061523 3.773712158203125 14.75402355194092 1.928033590316772 12.47726440429688 1.928033590316772 Z M 12.47726440429688 8.575505256652832 C 11.08273887634277 8.575505256652832 9.952256202697754 7.445023059844971 9.952256202697754 6.050497055053711 C 9.952256202697754 4.655970573425293 11.08273887634277 3.525487899780273 12.47726440429688 3.525487899780273 C 13.87179088592529 3.525487899780273 15.00227355957031 4.655970573425293 15.00227355957031 6.050497055053711 C 15.00227355957031 7.445023059844971 13.87179088592529 8.575505256652832 12.47726440429688 8.575505256652832 Z M 10.87981033325195 6.050497055053711 C 10.87981033325195 5.168251037597656 11.59501838684082 4.453042030334473 12.47726440429688 4.453042030334473 C 13.35951137542725 4.453042030334473 14.07471942901611 5.168251037597656 14.07471942901611 6.050497055053711 C 14.07471942901611 6.932743072509766 13.35951137542725 7.647951602935791 12.47726440429688 7.647951602935791 C 11.59501838684082 7.647951602935791 10.87981033325195 6.932743072509766 10.87981033325195 6.050497055053711 Z"  /></Svg>
                </View>
                <View data-layer="e8025234-1c97-4061-8a59-3989d581a82e" style={styles.home1_item_right_tick}>
                    <Text data-layer="10b2a715-33fe-473c-aeea-2bb75f4e9a19" style={styles.home1_item_right_tick_tickLabel}>Khuyến mãi nước 50%</Text>
                    <Svg data-layer="a06d9618-c43c-4c4b-b32b-992d8b1cd158" style={styles.home1_item_right_tick_tickicon} preserveAspectRatio="none" viewBox="0 4.5 10.375244140625 6.916748046875" fill="rgba(242, 154, 69, 1)"><SvgPath d="M 2.305582761764526 6.229186534881592 L 8.069539070129395 6.229186534881592 L 8.069539070129395 9.68756103515625 L 2.305582761764526 9.68756103515625 L 2.305582761764526 6.229186534881592 Z M 9.510529518127441 7.958373546600342 C 9.510529518127441 8.435882568359375 9.897614479064941 8.822967529296875 10.37512302398682 8.822967529296875 L 10.37512302398682 10.55215454101562 C 10.37512302398682 11.02966213226318 9.988036155700684 11.416748046875 9.510529518127441 11.416748046875 L 0.864593505859375 11.416748046875 C 0.3870857357978821 11.416748046875 0 11.02966213226318 0 10.55215454101562 L 0 8.822967529296875 C 0.4775078296661377 8.822967529296875 0.864593505859375 8.435882568359375 0.864593505859375 7.958373546600342 C 0.864593505859375 7.480865478515625 0.4775078296661377 7.093780040740967 0 7.093780040740967 L 0 5.364593029022217 C 0 4.887085437774658 0.3870857357978821 4.5 0.864593505859375 4.5 L 9.510529518127441 4.5 C 9.988036155700684 4.5 10.37512302398682 4.887085437774658 10.37512302398682 5.364593029022217 L 10.37512302398682 7.093780040740967 C 9.897614479064941 7.093780040740967 9.510529518127441 7.480865478515625 9.510529518127441 7.958373546600342 Z M 8.64593505859375 6.085087776184082 C 8.64593505859375 5.846333980560303 8.452392578125 5.652791023254395 8.213638305664062 5.652791023254395 L 2.161483764648438 5.652791023254395 C 1.922729849815369 5.652791023254395 1.72918701171875 5.846333980560303 1.72918701171875 6.085087776184082 L 1.72918701171875 9.831659317016602 C 1.72918701171875 10.07041358947754 1.922729849815369 10.26395606994629 2.161483764648438 10.26395606994629 L 8.213638305664062 10.26395606994629 C 8.452392578125 10.26395606994629 8.64593505859375 10.07041358947754 8.64593505859375 9.831659317016602 L 8.64593505859375 6.085087776184082 Z"  /></Svg>
                </View>
            </View>
            <View data-layer="bcf10483-a8a3-458c-bfa2-a7f1f73eb2ed" style={styles.home1_item_left}>
                <ReactImage data-layer="cacbd1e2-7976-4ea0-9a43-c6818ef8dcf2" source={require('./assets/image.png')} style={styles.home1_item_left_image} />
                <Text data-layer="e20b7797-6bc6-472c-848f-3b3921db3952" style={styles.home1_item_left_numstar}>4.5</Text>
                <ReactImage data-layer="4e117fe0-dd7b-4d1d-8600-6124ec4c5d79" source={require('./assets/star2918bd71.png')} style={styles.home1_item_left_star2918bd71} />
            </View>
        </View>
        <View data-layer="56c902e6-9887-4054-92ad-98a74eca66a8" style={styles.home1_group177}>
            <Svg data-layer="0da437ed-6fcc-4b9c-b691-a5b04180e584" style={styles.home1_group177_path2} preserveAspectRatio="none" viewBox="0 0 211 98" fill="rgba(255, 255, 255, 1)"><SvgPath d="M 4 0 L 207 0 C 209.2091369628906 0 211 1.790860891342163 211 4 L 211 94 C 211 96.20913696289062 209.2091369628906 98 207 98 L 4 98 C 1.790860891342163 98 0 96.20913696289062 0 94 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></Svg>
            <ReactImage data-layer="6a2731dc-1a34-4e57-a268-f03d20e08fe2" source={require('./assets/fbebbeb3176148b6B9706d0036fc7497.png')} style={styles.home1_group177_fbebbeb3176148b6B9706d0036fc7497} />
            <Text data-layer="6d30eb2a-3e7f-4a71-bda7-a4e6b61245ed" style={styles.home1_group177_septemberCafe}>September Cafe</Text>
            <View data-layer="885582a2-b766-4a44-a5d5-371ece92b53b" style={styles.home1_group177_group42}>
                <View data-layer="0028749a-b79a-436f-a28f-82301c337386" style={styles.home1_group177_group42_group37}>
                    <ReactImage data-layer="058249f2-581c-4115-85ba-394e84502fac" source={require('./assets/star0a606f87.png')} style={styles.home1_group177_group42_group37_star0a606f87} />
                </View>
                <View data-layer="8b155997-6995-4a30-890e-34c126ec97cf" style={styles.home1_group177_group42_group38}>
                    <ReactImage data-layer="4e8a68e5-5263-4857-afb2-c6400757ddff" source={require('./assets/star86fded26.png')} style={styles.home1_group177_group42_group38_star86fded26} />
                </View>
                <View data-layer="39de5938-0b6c-47e2-8dae-ae01df5a01a3" style={styles.home1_group177_group42_group39}>
                    <ReactImage data-layer="b306dd5f-73a9-474e-a33d-826e9cc43ce5" source={require('./assets/starbd36aa98.png')} style={styles.home1_group177_group42_group39_starbd36aa98} />
                </View>
                <View data-layer="c3ca693b-7613-406a-893b-b9fbebce3187" style={styles.home1_group177_group42_group41}>
                    <ReactImage data-layer="36242507-bd44-40a0-aeae-600229d15f1c" source={require('./assets/halfStar2.png')} style={styles.home1_group177_group42_group41_halfStar2} />
                </View>
                <View data-layer="d3930998-75e2-458c-8a6f-d88314d51bc3" style={styles.home1_group177_group42_group113}>
                    <ReactImage data-layer="61135ba4-f672-4a32-a157-7437989011bb" source={require('./assets/star.png')} style={styles.home1_group177_group42_group113_star} />
                </View>
            </View>
            <View data-layer="24f1348c-fa62-4647-a7e7-d85a03a581a1" style={styles.home1_group177_group176}>
                <ReactImage data-layer="ed964cac-3753-4181-930b-98a00a355f9b" source={require('./assets/pinclipartcommeetingClipartFree63947.png')} style={styles.home1_group177_group176_pinclipartcommeetingClipartFree63947} />
                <ReactImage data-layer="87c42f1a-23b5-42ed-8e60-1e98f2751813" source={require('./assets/x2020624419991071872977076642162411729179112n.png')} style={styles.home1_group177_group176_x2020624419991071872977076642162411729179112n} />
                <ReactImage data-layer="e81492f2-4cf1-4bd3-b453-d0688ef12036" source={require('./assets/aaaa.png')} style={styles.home1_group177_group176_aaaa} />
                <ReactImage data-layer="2a6b7479-5c1c-46ef-ac78-2c82fbd1396b" source={require('./assets/image4.png')} style={styles.home1_group177_group176_image4} />
                <Text data-layer="a658c7d1-6cf4-433f-b18d-78c4a3beab64" style={styles.home1_group177_group176_x10Ngi}>10 người</Text>
            </View>
        </View>
    </ScrollView>
    );
  }
}

Home1.propTypes = {

}

Home1.defaultProps = {

}


const styles = StyleSheet.create({
  "home1": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 393,
    "height": 851,
    "left": 0,
    "top": 0
  },
  "home1_item": {
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
    "width": 367,
    "height": 118,
    "left": 13,
    "top": 412
  },
  "home1_item_rectangle18": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "shadowColor": "rgb(0,  0,  0)",
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 6,
    "width": 367,
    "height": 118,
    "left": 0,
    "top": 0
  },
  "home1_item_right": {
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
    "width": 260,
    "height": 102,
    "left": 100,
    "top": 9
  },
  "home1_item_right_distance": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(0, 0, 0, 0.9803921568627451)",
    "fontSize": 12,
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
    "width": 30,
    "height": 16,
    "left": 225,
    "top": 0
  },
  "home1_item_right_name": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 15,
    "fontWeight": "700",
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
    "width": 96,
    "height": 20,
    "left": 0,
    "top": 1
  },
  "home1_item_right_bookingNum": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
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
    "width": 81,
    "height": 11,
    "left": 179,
    "top": 91
  },
  "home1_item_right_tienich": {
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
    "width": 140,
    "height": 26,
    "left": 2,
    "top": 67
  },
  "home1_item_right_tienich_roomicon": {
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
    "left": 65,
    "top": 2
  },
  "home1_item_right_tienich_projectericon": {
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
    "left": 91,
    "top": 1
  },
  "home1_item_right_tienich_acicon": {
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
    "height": 24,
    "left": 115,
    "top": 0
  },
  "home1_item_right_tienich_wifiicon": {
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
    "width": 15,
    "height": 15,
    "left": 43,
    "top": 2
  },
  "home1_item_right_tienich_personnum": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(32, 19, 4, 1)",
    "fontSize": 6,
    "fontWeight": "700",
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
    "width": 24,
    "height": 8,
    "left": 63,
    "top": 18
  },
  "home1_item_right_tienich_tienichLabel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
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
    "width": 31,
    "height": 11,
    "left": 0,
    "top": 5
  },
  "home1_item_right_priced27d5375": {
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
    "width": 64.17,
    "height": 11.72,
    "left": 2.41,
    "top": 52
  },
  "home1_item_right_priced27d5375_price": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
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
    "width": 50,
    "height": 11,
    "left": 14.17,
    "top": 0
  },
  "home1_item_right_priced27d5375_priceicon": {
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
    "width": 8.96,
    "height": 8.96,
    "left": 0,
    "top": 2.77
  },
  "home1_item_right_priced27d5375_priceicon_path668": {
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
    "width": 7.98,
    "height": 8.05,
    "left": 0,
    "top": 0
  },
  "home1_item_right_priced27d5375_priceicon_path669": {
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
    "width": 5.75,
    "height": 7.99,
    "left": 3.21,
    "top": 0.97
  },
  "home1_item_right_address": {
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
    "width": 105.52,
    "height": 13.68,
    "left": 3.48,
    "top": 23
  },
  "home1_item_right_address_x16QucHngQun2": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(194, 151, 106, 0.9803921568627451)",
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
    "width": 93,
    "height": 11,
    "left": 12.52,
    "top": 0
  },
  "home1_item_right_address_location": {
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
    "width": 8.24,
    "height": 13.19,
    "left": 0,
    "top": 0.49
  },
  "home1_item_right_tick": {
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
    "width": 102.59,
    "height": 11,
    "left": 2.41,
    "top": 39
  },
  "home1_item_right_tick_tickLabel": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(191, 151, 104, 1)",
    "fontSize": 9,
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
    "width": 88,
    "height": 11,
    "left": 14.59,
    "top": 0
  },
  "home1_item_right_tick_tickicon": {
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
    "width": 10.38,
    "height": 6.92,
    "left": 0,
    "top": 3.77
  },
  "home1_item_left": {
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
    "width": 83,
    "height": 100,
    "left": 7,
    "top": 8
  },
  "home1_item_left_image": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 4,
    "borderTopRightRadius": 4,
    "borderBottomLeftRadius": 4,
    "borderBottomRightRadius": 4,
    "width": 83,
    "height": 83,
    "left": 0,
    "top": 0
  },
  "home1_item_left_numstar": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(75, 41, 0, 1)",
    "fontSize": 9,
    "fontWeight": "700",
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
    "width": 13,
    "height": 11,
    "left": 27.5,
    "top": 88
  },
  "home1_item_left_star2918bd71": {
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
    "width": 12,
    "height": 13,
    "left": 43.5,
    "top": 87
  },
  "home1_group177": {
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
    "width": 211,
    "height": 98,
    "left": 13.5,
    "top": 275
  },
  "home1_group177_path2": {
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
    "shadowOpacity": 0.1607843137254902,
    "shadowOffset": {
      "width": 0,
      "height": 3
    },
    "shadowRadius": 9,
    "width": 211,
    "height": 98,
    "left": 0,
    "top": 0
  },
  "home1_group177_fbebbeb3176148b6B9706d0036fc7497": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "borderTopLeftRadius": 8,
    "borderTopRightRadius": 8,
    "borderBottomLeftRadius": 8,
    "borderBottomRightRadius": 8,
    "width": 79,
    "height": 80,
    "left": 5,
    "top": 9
  },
  "home1_group177_septemberCafe": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(84, 71, 65, 1)",
    "fontSize": 14,
    "fontWeight": "700",
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
    "width": 102,
    "height": 19,
    "left": 93,
    "top": 12
  },
  "home1_group177_group42": {
    "opacity": 0.6000000238418579,
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
    "width": 75,
    "height": 13,
    "left": 93,
    "top": 31
  },
  "home1_group177_group42_group37": {
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
    "width": 12,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "home1_group177_group42_group37_star0a606f87": {
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
    "width": 12,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "home1_group177_group42_group38": {
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
    "width": 12,
    "height": 13,
    "left": 16,
    "top": 0
  },
  "home1_group177_group42_group38_star86fded26": {
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
    "width": 12,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "home1_group177_group42_group39": {
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
    "width": 13,
    "height": 13,
    "left": 31,
    "top": 0
  },
  "home1_group177_group42_group39_starbd36aa98": {
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
    "width": 13,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "home1_group177_group42_group41": {
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
    "width": 13,
    "height": 13,
    "left": 62,
    "top": 0
  },
  "home1_group177_group42_group41_halfStar2": {
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
    "width": 13,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "home1_group177_group42_group113": {
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
    "width": 12,
    "height": 13,
    "left": 47,
    "top": 0
  },
  "home1_group177_group42_group113_star": {
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
    "width": 12,
    "height": 13,
    "left": 0,
    "top": 0
  },
  "home1_group177_group176": {
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
    "width": 104,
    "height": 27,
    "left": 94.5,
    "top": 51
  },
  "home1_group177_group176_pinclipartcommeetingClipartFree63947": {
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
    "left": 24,
    "top": 2
  },
  "home1_group177_group176_x2020624419991071872977076642162411729179112n": {
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
    "left": 52,
    "top": 1
  },
  "home1_group177_group176_aaaa": {
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
    "left": 79,
    "top": 0
  },
  "home1_group177_group176_image4": {
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
    "width": 15,
    "height": 15,
    "left": 0,
    "top": 2
  },
  "home1_group177_group176_x10Ngi": {
    "opacity": 0.6000000238418579,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(32, 19, 4, 1)",
    "fontSize": 6,
    "fontWeight": "700",
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
    "width": 24,
    "height": 8,
    "left": 22,
    "top": 19
  }
});