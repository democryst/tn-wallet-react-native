import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import api from '../../API/RequestAPI.js';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var numeral = require('numeral');
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class TopUpAmount extends React.Component {
    static navigationOptions = {
        title: 'Top Up Amount',

    };
    constructor(props) {
        super(props);

        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        this.state = {
            receiverId: params.data.userId,
            currentbalance: params.data.currentbalance,
            amount: params.data.amount
        };



    }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
                <View style={[styles.container,{paddingTop:responsiveHeight(12)}]}>

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={{ fontSize: responsiveFontSize(2.5),color:"gray" }}>TopUp Balance:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={{ fontSize: responsiveFontSize(3.5),fontWeight: "bold" }}>{numeral(params.data.amount).format('0,0')}</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.5), paddingRight: 20 ,paddingTop:8}}>{numeral(params.data.amount).format('.00')}</Text>
                            <Text style={{ fontSize: responsiveFontSize(3) ,paddingTop:3 }}>THB</Text>

                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            margin: 15
                        }}
                    />

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={{ fontSize: responsiveFontSize(2.5) ,color:"gray",paddingTop:7 }}>Current Balance:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={{ fontSize: responsiveFontSize(3.5),fontWeight: "bold" }}>{numeral(params.data.currentbalance).format('0,0')}</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.5), paddingRight: 20,paddingTop:8 }}>{numeral(params.data.currentbalance).format('.00')}</Text>
                            <Text style={{ fontSize: responsiveFontSize(3),paddingTop:8 }}>THB</Text>

                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            margin: 15
                        }}
                    />

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={{ fontSize: responsiveFontSize(2.5),color:"gray" }}>New Balance:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1}]}>
                            <Text style={{ fontSize: responsiveFontSize(3.5) ,fontWeight: "bold"}}>{numeral(params.data.amount + params.data.currentbalance).format('0,0')}</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.5), paddingRight: 20,paddingTop:10 }}>{numeral(params.data.amount + params.data.currentbalance).format('.00')}</Text>
                            <Text style={{ fontSize: responsiveFontSize(3),paddingTop:3 }}>THB</Text>

                        </View>
                    </View>




                    <View style={styles.bottom_container}>
                        <TouchableOpacity onPress={() => {
                            {/* console.log("state account : ", this.state.receiverId) */ }
                            api.postTransactionTopUp(this.state.receiverId, this.state.currentbalance, this.state.amount)
                                .then(resp => resp.json())
                                .then((data) => {
                                    {/* console.log("postTransactionTopUp")
                                console.log(data) */}
                                    return api.getTransaction(data.transaction_id)
                                })
                                .then((data) => {
                                    navigate('TopUpResult', { data: { currentbalance: data.des_remain_balance, amount: data.amount, } })
                                })
                                .catch((err) => {
                                    console.log("error ", err)
                                })
                        }}>
                            <View style={styles.button}>
                                <Text style={styles.text}>Confirm</Text>
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
        fontSize: responsiveFontSize(3.5)
    },
    text_bold: {
        fontWeight: "bold",
        fontSize: 20
    },
    text_info: {
        fontSize: 24
    },
    textInput: {
        borderWidth: 1,
        height: 50,
        padding: 10,
        fontSize: 25,


    },

    input: {
        height: 100,
        padding: 10,
        fontSize: 40,
        // borderWidth: 1,
        // borderRadius: 30,
        width: width * 0.7,
        margin: 40,
        color: "gray",


    },
});

