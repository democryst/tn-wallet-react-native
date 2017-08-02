import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import api from '../../API/RequestAPI.js';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var numeral = require('numeral');
var styles = require('../Resource/style.js');
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export default class TopUpResult extends React.Component {
    static navigationOptions = {
        title: 'Top Up Result',

    };
    constructor(props) {
        super(props);
        this.state = {

            receiverId: null
        };

    }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        var balance = numeral(this.state.currentbalance).format('0,0');
        var balanceStang = numeral(this.state.currentbalance).format('.00');

        return (
            <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
                <View style={styles.container}>
                    <View style={styles.top_container} >
 
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: responsiveFontSize(8), color: 'green', margin: 40, fontWeight: "bold", }}>
                                Success
                                 </Text>
                        </View>
                    </View >

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={{ fontSize: responsiveFontSize(2.5), color: "gray", paddingTop: responsiveHeight(2) }}>TopUp Amount:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1, paddingTop: 20 }]}>
                            <Text style={styles.textAmount}>{numeral(params.data.amount).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.amount).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                    </View>

                    <View style={styles.underline} />

                    <View style={styles.row_container} >
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <Text style={{ fontSize: responsiveFontSize(2.5), color: "gray" }}>Current Balance:</Text>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1, borderWidth: 1, paddingTop: responsiveHeight(1) }]}>
                            <Text style={styles.textAmount}>{numeral(params.data.currentbalance).format('0,0')}</Text>
                            <Text style={styles.textAmountSatang}>{numeral(params.data.currentbalance).format('.00')}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                    </View>

                    <View style={styles.underline} />

                    <View style={styles.bottom_container}>
                        <TouchableOpacity onPress={() => navigate('Home')}>
                            <View style={styles.button}>
                                <Text style={styles.text}>Done</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </TouchableWithoutFeedback>

        );
    }
}