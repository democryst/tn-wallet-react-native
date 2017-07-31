import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
import api from '../../API/RequestAPI.js';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');

export default class TopUpAmount extends React.Component {
    static navigationOptions = {
        title: 'Top Up Amount',

    };
    constructor(props) {
        super(props);
        this.state = {
            sender_bank_account_id: 1111111111,
            sender_bank_currentbalance: 0.00,
            receiverId: null,
            currentbalance: 4100.00 ,
            amount: 500.00  
        };
        this.getAccount(); 


    }
    getAccount() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        

        api.getData(1111111111).then((data) => {
            this.setState({ sender_bank_account_id: data[0].account_id ,sender_bank_currentbalance: data[0].balance});
        });
     
    }
    postTransaction() {
        console.log("bank acc", this.state.sender_bank_account_id);
        console.log("bank balance", this.state.sender_bank_currentbalance);
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        const { apidata } = params.data.apidata;
        api.postTransaction(this.state.sender_bank_account_id, this.state.sender_bank_currentbalance, apidata.account_id, apidata.balance, params.data.amount);
        // console.log("kuy");
    }
        
    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        console.log("apidata __ : ", params.data.apidata);
        return (
            <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
                <View style={styles.container}>

                    <View style={styles.top_container} >
                        <Text style={styles.text_bold}>Top Up Amount:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.input}>
                               {params.data.amount} THB
                            </Text>
                        </View>
                    </View >
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            margin: 15
                        }}
                    />
                    <View style={styles.top_container} >
                        <Text style={styles.text_bold}>Current Balance:</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.input}>
                                 {params.data.currentbalance} THB
                            </Text>
                        </View>
                    </View >
                    <View style={styles.bottom_container}>
                        <TouchableOpacity onPress={() => navigate('TopUpResult', { data: { amount: params.data.amount, currentbalance: params.data.currentbalance} })}>
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
        fontSize: 25
    },
    text_bold: {
        fontWeight: "bold",
        fontSize: 25
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
        borderWidth:1,
        borderRadius:30

    },
});

