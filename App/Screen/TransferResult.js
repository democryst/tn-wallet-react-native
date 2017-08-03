import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import api from '../../API/RequestAPI.js';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { NavigationActions } from 'react-navigation';

var { height, width } = Dimensions.get('window');
var numeral = require('numeral');
var moment = require('moment');
var timer = require('react-native-timer');
var buttonState = true ;

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
});

export default class TransferResult extends React.Component {
    static navigationOptions = {
        title: 'Transfer',
        headerLeft: null
    };

    constructor(props) {
        super(props);
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        this.state = {
            transactionResult: {},
            senderId: params.data.senderAccountInfo.senderID,
            senderName: params.data.senderAccountInfo.senderName,
            senderSurname: params.data.senderAccountInfo.senderSurname,
            receiverId: params.data.receiverAccountInfo.receiverID,
            receiverName: params.data.receiverAccountInfo.receiverName,
            receiverSurname: params.data.receiverAccountInfo.receiverSurname
        };

    }

    setButtonState(){
      const { navigate } = this.props.navigation;
      const { params } = this.props.navigation.state;
      if(buttonState === true){
        buttonState = false ;
        timer.setTimeout(this,"Set button back to active", ()=>{buttonState = true}, 2000);
        this.props.navigation.dispatch(resetAction);
      }
    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        api.getTransaction(params.result.transaction_id).then((data) => {
            this.setState({ transactionResult: data });
        });
    };


    render() {

        const { navigate } = this.props.navigation;
        let tempSenderId = this.state.senderId;
        let tempReceiverId = this.state.receiverId;
        let transactionID = numeral(this.state.transactionResult.id).format('0000000000');
        let amount = numeral(this.state.transactionResult.amount).format('0,0.00');
        let fee = numeral(this.state.transactionResult.src_remain_fee).format('0,0.00');
        let remain = numeral(this.state.transactionResult.src_remain_balance).format('0,0.00');
        // console.log(this.state.transactionResult.createdAt);
        let date = moment(this.state.transactionResult.createdAt).format("ddd DD-MM-YY HH:mm");


        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'green', fontSize: responsiveFontSize(3.8) }}>Success</Text>
                </View>
                <View style={{
                    flex: 6, borderWidth: 2, borderBottomWidth: 0, marginLeft: 10, marginRight: 10, borderColor: 'lightgrey',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginBottom: 10, marginTop: 5}}>
                            <Text style={{ color: 'grey', margin: 4 }}>Date</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{date}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginTop: 0 }}>
                            <Text style={{ color: 'grey', margin: 4 }}>Transaction ID</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{transactionID}</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'grey',
                                borderBottomWidth: 0.5,
                                marginLeft: 10,
                                marginRight: 10,
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                            <Text style={{ color: 'grey', margin: 4 }}>To</Text>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.receiverName}</Text>
                                <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.receiverSurname}</Text>
                                <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.8) }}>{tempReceiverId}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'grey',
                                borderBottomWidth: 0.5,
                                marginLeft: 10,
                                marginRight: 10,
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                            <Text style={{ color: 'grey', margin: 4 }}>From</Text>
                            <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.senderName}</Text>
                                <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.senderSurname}</Text>
                                <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.8) }}>{tempSenderId}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'grey',
                                borderBottomWidth: 0.5,
                                marginLeft: 10,
                                marginRight: 10,
                            }}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginBottom: 10 }}>
                            <Text style={{ color: 'grey', margin: 4 }}>Amount</Text>
                            <Text style={{ fontSize: responsiveFontSize(4), fontWeight: 'bold' }}>{amount} THB</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginTop: 0 }}>
                            <Text style={{ color: 'grey', margin: 4 }}>Fee</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{fee} THB</Text>
                        </View>
                        <View
                            style={{
                                borderBottomColor: 'grey',
                                borderBottomWidth: 0.5,
                                marginLeft: 10,
                                marginRight: 10,
                            }}
                        />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                            <Text style={{ color: 'grey', margin: 4 }}>Available Balance</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{remain} THB</Text>
                        </View>
                        <View />

                    </ScrollView>
                </View>
                <View style={styles.bottom_container}>
                    <TouchableOpacity style={styles.button} onPress={() => this.setButtonState()}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.text}>Done</Text>
                        </View>
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
        // padding: 10,
        height: 65,
        width: width,
    },
    text: {
        paddingTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
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
