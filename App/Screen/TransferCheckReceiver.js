import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';


export default class TransferCheckReceiver extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      date: "25/7/17",
      senderName: "TN Group",
      senderID: "1212312121",
      receiverName: "ธนาคารออมสิน",
      receiverID: "0000000000",
      amount: "0.00",
      fee: "0.00",
      remaining: "0.00"
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.top_container}>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Date</Text>
            <Text style={styles.text_info}> {this.state.date}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Sender Name</Text>
            <Text style={styles.text_info}> {this.state.senderName}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.boxtext}><Text style={styles.text}>Amount</Text></View>
            <TextInput style={styles.textinput1} keyboardType='numeric' value={this.state.amount} onChangeText={(amount)=>this.setState({amount})}/>
          </View>

        </View>

        <View style={{ flex: 2, flexDirection:'column', alignItems: 'flex-end' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>{}} style={styles.button}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Confirm</Text>
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  row_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  top_container: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
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
    textinput1:{
    paddingLeft:20,
    width: 250,
    fontSize: 50 ,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontWeight: 'bold'
  },
  text_bold:{
    fontWeight: "bold",
    fontSize: 24
  },
  text_info:{
    fontSize: 20
  }
});
