import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');

export default class Result extends React.Component {
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
            <Text> {this.state.date}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Sender Name</Text>
            <Text> {this.state.senderName}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Sender ID</Text>
            <Text> {this.state.senderID}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Receiver Name</Text>
            <Text> {this.state.receiverName}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Receiver ID</Text>
            <Text> {this.state.receiverID}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Amount</Text>
            <Text> {this.state.amount}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Fee</Text>
            <Text> {this.state.fee}</Text>
          </View>
          <View style={styles.row_container}>
            <Text style={styles.text_bold}> Remaining</Text>
            <Text style={styles.text_info}> {this.state.remaining}</Text>
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
    margin: 10,
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  text:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  text_bold:{
    fontWeight: "bold",
    fontSize: 20
  },
  text_info:{
    fontSize: 24
  }
});
