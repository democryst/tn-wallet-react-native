import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
import api from '../../API/RequestAPI.js';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var numeral = require('numeral');
var styles = require('../Resource/style.js');
const timer = require('react-native-timer');
var buttonState = true ;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
});

export default class TopUpResult extends React.Component {
    static navigationOptions = {
        title: 'Top Up Result',
        headerLeft: null
    };

    constructor(props) {
        super(props);
        this.state = {

            receiverId: null
        };

    }
     setButtonState() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        if (buttonState === true) {
            buttonState = false;
            timer.setTimeout(this, "Set button back to active", () => { buttonState = true }, 2000);
            navigate('Home')
        }}
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        var balance = numeral(this.state.currentbalance).format('0,0');
        var balanceStang = numeral(this.state.currentbalance).format('.00');

        return (
            /* Success */
            <View style={styles.container}>
                <View style={[styles.topContainer, { flex: 1}]} >
                    <Text style={[styles.textStatus,{color:'green'}]}>
                        Success
                            </Text>
                </View >
                
                <View style={{
                    flex: 4, borderWidth: 2,borderBottomWidth:0, marginLeft: 10, marginRight: 10, borderColor: 'lightgrey',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3
                }}>
                    <ScrollView>
                        {/* TOPUP BALANCE */}
                        <View style={[styles.rowContainer, { flex: 1, marginTop: 20 }]} >
                            <View style={[styles.rowContainer, { justifyContent: 'flex-start', flex: 1 }]}>
                                <Text style={styles.textTittle}>TopUp Balance:</Text>
                            </View>
                            <View style={[styles.rowContainer, { justifyContent: 'flex-end', flex: 1}]}>
                                <Text style={styles.textAmount}>{numeral(params.data.amount).format('0,0')}</Text>
                                <Text style={styles.textAmountSatang}>{numeral(params.data.amount).format('.00')}</Text>
                                <Text style={styles.textAmountTHB}>THB</Text>

                            </View>
                        </View>


                        {/* CURRENT BALANCE */}
                        <View style={[styles.rowContainer, { flex: 1 }]} >
                            <View style={[styles.rowContainer, { justifyContent: 'flex-start', flex: 1 }]}>
                                <Text style={styles.textTittle}>Current Balance:</Text>
                            </View>
                            <View style={[styles.rowContainer, { justifyContent: 'flex-end', flex: 1 }]}>
                                <Text style={styles.textAmount}>{numeral(params.data.currentbalance).format('0,0')}</Text>
                                <Text style={styles.textAmountSatang}>{numeral(params.data.currentbalance).format('.00')}</Text>
                                <Text style={styles.textAmountTHB}>THB</Text>

                            </View>
                        </View>

                    </ScrollView>
                </View>

                {/* DONE BUTTON */}
                <View style={[styles.bottomContainer, { }]}>
                    <TouchableOpacity onPress={() => this.setButtonState()}>
                        <View style={styles.button}>
                            <Text style={styles.text}>Done</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}
