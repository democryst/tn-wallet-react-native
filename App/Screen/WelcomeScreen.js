import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import api from '../../API/RequestAPI.js';

var { height, width } = Dimensions.get('window');

var testTranferRequest = function(){
    fetch('http://188.166.214.163/transactions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: "transfer",
        src_acc_id: "1234567890",
        src_initial_balance: "2000",
        des_acc_id: "7582983660",
        des_initial_balance: "0",
        amount: "300",
        src_remain_balance: "1700",
        des_remain_balance: "300"
      })
    })
}



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
    var balance = parseFloat(this.state.balance).toFixed(2);
    return (
      <Image source={require('../Resource/img/pink_background.png')} style={styles.container}>
        <View style={styles.container_userbar}>
          <View>
            <Image source={pic}
              style={styles.container_image_profile}
            />
          </View>
          <View style={styles.container_userdetail}>

            <Text style={styles.font_standard}>{`${this.state.name} ${this.state.surname}`}</Text>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
                <Text style={styles.font_money}>{balance}</Text>
              </View>
              <View style={{ flexDirection: 'column', justifyContent: 'flex-end' , marginBottom: 3}}>
                <Text style={styles.font_standard}>THB</Text>
              </View>
            </View>
          </View>


        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 3,
            margin: 15
          }}
        />
        <View style={styles.container_button}>
          <View style={styles.button_box}>
            <TouchableOpacity onPress={() => navigate('EnterTransferIdScreen', { userId: this.state.account_id })} style={styles.button}>
              <Text> Transfer </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button_box}>
            <TouchableOpacity onPress={() => testTranferRequest()} style={styles.button}>
              <Text> Top Up </Text>
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
    margin: 40,
  },
  container_userdetail: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 40,
    backgroundColor: 'transparent'
  },
  container_userbar: {
    flex: 3,
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
