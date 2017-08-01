import React, { Component } from 'react';
import { RkButton, RkTextInput, RkTheme, RkText, RkAvoidKeyboard, RkCard } from 'react-native-ui-kitten';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import api from '../../API/RequestAPI.js';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');

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

  onChangePage() {
    
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    api.getData(this.state.receiverId).then((data) => {
      if (textInputId != null) {
        if (data[0] === undefined) {
          alert("Account Invalid");
        }
        else {
           this.state.receiverId = textInputId;
          navigate('TransferCheckReceiver', { data: { userId: params.userId, receiverId: this.state.receiverId } });

        }
      } else {
        alert("Please fill account nummber");
      }

    });



  }

  render() {


    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    return (
      <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
        <View style={styles.container}>

          <View style={styles.top_container} >
            <RkText style={{ fontSize: responsiveFontSize(2.5) }} >Receiver Account Number</RkText>

            <TextInputMask style={styles.textInput}
              text=""
              onChangeText={this.onChangeText.bind(this)}
              keyboardType='numeric'
              type={'custom'}
              options={{
                mask: '999-9-999999'
              }} />

            {/* <TextInput
              maxLength={10}
           keyboardType='numeric'
              style={styles.textInput}
              placeholder='XXX-X-XXXXXX'
              
              onChangeText={(receiverId) => this.setState({ receiverId })}
            />   */}
          </View >
          <View style={styles.bottom_container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  top_container: {
    flex: 3,
    margin: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bottom_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  button: {
    // backgroundColor: '#f88fb0',
    backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    // flexDirection: "column",
    // justifyContent: "flex-end",
    padding: 20,
    width: width,

  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: responsiveFontSize(3)
  },
  text_bold: {
    fontWeight: "bold",
    fontSize: 25
  },
  text_info: {
    fontSize: 24
  },
  textInput: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    height: 50,
    padding: 10,
    fontSize: 25,
    margin:10


  }

});
RkTheme.setType('RkText', 'xlarge', {
  fontWeight: "bold",


});

