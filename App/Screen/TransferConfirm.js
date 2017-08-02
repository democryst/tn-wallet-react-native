import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
var { height, width } = Dimensions.get('window');
import api from '../../API/RequestAPI.js';
import RestClient from 'react-native-rest-client';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';


export default class TransferConfirm extends React.Component {
  static navigationOptions = {
    title: 'Transfer',

  };
  constructor(props) {
    super(props);
    this.state = {}
  }

  postTransaction() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    var balance = params.data.senderAccountInfo.senderBalance - params.data.transferAmount;
    api.postTransaction(params.data.senderAccountInfo.senderID,
      params.data.senderAccountInfo.senderBalance,
      params.data.receiverAccountInfo.receiverID,
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

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    today = dd + '/' + mm + '/' + yyyy;
    return (

      <View style={styles.container}>
        <View style={styles.top_container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.textTitle}> Date</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.textInfo}> {today}</Text>
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
              <Text style={styles.textInfo}> {params.data.transferAmount}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
              <Text style={styles.textTitle}> Fee</Text>
            </View>
            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
              <Text style={styles.textInfo}> 0.00</Text>
            </View>
          </View>

        </View>

        <View style={styles.bottom_container}>
          <TouchableOpacity style={styles.button} onPress={() => { this.postTransaction() }}>
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
  textTitle: {
    fontSize: responsiveFontSize(2.0),
    color: 'grey'
  },
  textInfo: {
    fontSize: responsiveFontSize(2.5),
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
