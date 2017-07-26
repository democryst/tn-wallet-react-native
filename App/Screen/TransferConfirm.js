import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');

export default class TransferConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "25/7/17",
      senderName: "Thanaporn",
      senderSurname: "Suwathanawongchai",
      senderID: "6302335476",
      receiverName: "Phansawuth",
      receiverSurname: "Jenthaworn",
      receiverID: "7582983660",
      amount: "500.00",
      fee: "0.00",
      remaining: "4,200.00"
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.top_container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.text_bold}> Date</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.text_info}> {this.state.date}</Text>
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
              <Text style={styles.text_bold}> Sender Name</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <View>
                <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.senderName}</Text>
                <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.senderSurname}</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.text_bold}> Sender ID</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.text_info}> {this.state.senderID}</Text>
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
              <Text style={styles.text_bold}> Receiver Name</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <View>
                <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.receiverName}</Text>
                <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.receiverSurname}</Text>
              </View>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.text_bold}> Receiver ID</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.text_info}> {this.state.receiverID}</Text>
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
              <Text style={styles.text_bold}> Amount</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.text_info}> {this.state.amount}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.text_bold}> Fee</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.text_info}> {this.state.fee}</Text>
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
              <Text style={styles.text_bold}> Remaining</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.text_info}> {this.state.remaining}</Text>
            </View>
          </View>

        </View>

        <View style={styles.bottom_container}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('TransferResult', { user: 'Lucy' })}>
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
    // justifyContent: 'space-between',
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
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25
  },
  text_bold: {
    fontWeight: "bold",
    fontSize: 22
  },
  text_info: {
    fontSize: 19
  }
});
