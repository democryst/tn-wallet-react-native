import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import api from '../../API/RequestAPI.js';
import RestClient from 'react-native-rest-client';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var timer = require('react-native-timer');
var moment = require('moment');
var buttonState = true ;

export default class TransferConfirm extends React.Component {
  static navigationOptions = {
    title: 'Transfer',

  };
  constructor(props) {
    super(props);
    this.state = {}
  }

  setButtonState(senderId,receiverId,balance){
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    if(buttonState === true){
      buttonState = false ;
      timer.setTimeout(this,"Set button back to active", ()=>{buttonState = true}, 2000);
      api.postTransaction(senderId,
        params.data.senderAccountInfo.senderBalance,
        receiverId,
        params.data.receiverAccountInfo.receiverBalance,
        params.data.transferAmount
      )
      .then( resp=> resp.json())
      .then((resp)=>{
        navigate('TransferResult' , { result: resp , data: params.data ,remaining: balance}) ;
      })
      .catch((res)=>{
        console.log("temp resp");
        console.log(res)
      });
    }
  }

  postTransaction() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    var balance = params.data.senderAccountInfo.senderBalance - params.data.transferAmount;
    var receiverIdFormat= params.data.receiverAccountInfo.receiverID;
    var senderIdFormat=params.data.senderAccountInfo.senderID;
    console.log(receiverIdFormat);
    console.log(senderIdFormat);
    var receiverId= receiverIdFormat.replace(new RegExp("-", 'g'), "");
    var senderId=senderIdFormat.replace(new RegExp("-", 'g'), "");
    this.setButtonState(senderId,receiverId,balance);
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;


    var today = new Date();



    let date = moment(today).format("ddd DD-MM-YY HH:mm");
    return (

      <View style={styles.container}>
        <View style={styles.top_container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.textTitle}> Date</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.textInfoDate}> {date}</Text>
            </View>
          </View>

          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              margin: 15
            }}
          />

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.textTitle}>From</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <View>
                <Text style={[styles.textInfo, { textAlign: "right" }]}> {params.data.senderAccountInfo.senderName}</Text>
                <Text style={[styles.textInfo, { textAlign: "right" }]}> {params.data.senderAccountInfo.senderSurname}</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              {/* <Text style={styles.textTitle}> Sender ID</Text> */}
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.textInfo}> {params.data.senderAccountInfo.senderID}</Text>
            </View>
          </View>

          <View style={styles.lineBar} />

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.textTitle}>To</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <View>
                <Text style={[styles.textInfo, { textAlign: "right" }]}> {params.data.receiverAccountInfo.receiverName}</Text>
                <Text style={[styles.textInfo, { textAlign: "right" }]}> {params.data.receiverAccountInfo.receiverSurname}</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              {/* <Text style={styles.textTitle}> Receiver ID</Text> */}
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.textInfo}> {params.data.receiverAccountInfo.receiverID}</Text>
            </View>
          </View>

          <View style={styles.lineBar} />

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.textTitle}> Amount</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.textInfo}> {params.data.transferAmount}  THB</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.textTitle}> Fee</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.textInfo}> 0.00  THB</Text>
            </View>
          </View>

        </View>

        <View style={styles.bottom_container}>
          <TouchableOpacity style={styles.button} onPress={() => { this.postTransaction() }}>
            <Text style={styles.text_button}>Confirm</Text>
          </TouchableOpacity>

        </View>

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
  text_button: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: responsiveFontSize(3)
  },
  row_container: {
    // justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  top_container: {
    flex: 3,
    backgroundColor: '#fff',
   marginTop:15,
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
  textTitle: {
    fontSize: responsiveFontSize(2.0),
    color: 'grey'
  },
  textInfo: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: "bold",
  },
   textInfoDate: {
    fontSize: responsiveFontSize(2),
    fontWeight: "bold",
  },
  lineBar: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    margin: 15
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: responsiveFontSize(3)
  },
});
