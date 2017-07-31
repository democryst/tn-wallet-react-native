import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RkButton, RkTheme, RkText } from 'react-native-ui-kitten';
import api from '../../API/RequestAPI.js';

var { height, width } = Dimensions.get('window');
//var numeral = require('numeral');

let accent = '#ed1c4d';

RkTheme.setType('RkButton', 'accent', {
  backgroundColor: accent,
  color: 'white'
});

// RkTheme.setType('RkText', 'basic', {
//   fontSize: 50,
//   color: 'midnightblue'
// });

RkTheme.setType('RkText', 'primaryBackground', {
  backgroundColor: theme => theme.colors.primary
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    api.getData(1234567890).then((data) => {
      this.setState(data[0]);
    });

  }
  static navigationOptions = {
    title: 'Home',
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    let pic = {
      uri: 'http://simpleicon.com/wp-content/uploads/account.png'
    };
    // var balance = numeral(this.state.balance).format('0,0');
    // var balanceStang = numeral(this.state.balance).format('.00');
    var balance = 0;
    var balanceStang = .00;
    return (
      <Image source={require('../Resource/img/pink_background.png')} style={styles.container}>
        <View style={styles.container_userbar}>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Image source={pic} style={styles.container_image_profile} />
          </View>
          <View style={styles.container_userdetail}>
            <RkText rkType='xlarge'>{`${this.state.name}  ${this.state.surname}`}</RkText>
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                    <RkText style={{ fontSize: 40 }}>{`${balance}`}</RkText>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 5 }}>
                    <RkText rkType='large'>{`${balanceStang}  `}</RkText>
                  </View>
                  <View style={{ flexDirection: 'column', justifyContent: 'flex-end', marginBottom: 5 }}>
                    <RkText rkType='xlarge'>THB</RkText>
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
            marginLeft: 8,
            marginRight: 8
          }}
        />

        <View style={styles.container_button}>
          <View style={[styles.menuContainer, { marginTop: 0 }]}>
            <TouchableOpacity onPress={() => navigate('EnterTransferIdScreen', { userId: this.state.account_id })} style={styles.button}>
              <View style={{ flexDirection: 'row' , marginLeft: -38}}>
                <View style={{marginTop: 10}}>
                  <Image source={pic} style={styles.icon} />
                </View>
                <View style={{ justifyContent: 'center', marginTop: 10, paddingLeft: 30 }}>
                  <RkText rkType='xxlarge'> Transfer </RkText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={[styles.menuContainer, { marginTop: 0 }]}>
            <TouchableOpacity onPress={() => alert("Not ready yet")} style={styles.button}>
              <View style={{ flexDirection: 'row' , marginLeft: -38}}>
                <View style={{marginTop: 10}}>
                  <Image source={pic} style={styles.icon} />
                </View>
                <View style={{ justifyContent: 'center', marginTop: 10, paddingLeft: 30 }}>
                  <RkText rkType='xxlarge'> Top Up </RkText>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 35,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  button: {
    backgroundColor: '#f88fb0',
    // backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    // flexDirection: "column",
    // justifyContent: "flex-end",
    // padding: 30,
    height: 100,
    width: width * 2 / 3,
    // marginRight: -100
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 1,
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
