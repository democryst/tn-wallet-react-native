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

        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        this.state = {
            receiverId: params.data.userId,
            currentbalance: params.data.currentbalance,
            amount: params.data.amount
        };
        // this.getAccount();
        


    }
    getAccount() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;


        api.getData(1111111111).then((data) => {
            this.setState({ sender_bank_account_id: data[0].account_id, sender_bank_currentbalance: data[0].balance });
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
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.input}>
                                {params.data.amount} <Text style={{ fontSize: 20 }}>THB</Text>
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
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={styles.input}>
                                {params.data.currentbalance} <Text style={{ fontSize: 20 }}>THB</Text>
                            </Text>

                        </View>
                    </View >
                    <View style={styles.bottom_container}>
                        <TouchableOpacity onPress={() => {
                            {/* console.log("state account : ", this.state.receiverId) */}
                            api.postTransactionTopUp(this.state.receiverId,this.state.currentbalance,this.state.amount)
                            .then(resp => resp.json())
                            .then((data)=>{
                                {/* console.log("postTransactionTopUp")
                                console.log(data) */}
                                return api.getTransaction(data.transaction_id)
                            })
                            .then((data)=>{
                                navigate('TopUpResult', { data: { currentbalance: data.des_remain_balance} })
                            })
                            .catch((err)=>{
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
        borderWidth: 1,
        borderRadius: 30,
        width: width * 0.7,
        margin: 40,
        color: "gray",


    },
});

