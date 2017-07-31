import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
var { height, width } = Dimensions.get('window');
import api from '../../API/RequestAPI.js';
import RestClient from 'react-native-rest-client';

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
            TopUpNote: "Please select top up amount",
            walletLimit: 5000,
            topupallow: false,
            apidata: "",
        }
        this.getAccount();
    }
    checkwalletlimit(topupchoice) {
        this.setState({ amount: topupchoice });
        this.checkwallet(topupchoice);
    }
    checkwallet(amount) {
        console.log("balance : " + this.state.currentbalance)
        if ((this.state.currentbalance + amount) > this.state.walletLimit) {
            this.setState({
                TopUpNote: "Topup amount exceeding wallet limit",
                topupallow: false
            })
        }
        else if ((this.state.currentbalance + amount) <= this.state.walletLimit) {
            this.setState({
                TopUpNote: "Top up for " + amount + " THB",
                topupallow: true
            })
        }
    }
    getAccount() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        // api.getData(params.userId).then((data) => {
        api.getData(1234567890).then((data) => {
            this.setState({ apidata: data[0], currentbalance: data[0].balance });
        });
        console.log("balance : " + this.state.currentbalance)
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
                    apidata: this.state.apidata
                }
            })
        }


    }

    render() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = dd + '/' + mm + '/' + yyyy;
        return (
            <View style={styles.container}>
                <View style={styles.top_container}>


                    <View style={styles.box_container}>
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <View>
                                <TouchableOpacity style={styles.row_container} onPress={
                                    () => { this.checkwalletlimit(this.state.topupselectchoice.first) }
                                }>
                                    <Image source={require('../Resource/img/right_button.png')}
                                        style={styles.next_button}
                                    />
                                    <Text style={[styles.text_info, { textAlign: "right" }]} > {this.state.topupselectchoice.first}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                        </View>
                    </View>

                    <View style={styles.box_container}>
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <View>
                                <TouchableOpacity style={styles.row_container} onPress={
                                    () => { this.checkwalletlimit(this.state.topupselectchoice.second) }
                                }>
                                    <Image source={require('../Resource/img/right_button.png')}
                                        style={styles.next_button}
                                    />
                                    <Text style={[styles.text_info, { textAlign: "right" }]} > {this.state.topupselectchoice.second}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                        </View>
                    </View>

                    <View style={styles.box_container}>
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <View>
                                <TouchableOpacity style={styles.row_container} onPress={
                                    () => { this.checkwalletlimit(this.state.topupselectchoice.third) }
                                }>
                                    <Image source={require('../Resource/img/right_button.png')}
                                        style={styles.next_button}
                                    />
                                    <Text style={[styles.text_info, { textAlign: "right" }]} > {this.state.topupselectchoice.third}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                        </View>
                    </View >

                    <View style={styles.box_container}>
                        <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
                            <View>
                                <TouchableOpacity style={styles.row_container} onPress={
                                    () => { this.checkwalletlimit(this.state.topupselectchoice.fourth) }
                                }>
                                    <Image source={require('../Resource/img/right_button.png')}
                                        style={styles.next_button}
                                    />
                                    <Text style={[styles.text_info, { textAlign: "right" }]} > {this.state.topupselectchoice.fourth}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
                        </View>
                    </View >
                    <View style={{ paddingTop: 10 }}>
                        <Text style={[styles.text_info, { textAlign: "center", color: "gray" }]}> {this.state.TopUpNote}</Text>
                    </View>



                </View >

                <View style={styles.bottom_container}>
                    <TouchableOpacity onPress={
                        () => { this.moveTopUpAmount() }
                    }>

                        <View style={styles.button}>
                            <Text style={styles.text}>Next</Text>
                        </View>

                    </TouchableOpacity>




                </View>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
    },
    row_container: {
        // justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
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
        // justifyContent: 'center',
        justifyContent: "flex-end",
    },
    box_container: {

        flexDirection: 'row',
        // backgroundColor: 'pink',
        // borderWidth: 1,

    },
    button: {
        // backgroundColor: '#f88fb0',
        backgroundColor: '#f06da1',
        // backgroundColor: '#e64f93',
        // flexDirection: "column",
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
        paddingTop:5
    },
    next_button: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});
