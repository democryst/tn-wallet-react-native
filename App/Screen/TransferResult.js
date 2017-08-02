import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import api from '../../API/RequestAPI.js';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

var { height, width } = Dimensions.get('window');
var numeral = require('numeral');

export default class TransferResult extends React.Component {
    static navigationOptions = {
        title: 'Transfer',

    };
    constructor(props) {
        super(props);
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        this.state = {
            transactionResult: {},
            senderId: params.data.senderAccountInfo.senderID,
            senderName: params.data.senderAccountInfo.senderName,
            senderSurname: params.data.senderAccountInfo.senderSurname,
            receiverId: params.data.receiverAccountInfo.receiverID,
            receiverName: params.data.receiverAccountInfo.receiverName,
            receiverSurname: params.data.receiverAccountInfo.receiverSurname
        };

    }

    componentDidMount() {
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        api.getTransaction(params.result.transaction_id).then((data) => {
            this.setState({ transactionResult: data });
        });
    };


    render() {

        const { navigate } = this.props.navigation;
        let tempSenderId = this.state.senderId;
        let tempReceiverId = this.state.receiverId;
        let transactionID = numeral(this.state.transactionResult.id).format('0000000000');
        let amount = numeral(this.state.transactionResult.amount).format('0,0.00');
        let fee = numeral(this.state.transactionResult.src_remain_fee).format('0,0.00');
        let remain = numeral(this.state.transactionResult.src_remain_balance).format('0,0.00');

        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bold', color: 'green', fontSize: responsiveFontSize(3.8) }}>SUCCESS</Text>
                </View>
                <ScrollView style={{
                    flex: 5, borderWidth: 2, borderBottomWidth: 0, marginLeft: 10, marginRight: 10, borderColor: 'lightgrey',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginBottom: 10 }}>
                        <Text style={{ color: 'grey', margin: 4 }}>Date</Text>
                        <Text style={{ fontSize: responsiveFontSize(2.3) }}>Wed 02/08/17</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginTop: 0 }}>
                        <Text style={{ color: 'grey', margin: 4 }}>Transaction ID</Text>
                        <Text style={{ fontSize: responsiveFontSize(2.3) }}>{transactionID}</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                        <Text style={{ color: 'grey', margin: 4 }}>To</Text>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.receiverName}</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.receiverSurname}</Text>
                            <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.8) }}>{tempReceiverId}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                        <Text style={{ color: 'grey', margin: 4 }}>From</Text>
                        <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.senderName}</Text>
                            <Text style={{ fontSize: responsiveFontSize(2.3) }}>{this.state.senderSurname}</Text>
                            <Text style={{ color: 'grey', fontSize: responsiveFontSize(1.8) }}>{tempSenderId}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginBottom: 10 }}>
                        <Text style={{ color: 'grey', margin: 4 }}>Amount</Text>
                        <Text style={{ fontSize: responsiveFontSize(4), fontWeight: 'bold' }}>{amount}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15, marginTop: 0 }}>
                        <Text style={{ color: 'grey', margin: 4 }}>Fee</Text>
                        <Text style={{ fontSize: responsiveFontSize(2.3) }}>{fee}</Text>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 0.5,
                            marginLeft: 10,
                            marginRight: 10,
                        }}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 15 }}>
                        <Text style={{ color: 'grey', margin: 4 }}>Available Balance</Text>
                        <Text style={{ fontSize: responsiveFontSize(2.3) }}>{remain}</Text>
                    </View>
                    <View />

                </ScrollView>
                <View style={styles.bottom_container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigate('Home', { user: 'Lucy' })}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.text}>Done</Text>
                        </View>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }



    // render() {
    //     const { navigate } = this.props.navigation;
    //     let tempSenderId = this.state.senderId;
    //     let tempReceiverId = this.state.receiverId;

    //     return (
    //         <View style={styles.container}>
    //             <View style={styles.bottom_container}>
    //                 <TouchableOpacity style={styles.button} onPress={() => navigate('Home', { user: 'Lucy' })}>
    //                     <Text style={styles.text}>Done</Text>
    //                 </TouchableOpacity>

    //             </View>
    //              <View style={styles.top_container}>
    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Date</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <Text style={styles.text_info}> {this.state.date}</Text>
    //                     </View>
    //                 </View>

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Transaction ID</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <Text style={styles.text_info}> {this.state.transactionResult.id}</Text>
    //                     </View>
    //                 </View>

    //                 <View
    //                     style={{
    //                         borderBottomColor: 'grey',
    //                         borderBottomWidth: 0.5,
    //                         margin: 15
    //                     }}
    //                 />

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Sender Name</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <View>
    //                             <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.senderName}</Text>
    //                             <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.senderSurname}</Text>
    //                         </View>
    //                     </View>
    //                 </View>

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Sender ID</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <Text style={styles.text_info}> {tempSenderId}</Text>
    //                     </View>
    //                 </View>

    //                 <View
    //                     style={{
    //                         borderBottomColor: 'grey',
    //                         borderBottomWidth: 0.5,
    //                         margin: 15
    //                     }}
    //                 />

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Receiver Name</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <View>
    //                             <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.receiverName}</Text>
    //                             <Text style={[styles.text_info, { textAlign: "right" }]}> {this.state.receiverSurname}</Text>
    //                         </View>
    //                     </View>
    //                 </View>

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Receiver ID</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <Text style={styles.text_info}> {tempReceiverId}</Text>
    //                     </View>
    //                 </View>

    //                 <View
    //                     style={{
    //                         borderBottomColor: 'grey',
    //                         borderBottomWidth: 0.5,
    //                         margin: 15
    //                     }}
    //                 />

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Amount</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <Text style={styles.text_info}> {this.state.transactionResult.amount}</Text>
    //                     </View>
    //                 </View>

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Fee</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <Text style={styles.text_info}> {this.state.transactionResult.fee}</Text>
    //                     </View>
    //                 </View>

    //                 <View
    //                     style={{
    //                         borderBottomColor: 'grey',
    //                         borderBottomWidth: 0.5,
    //                         margin: 15
    //                     }}
    //                 />

    //                 <View style={{ flexDirection: 'row' }}>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-start', flex: 1 }]}>
    //                         <Text style={styles.text_bold}> Remaining</Text>
    //                     </View>
    //                     <View style={[styles.row_container, { justifyContent: 'flex-end', flex: 1 }]}>
    //                         <Text style={styles.text_info}> {this.state.remaining}</Text>
    //                     </View>
    //                 </View>

    //             </View>

    //             <View style={styles.bottom_container}>
    //                 <TouchableOpacity style={styles.button} onPress={() => navigate('Home', { user: 'Lucy' })}>
    //                     <Text style={styles.text}>Done</Text>
    //                 </TouchableOpacity>

    //             </View> 

    //         </View>
    //     );
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 10,
        backgroundColor: '#fff',
    },
    row_container: {
        // justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    top_container: {
        flex: 3,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    bottom_container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        justifyContent: "flex-end",
    },
    button: {
        // backgroundColor: '#f88fb0',
        backgroundColor: '#f06da1',
        // backgroundColor: '#e64f93',
        // flexDirection: "column",
        // padding: 10,
        height: 65,
        width: width,
    },
    text: {
        paddingTop: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25
    },
    text_bold: {
        fontWeight: "bold",
        fontSize: 22
    },
    text_info: {
        fontSize: 19
    }
});
