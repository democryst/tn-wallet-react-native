import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight, Dimensions, Image } from 'react-native';
var { height, width } = Dimensions.get('window');
import api from '../../API/RequestAPI.js';
import RestClient from 'react-native-rest-client';

var { height, width } = Dimensions.get('window');
var numeral = require('numeral'); 2
const timer = require('react-native-timer');

export default class TransferConfirm extends React.Component {
    static navigationOptions = {
        title: 'Top Up Amount',

    };
    constructor(props) {
        super(props);
        this.state = {
            date: "25/7/17",
            // ID: "6302335476",
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
        // this.setState({ amount: topupchoice });
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
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
    
        api.getData(params.userId).then((data) => {
            this.setState({ apidata: data[0], currentbalance: data[0].balance });
            
        })
        .catch((err)=>{
             console.log("error in get account topupselect : ",err)
        });
       
    }
    moveTopUpAmount() {
        if (this.state.topupallow) {
            const { navigate } = this.props.navigation;
            const { params } = this.props.navigation.state;
            console.log("top up allow");
            console.log("top up amount", this.state.amount);
            console.log("top up currentbalance", this.state.currentbalance);
            console.log("top up apidata", this.state.apidata);
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

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        var balance = numeral(Math.floor(this.state.currentbalance)).format('0,0');
        var balanceStang = numeral(this.state.currentbalance).format('.00');
        return (
            <View style={styles.col_container}>
                <View style={ [{'flex':3}]}>
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1, marginLeft : 20}]}>
                            <Text style={{ fontSize: 20, paddingTop: 10, fontWeight: "600" }}>Account Balance:</Text>
                        </View>
                    {/* <View style={[styles.box_container]}> */}
                        <View style={[{ flex: 1}]}></View>
                        <View style={[styles.row_container, { alignItems: "center",justifyContent: 'center', flex: 2,borderColor:'rgba(206,59,111,0.2)',borderWidth:4,borderRadius:20,marginHorizontal:40 }]}>
                            <Text style={{ fontSize: 30, fontWeight: "500"}}>{balance}</Text>
                            <Text style={{ fontSize: 15, paddingTop: 12, paddingRight: 10 }}>{balanceStang}</Text>
                            <Text style={{ fontSize: 20, paddingTop: 7, paddingRight: 5 }}>THB</Text>

                        </View>
                        <View style={[{ flex: 1}]}>
                        </View>    
                    {/* </View> */}
                </View >
                <View
                        style={{
                            borderBottomColor: "rgba(150,150,150,0.2)",
                            borderBottomWidth: 2,
                            marginHorizontal : 15
                        }}
                    />
                <View style={ [{'flex':5, padding : 20}]}>
                    <TouchableHighlight underlayColor='pink' style={[styles.row_container,styles.amount_button]} onPress={
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
                            timer.setTimeout("delay_select_amount",()=>{this.moveTopUpAmount()}, 1); 
                        }
                    }>
                    <Text style={[styles.text_info, { textAlign: "center" }]} > {this.state.topupselectchoice.first}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='pink' style={[styles.row_container,styles.amount_button]} onPress={
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
                            timer.setTimeout("delay_select_amount",()=>{this.moveTopUpAmount()}, 1); 
                        }
                    }>
                    <Text style={[styles.text_info, { textAlign: "center" }]} > {this.state.topupselectchoice.second}</Text>
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='pink' style={[styles.row_container,styles.amount_button]} onPress={
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
                            timer.setTimeout("delay_select_amount",()=>{this.moveTopUpAmount()}, 1); 
                        }
                    }>
                    <Text style={[styles.text_info, { textAlign: "center" }]} > {this.state.topupselectchoice.third}</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='pink' style={[styles.row_container,styles.amount_button]} onPress={
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
                            timer.setTimeout("delay_select_amount",()=>{this.moveTopUpAmount()}, 1); 
                        }
                    }>

                    <Text style={[styles.text_info, { textAlign: "center" }]} > {this.state.topupselectchoice.fourth}</Text>
                    </TouchableHighlight >
                    <View style={{ paddingTop: 10 }}>
                        <Text style={[styles.text_info, { textAlign: "center", color: "red", fontWeight: "bold" }]}> {this.state.TopUpNote}</Text>
                    </View>



                
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    col_container:{
        flexDirection: 'column',
        flex : 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    
    },
    row_container: {
        flexDirection: 'row',
    },
    top_container: {
        flex: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    bottom_container: {
        flex: 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "flex-end",
    },
    box_container: {
        flexDirection: 'row',

    },
    button: {
        backgroundColor: '#f06da1',
        padding: 25,
        width: width,
    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 25
    },
    text_bold: {
        fontWeight: "bold",
        fontSize: 22
    },
    text_info: {
        fontSize: 19,
        paddingTop: 5,
      
    },
    next_button: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    amount_button: {alignItems:'center',marginBottom: 5,padding: 10,paddingBottom:12,justifyContent:"center",borderWidth:2, borderColor:"rgba(150,150,150,0.5)",borderRadius:10}
});
