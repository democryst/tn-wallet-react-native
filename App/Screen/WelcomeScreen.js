import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions, Platform, PixelRatio } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RkButton, RkTheme, RkText } from 'react-native-ui-kitten';
import api from '../../API/RequestAPI.js';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var { height, width } = Dimensions.get('window');
var numeral = require('numeral');

let accent = '#ed1c4d';


RkTheme.setType('RkButton', 'accent', {
  backgroundColor: accent,
  color: 'white'
});



RkTheme.setType('RkText', 'primaryBackground', {
  backgroundColor: theme => theme.colors.primary
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    api.getData(6302335476).then((data) => {
      this.setState(data[0]);
    });

  }


  componentDidMount(){
      const timer = require('react-native-timer');
      timer.setInterval("Update_money", ()=>{api.getData(6302335476).then((data) => {
        this.setState(data[0]);
      });}, 5000);
  }


  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
  };

  renderUserMessage() {
    const { navigate } = this.props.navigation;
    if (Platform.OS === 'ios') {
      return (
        <View style={styles.container_button}>
          <View style={[styles.menuContainer, { marginTop: 0 }]}>
            <TouchableOpacity onPress={() => navigate('EnterTransferIdScreen', { userId: this.state.account_id })} style={[styles.buttoniOS]}>
              <View style={{ marginLeft: 0 }}>
                <View style={{ flexDirection: 'row', marginLeft: -38 }}>
                  <View>
                    <Image source={require('../Resource/img/transfer_ios.png')} style={[styles.icon, { marginTop: responsiveHeight(1.5) }]} />
                  </View>
                  <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: responsiveHeight(2.5), marginLeft: 20 }}>
                    <RkText style={{ fontSize: responsiveFontSize(3) }}> Transfer </RkText>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.menuContainer, { marginTop: 0 }]}>
            <TouchableOpacity onPress={() => navigate('TopUpSelectAmountScreen', { userId: this.state.account_id, balance: this.state.balance })} style={styles.buttoniOS}>
               <View style={{ flexDirection: 'row', marginLeft: -38 }}>
                <View>
                  <Image source={require('../Resource/img/topup_ios.png')} style={[styles.icon, { marginTop: responsiveHeight(1.5) }]} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: responsiveHeight(2.5), marginLeft: 20 }}>
                  <RkText style={{ fontSize: responsiveFontSize(3) }}> Top Up </RkText>
                </View>
              </View>   
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.container_button}>
          <View style={[styles.menuContainer, { marginTop: 0 }]}>
            <TouchableOpacity onPress={() => navigate('EnterTransferIdScreen', { userId: this.state.account_id })} style={[styles.buttonAndroid]}>
              <View style={{ marginLeft: 0 }}>
                <View>
                  <Image source={require('../Resource/img/transfer_android.png')} style={{ height: 85, width: 250 }} />
                </View>
                {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: responsiveHeight(2.5), marginLeft: 20 }}>
                  <RkText style={{ fontSize: responsiveFontSize(3) }} > Transfer </RkText>
                </View> */}
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.menuContainer, { marginTop: 0 }]}>
            <TouchableOpacity onPress={() => navigate('TopUpSelectAmountScreen', { userId: this.state.account_id, balance: this.state.balance })} style={styles.buttonAndroid}>
              <View style={{ marginLeft: 0 }}>
                <View>
                  <Image source={require('../Resource/img/topup_android.png')} style={{ height: 85, width: 250 }} />
                </View>
                
              </View>
      
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    let pic = {
      uri: 'http://simpleicon.com/wp-content/uploads/account.png'
    };
    var balance = Math.floor(this.state.balance);
    var balanceStang = numeral(this.state.balance).format('.00');
    return (
      <Image source={require('../Resource/img/pink_background.png')} style={styles.container}>
        <View style={styles.container_userbar}>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Image source={require('../Resource/img/ploy.jpg')} style={styles.container_image_profile} />
          </View>
          <View style={styles.container_userdetail}>
            <RkText style={{ fontSize: responsiveFontSize(2) }}>{`${this.state.name}  ${this.state.surname}`}</RkText>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <RkText style={{ fontSize: responsiveFontSize(4.5) }}>{`${balance}`}</RkText>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 4 }}>
                    <RkText style={{ fontSize: responsiveFontSize(2.2) }}>{`${balanceStang}  `}</RkText>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 3 }}>
                    <RkText style={{ fontSize: responsiveFontSize(3) }}>THB</RkText>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>
        <View
          style={{
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: responsiveHeight(1),
            marginBottom: responsiveHeight(1),
          }}
        />

          { this.renderUserMessage() }



      </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  container_image_profile: {
    width: responsiveHeight(14),
    height: responsiveHeight(14),
    borderRadius: 50 * (responsiveHeight(14) / 100),
    margin: 38,
    borderWidth: 3,
    borderColor: 'lightgrey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  icon: {
    width: responsiveHeight(11),
    height: responsiveHeight(11),
    borderRadius: 50 * (responsiveHeight(11) / 100),
    borderWidth: 3,
    borderColor: 'lightgrey',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,

  },
  container_userdetail: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  container_userbar: {
    marginTop: responsiveHeight(1),
    flex: 1.5,
    flexDirection: 'row',
  },
  container_button: {
    flex: 5,
    justifyContent: 'space-around',
    // borderWidth: 1,
    margin: 15,
    marginRight: 0,
    // flexDirection: 'column',
    paddingBottom: 100
  },
  menuContainer: {
    // flex: 1,
    // marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  buttonAndroid: {
    //backgroundColor: '#f88fb0',
    // backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    // flexDirection: "column",
    // justifyContent: "flex-end",
    // padding: 30,
    height: responsiveHeight(14),
    width: width * 2 / 3,
    // marginRight: -100
    //shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    // elevation: 1,
  },
  buttoniOS: {
    backgroundColor: '#f88fb0',
    // backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    // flexDirection: "column",
    // justifyContent: "flex-end",
    // padding: 30,
    height: responsiveHeight(14),
    width: width * 2 / 3,
    // marginRight: -100
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    // elevation: 1,
  },
  font_standard: {
    fontSize: 15,

  },
  font_money: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10,
  }



})
