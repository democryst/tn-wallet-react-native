import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
import api from '../../API/RequestAPI.js';



export default class TransferCheckReceiver extends React.Component {


  constructor(props) {
    super(props);
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    this.state = {
      amount: 0.00,
      sender: "",
      receiver: "",

    };

    api.getData(params.data.userId).then((data) => {
      this.setState({ sender: data[0] });
    });

    api.getData(params.data.receiverId).then((data) => {
      this.setState({ receiver: data[0] });
    });


  }

  static navigationOptions = {
    title: 'Transfer',

  };



  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
          <View style={{ flex: 1 }}>
            <View style={styles.top_container}>
              <View style={styles.box}>
                <View ><Text style={styles.text_bold}> Receiver Name</Text></View>
                <Text style={styles.text_info}> {`${this.state.receiver.name} ${this.state.receiver.surname}`}</Text>
              </View>
              <View style={styles.box}>
                <View ><Text style={styles.text_bold}> ReceiverID</Text></View>
                <Text style={styles.text_info}> {`${params.data.receiverId}`}</Text>
              </View>

              <View style={styles.box}>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}><Text style={styles.text_bold}> Amount</Text></View>
                <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}><TextInput style={styles.textinput1} keyboardType='numeric'
                  placeholder={'0.00'} onChangeText={(amount) => this.setState({ amount })} /></View>
              </View>
              <View style={styles.box}></View>

            </View>

            <View style={styles.bottom_container}>
              <TouchableOpacity style={styles.button} onPress={() => navigate('TransferConfirm', {
                data: {
                  senderAccountInfo: {
                    senderName: this.state.sender.name,
                    senderSurname: this.state.sender.surname,
                    senderID: this.state.sender.account_id,
                    senderBalance: this.state.sender.balance
                  },
                  receiverAccountInfo: {
                    receiverName: this.state.receiver.name,
                    receiverSurname: this.state.receiver.surname,
                    receiverID: this.state.receiver.account_id,
                    receiverBalance: this.state.receiver.balance
                  },
                  transferAmount: this.state.amount
                }
              })}>
                <Text style={styles.text}>Next ></Text>
              </TouchableOpacity>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  top_container: {
    flex: 3,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  bottom_container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    justifyContent: "flex-end",
  },
  button: {
    // backgroundColor: '#f88fb0',
    backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    flexDirection: "column",
    padding: 25,
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textinput1: {
    // paddingLeft: 20,
    paddingRight: 20,
    width: 250,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontWeight: 'bold',
  },
  text_bold: {
    fontWeight: "bold",
    fontSize: 24
  },
  text_info: {
    fontSize: 20
  }
});
