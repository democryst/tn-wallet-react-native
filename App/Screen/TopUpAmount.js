import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import api from '../../API/RequestAPI.js';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var numeral = require('numeral');
var styles = require('../Resource/style.js');
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
                <View style={[styles.container, { paddingTop: responsiveHeight(12) }]}>

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={styles.textTittle}>TopUp Amount:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={styles.textAmount}>{numeral(params.data.amount).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.amount).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                    </View>

                    <View style={styles.underline} />

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={styles.textTittle}>Current Balance:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={styles.textAmount}>{numeral(params.data.currentbalance).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.currentbalance).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                    </View>

                    <View style={styles.underline} />

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={styles.textTittle}>New Balance:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                            <Text style={styles.textAmount}>{numeral(params.data.amount + params.data.currentbalance).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.amount + params.data.currentbalance).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

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