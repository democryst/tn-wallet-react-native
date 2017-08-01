import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Button, Dimensions, TouchableWithoutFeedback } from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import api from '../../API/RequestAPI.js';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var textInputAmount = 0.00;
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
    let textInputId = params.data.receiverId.replace(new RegExp("-", 'g'), "");

    api.getData(params.data.userId).then((data) => {
      this.setState({ sender: data[0] });
    });

    api.getData(textInputId).then((data) => {
      this.setState({ receiver: data[0] });
    });


  }

  static navigationOptions = {
    title: 'Transfer',

  };
  onChangeText(text) {
    textInputAmount = text.replace(new RegExp(",", 'g'), "");
    this.state.amount = textInputAmount;
  }
  onChangePage() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    if (this.state.amount > this.state.sender.balance) {
      alert('Your money not enough')
    }
    else {
      navigate('TransferConfirm', {
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
      })
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (

      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
          <View style={{ flex: 1 }}>
            <ScrollView>
              <View style={styles.top_container}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                    <Text style={styles.text}>Receiver</Text>
                  </View>
                  <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 2 }]}>
                    <View>
                      <Text style={[styles.text_bold, { textAlign: "right" }]}> {params.data.receiverId}</Text>
                      <Text style={[styles.text_bold, { textAlign: "right" }]}> {this.state.receiver.name}</Text>
                      <Text style={[styles.text_bold, { textAlign: "right" }]}> {this.state.receiver.surname}</Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 0.5,
                    margin: 15
                  }}
                />

                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={styles.text_bold}> Amount (THB)</Text>

                  <TextInputMask style={styles.textInput}
                    text=''
                    maxLength={5}
                    onChangeText={this.onChangeText.bind(this)}
                    keyboardType='numeric'
                    placeholder={'0.00'}
                    type={'money'}
                    options={{

                      precision: 0,
                      separator: '.',
                      delimiter: ',',
                      unit: ''
                    }}
                  />
                  <View style={styles.avilableBalance}>
                    <Text style={styles.text_info}>Available balance {this.state.sender.balance} THB</Text>
                  </View>
                </View>

              </View>
            </ScrollView>
            <View style={styles.bottom_container}>
              <TouchableOpacity style={styles.button} onPress={() => this.onChangePage()}>
                <Text style={styles.text}>Next</Text>
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
    // marginTop: 10,
    backgroundColor: '#fff',
  },
  row_container: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  top_container: {
    flex: 3,
    margin: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
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
    // flexDirection: "column",
    padding: 25,
    width: width,
  },
  text: {
    textAlign: "center",
    fontSize: 20
  },
  text_bold: {
    fontWeight: "bold",
    fontSize: 25
  },
  text_info: {
    fontSize: 19,
    color: 'green',
  },
  avilableBalance: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 10,
  },
  textInput: {
    alignItems: 'flex-end',
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    height: 80,
    padding: 10,
    fontSize: 50,
    margin: 10,


  }
});
