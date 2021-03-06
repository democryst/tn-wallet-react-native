import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import api from '../../API/RequestAPI.js';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var numeral = require('numeral');
var styles = require('../Resource/style.js');
const timer = require('react-native-timer');
var buttonState = true ;
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
     setButtonState(data) {
        const { navigate } = this.props.navigation;
        // const { params } = this.props.navigation.state;
    
        if (buttonState === true) {
        
            buttonState = false;
            timer.setTimeout(this, "Set button back to active", () => { buttonState = true }, 2000);
             navigate('TopUpResult', { data: { currentbalance: data.des_remain_balance, amount: data.amount, } })
        }}
    render() {
        // const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
                <View style={[styles.container, { paddingTop: responsiveHeight(12) }]}>

                    <View style={styles.rowContainer} >
                        <View style={[styles.rowContainer, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={styles.textTittle}>TopUp Amount:</Text>
                        </View>
                        <View style={[styles.rowContainer, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={styles.textAmount}>{numeral(params.data.amount).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.amount).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                    </View>

                    <View style={styles.linebar} />

                    <View style={styles.rowContainer} >
                        <View style={[styles.rowContainer, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={styles.textTittle}>Current Balance:</Text>
                        </View>
                        <View style={[styles.rowContainer, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={styles.textAmount}>{numeral(Math.floor(params.data.currentbalance)).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.currentbalance).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                    </View>

                    <View style={styles.linebar} />

                    <View style={styles.rowContainer} >
                        <View style={[styles.rowContainer, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={styles.textTittle}>New Balance:</Text>
                        </View>
                        <View style={[styles.rowContainer, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={styles.textAmount}>{numeral(Math.floor(params.data.amount + params.data.currentbalance)).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.amount + params.data.currentbalance).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                    </View>


                    <View style={styles.bottomContainer}>
                        <TouchableOpacity onPress={() => {
                            api.postTransactionTopUp(this.state.receiverId, this.state.currentbalance, this.state.amount)
                                .then(resp => resp.json())
                                .then((data) => {
                                    return api.getTransaction(data.transaction_id)
                                })
                                .then((data) => {
                                   this.setButtonState(data)
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