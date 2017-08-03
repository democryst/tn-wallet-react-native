import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image } from 'react-native';
var { height, width } = Dimensions.get('window');
import api from '../../API/RequestAPI.js';
import RestClient from 'react-native-rest-client';

var { height, width } = Dimensions.get('window');
var numeral = require('numeral');
const timer = require('react-native-timer');
var styles = require('../Resource/style.js');
var buttonState = true;
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
export default class TransferConfirm extends React.Component {
    static navigationOptions = {
        title: 'Top Up Amount',

    };
    constructor(props) {
        super(props);
        this.state = {
            date: "25/7/17",
            currentbalance: 0,
            amount: 0,
            topupselectchoice: {
                first: 50,
                second: 100,
                third: 500,
                fourth: 1000,
            },
            TopUpNote: "",
            walletLimit: 5000,
            topupallow: false,
            apidata: "",
            button_pressed: {
                first_button: false,
                second_button: false,
                third_button: false,
                fourth_button: false
            }

        }
        this.getAccount();
        this.checkwallet = this.checkwallet.bind(this);
        this.checkwalletlimit = this.checkwalletlimit.bind(this);
        this.moveTopUpAmount = this.moveTopUpAmount.bind(this);
    }
    checkwalletlimit(topupchoice) {
        this.state.amount = topupchoice
        this.checkwallet(topupchoice);
    }
    checkwallet(amount) {

        if ((this.state.currentbalance + amount) > this.state.walletLimit) {


            this.state.topupallow = false
            this.state.TopUpNote = "Maximum limit exceeded"
        }
        else if ((this.state.currentbalance + amount) <= this.state.walletLimit) {

            this.state.topupallow = true


        }
    }
    getAccount() {
        const { params } = this.props.navigation.state;
        console.log(params.userId)
        api.getData(params.userId).then((data) => {
            this.setState({ apidata: data[0], currentbalance: data[0].balance });
            console.log("balance : " + this.state.currentbalance)
        })
            .catch((err) => {
                console.log("error in get account topupselect : ", err)
            });

    }
    setButtonState() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        if (buttonState === true) {
            buttonState = false;
            timer.setTimeout(this, "Set button back to active", () => { buttonState = true }, 2000);
            navigate('TopUpAmount', {
                data: {
                    amount: this.state.amount,
                    currentbalance: this.state.currentbalance,
                    apidata: this.state.apidata,
                    userId: params.userId
                }
            })
        }
    }
    moveTopUpAmount() {
        if (this.state.topupallow) {
            this.setButtonState()
        }


    }

    render() {
        var balance = numeral(Math.floor(this.state.currentbalance)).format('0,0');
        var balanceStang = numeral(this.state.currentbalance).format('.00');
        return (
            <View style={styles.columnContainer}>
                <View style={ [{'flex':3}]}>
                        <View style={[styles.rowContainer, { justifyContent: 'flex-start', flex: 1, marginLeft : 20,padding:0}]}>
                            <Text style={styles.textTittleBold}>Account Balance:</Text>
                        </View>

                        <View style={[{ flex: 1}]}></View>
                        <View style={[styles.rowContainer, { alignItems: "center",justifyContent: 'center', flex: 2,borderColor:'rgba(206,59,111,0.2)',borderWidth:4,borderRadius:20,marginHorizontal:responsiveWidth(12) }]}>
                            <Text style={styles.textAmount}>{balance}</Text>
                            <Text style={styles.textAmountSatang}>{balanceStang}</Text>
                            <Text style={styles.textAmountTHB}>THB</Text>

                        </View>
                        <View style={[{ flex: 1}]}>
                        </View>    

                </View >
                <View
                        style={styles.linebar}
                    />
                <View style={ [{'flex':5, padding : 20}]}>
                    <TouchableHighlight underlayColor='pink' style={[styles.rowContainer,styles.amountButton]} onPress={
                        () => {
                            this.checkwalletlimit(this.state.topupselectchoice.first), this.setState(
                                {
                                    button_pressed: {
                                        first_button: true,
                                        second_button: false,
                                        third_button: false,
                                        fourth_button: false,
                                    }

                                }
                            )
                            // Delay to make button highlight 
                            timer.setTimeout("delay_select_amount", () => { this.moveTopUpAmount() }, 1);
                        }
                    }>
                    <Text style={[styles.textInformation, { textAlign: "center" }]} > {this.state.topupselectchoice.first}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='pink' style={[styles.rowContainer, styles.amountButton]} onPress={
                        () => {
                            this.checkwalletlimit(this.state.topupselectchoice.second), this.setState(
                                {
                                    button_pressed: {
                                        first_button: false,
                                        second_button: true,
                                        third_button: false,
                                        fourth_button: false
                                    }
                                }
                            )
                            // Delay to make button highlight 
                            timer.setTimeout("delay_select_amount", () => { this.moveTopUpAmount() }, 1);
                        }
                    }>
                    <Text style={[styles.textInformation, { textAlign: "center" }]} > {this.state.topupselectchoice.second}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='pink' style={[styles.rowContainer, styles.amountButton]} onPress={
                        () => {
                            this.checkwalletlimit(this.state.topupselectchoice.third), this.setState(
                                {
                                    button_pressed: {
                                        first_button: false,
                                        second_button: false,
                                        third_button: true,
                                        fourth_button: false
                                    }
                                }
                            )
                            // Delay to make button highlight 
                            timer.setTimeout("delay_select_amount", () => { this.moveTopUpAmount() }, 1);
                        }
                    }>
                    <Text style={[styles.textInformation, { textAlign: "center" }]} > {this.state.topupselectchoice.third}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='pink' style={[styles.rowContainer, styles.amountButton]} onPress={
                        () => {
                            this.checkwalletlimit(this.state.topupselectchoice.fourth), this.setState(
                                {
                                    button_pressed: {
                                        first_button: false,
                                        second_button: false,
                                        third_button: false,
                                        fourth_button: true
                                    }
                                }
                            )
                            // Delay to make button highlight 
                            timer.setTimeout("delay_select_amount", () => { this.moveTopUpAmount() }, 1);
                        }
                    }>

                    <Text style={[styles.textInformation, { textAlign: "center" }]} > {this.state.topupselectchoice.fourth}</Text>
                    </TouchableHighlight >
                    <View style={{ paddingTop: 10 }}>
                        <Text style={styles.textAlert}> {this.state.TopUpNote}</Text>
                    </View>




                </View>
            </View >
        );
    }
}