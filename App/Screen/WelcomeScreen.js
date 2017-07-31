import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { RkButton, RkTheme, RkText } from 'react-native-ui-kitten';
import api from '../../API/RequestAPI.js';

var { height, width } = Dimensions.get('window');
var numeral = require('numeral');

// var testTranferRequest = function(){
//     fetch('http://188.166.214.163/transfer/', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         type: 'transfer',
//         scrc_acc_id: '1234567890',
//         des_acc_initial_id: '9876543210',
//         des_acc_initial_balance: 2000,
//         amount: 300,
//         src_remain_balance: 1700,
//         des_remain_balance: 5000,
//       })
//     })
// }

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
    var balance = numeral(this.state.balance).format('0,0');
    var balanceStang = numeral(this.state.balance).format('.00');
    return (
      <Image source={require('../Resource/img/pink_background.png')} style={styles.container}>
        <View style={styles.container_userbar}>
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            <Image source={pic}
              style={styles.container_image_profile}
            />
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
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            margin: 10
          }}
        />

        <View style={styles.container_button}>
          <View style={styles.button_box}>
            <TouchableOpacity onPress={() => navigate('EnterTransferIdScreen', { userId: this.state.account_id })} style={styles.button}>
              <Text> Transfer </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_box}>
            <TouchableOpacity onPress={() => alert("Not ready yet")} style={styles.button}>
              <Text> Top Up </Text>
            </TouchableOpacity>
            {/* <RkText rkType='primaryBackground'>KUY </RkText>
            <RkButton rkType='accent'>
              Click me.
            </RkButton> */}
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
    margin: 40,
    borderWidth: 1
  },
  container_userdetail: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  container_userbar: {
    flex: 2,
    flexDirection: 'row',
  },
  container_button: {
    flex: 5,
    flexDirection: 'column',
    padding: 40,
  },
  button_box: {
    flex: 1,
    paddingTop: 30,
  },
  button: {
    // backgroundColor: '#f88fb0',
    backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    // flexDirection: "column",
    // justifyContent: "flex-end",
    padding: 20,

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
