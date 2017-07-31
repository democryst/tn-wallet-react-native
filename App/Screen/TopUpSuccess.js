import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');
var DismissKeyboard = require('dismissKeyboard');

export default class TopUpSuccess extends React.Component {
    static navigationOptions = {
        title: 'Top Up Success',

    };
    constructor(props) {
        super(props);
        this.state = { 
    
             receiverId: null };



    }
    
    render() {
        const { navigate } = this.props.navigation;
         const { params } = this.props.navigation.state;
        return (
            <TouchableWithoutFeedback onPress={() => { DismissKeyboard() }}>
                <View style={styles.container}>

                    <View style={styles.top_container} >
                        <Text style={styles.text_bold}>Top Up Amount</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.input}>
                               {params.data.amount + params.data.currentbalance} THB
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
                        <Text style={styles.text_bold}>Status</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <Text style={styles.input}>
                                 Success
                                 </Text>
                        </View>
                    </View >
                    <View style={styles.bottom_container}>
                         <TouchableOpacity onPress={() => navigate('TransferCheckReceiver', { data: { amount:this.state.amount } })}> 
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
     

    },
});

