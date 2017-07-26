import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default class TransferCheckReceiver extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      receiverName: "ธนาคารออมสิน",
      receiverID: "0000000000",
      amount: "0.00",
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View  style={styles.top_container}>
          <View style={styles.box}>
            <View style={styles.boxtext}><Text style={styles.text_bold}> Receiver Name</Text></View>
            <Text style={styles.text_info}> {this.state.receiverName}</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.boxtext}><Text style={styles.text_bold}> ReceiverID</Text></View>
            <Text style={styles.text_info}> {this.state.receiverID}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.boxtext}><Text style={styles.text_bold}> Amount</Text></View>
            <TextInput style={styles.textinput1} keyboardType='numeric' value={this.state.amount} onChangeText={(amount)=>this.setState({amount})}/>
          </View>

        </View>

        
        
        <View style={styles.bottom_container}>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.text}>Next ></Text>
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
