import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Modal } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import api from '../../API/RequestAPI.js';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var timer = require('react-native-timer');
var buttonState = true;
var styles = require('../Resource/style.js');

var textInputId = null;
var textInputIdFormat = null;
export default class EnterTransferScreen extends React.Component {

  static navigationOptions = {
    title: 'Transfer',

  };

  constructor(props) {
    super(props);
    this.state = { receiverId: null };
    this.onChangePage = this.onChangePage.bind(this);
    this.onChangeText = this.onChangeText.bind(this);

  }

  onChangeText(text) {
    textInputIdFormat = text;
    textInputId = text.replace(new RegExp("-", 'g'), "");
    // this.setState({ receiverId: textInputId });
    this.state.receiverId = textInputId;
  }

  setButtonState(action) {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    if (buttonState === true) {
      buttonState = false;
      timer.setTimeout(this, "Set button back to active", () => { buttonState = true }, 2000);
      if (action == 'Pass') {
        navigate('TransferCheckReceiver', { data: { userId: params.userId, receiverId: this.state.receiverId } });
      }
    }
  }

  onChangePage() {

    const { params } = this.props.navigation.state;
    if (textInputId !== '' && textInputId !== null) {
      if (textInputId !== params.userId.replace(new RegExp("-", 'g'), "")) {
        api.getData(this.state.receiverId.replace(new RegExp("-", 'g'), "")).then((data) => {
          if (data[0] === undefined) {
            this.setButtonState('notPass');
            alert("Invalid account.");
          }
          else {
            this.state.receiverId = textInputIdFormat;
            this.setButtonState('Pass');
          }

        });
      }
      else {
        this.setButtonState('notPass');
        alert("Can't transfer to your own account.");
      }
    }
    else {
      this.setButtonState('notPass');
      alert("Please fill in account number.");
    }
  }

  render() {


    return (
      <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
        <View style={styles.container}>

          <View style={styles.inputBox} >
            <Text style={[styles.textTittle, { color: 'black' }]} >Receiver Account Number</Text>

            <TextInputMask underlineColorAndroid='transparent' style={styles.textInput}
              text=""
              onChangeText={this.onChangeText.bind(this)}
              keyboardType='numeric'
              type={'custom'}
              options={{
                mask: '999-9-999999'
              }} />

          </View >
          <View style={styles.bottomContainer}>
            {/* <TouchableOpacity onPress={() => navigate('TransferCheckReceiver', { data: { userId: params.userId, receiverId: this.state.receiverId } })}> */}
            <TouchableOpacity onPress={() => this.onChangePage()}>
              <View style={styles.button}>
                <Text style={styles.text}>Next</Text>
              </View>
            </TouchableOpacity>

          </View>

        </View>
      </TouchableWithoutFeedback>

    );
  }
}
