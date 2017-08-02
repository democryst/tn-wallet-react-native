import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
import api from '../../API/RequestAPI.js';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');
var numeral = require('numeral');
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

            <View style={styles.container}>
                <View style={[styles.top_container, { flex: 1}]} >
                    <Text style={{ fontSize: responsiveFontSize(8), color: 'green', margin: 10, fontWeight: "bold", }}>
                        Success
                            </Text>
                </View >

                {/* <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                           
                        }}
                    /> */}
                <View style={{
                    flex: 4, borderWidth: 2,borderBottomWidth:0, marginLeft: 10, marginRight: 10, borderColor: 'lightgrey',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3
                }}>
                    <ScrollView>
                        {/* TOPUP BALANCE */}
                        <View style={[styles.row_container, { flex: 1, marginTop: 20 }]} >
                            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                                <Text style={{ fontSize: responsiveFontSize(2.5), color: "gray", paddingTop: responsiveHeight(2) }}>TopUp Balance:</Text>
                            </View>
                            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1, paddingTop: 20 }]}>
                                <Text style={{ fontSize: responsiveFontSize(3.5), fontWeight: "bold" }}>{numeral(params.data.amount).format('0,0')}</Text>
                                <Text style={{ fontSize: responsiveFontSize(2.5), paddingRight: 20, paddingTop: responsiveHeight(1.2) }}>{numeral(params.data.amount).format('.00')}</Text>
                                <Text style={{ fontSize: responsiveFontSize(3), paddingTop: responsiveHeight(0.5) }}>THB</Text>

                            </View>
                        </View>


                        {/* CURRENT BALANCE */}
                        <View style={[styles.row_container, { flex: 1 }]} >
                            <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                                <Text style={{ fontSize: responsiveFontSize(2.5), color: "gray" }}>Current Balance:</Text>
                            </View>
                            <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1, paddingTop: responsiveHeight(1) }]}>
                                <Text style={{ fontSize: responsiveFontSize(3.5), fontWeight: "bold" }}>{numeral(params.data.currentbalance).format('0,0')}</Text>
                                <Text style={{ fontSize: responsiveFontSize(2.5), paddingRight: 10, paddingTop: responsiveHeight(1.2) }}>{numeral(params.data.currentbalance).format('.00')}</Text>
                                <Text style={{ fontSize: responsiveFontSize(3), paddingTop: responsiveHeight(0.5) }}>THB</Text>

                            </View>
                        </View>

                         {/* <View style={{ flex: 2 }}>
                        </View>  */}
                    </ScrollView>
                </View>

                {/* DONE BUTTON */}
                <View style={[styles.bottom_container, { }]}>
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <View style={styles.button}>
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
        backgroundColor: '#fff',
    },
    row_container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,

    },
    top_container: {
        flex: 2,
        // margin: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom_container: {
        // flex: 1,
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
        //fontSize: 25,
        fontSize: responsiveFontSize(3.5)
    },
    text_bold: {
        fontWeight: "bold",
        fontSize: 25
        //Didn't use on this page
    },
    text_info: {
        fontSize: 24
        //Didn't use on this page
    },
    textInput: {
        borderWidth: 1,
        height: 50,
        padding: 10,
        fontSize: 25,
        //Didn't use on this page
    },
    input: {
        height: 100,
        padding: 10,
        fontSize: 40,
        color: "gray",
        borderWidth: 1,
        borderRadius: 30,
        width: width * 0.7,
        margin: 40,
    },
});