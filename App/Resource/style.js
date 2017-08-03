'use strict';

var React = require('react-native');
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');


module.exports = StyleSheet.create({

    amount_button: {
        alignItems: 'center',
        marginBottom: 5,
        padding: 10,
        paddingBottom: 12,
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "rgba(150,150,150,0.5)",
        borderRadius: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    col_container: {
        flexDirection: 'column',
        flex: 1
    },
    row_container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: responsiveWidth(2),
    },
    top_container: {
        flex: 2,
        margin: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom_container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: responsiveFontSize(3.5)
    },
    button: {
        backgroundColor: '#f06da1',
        padding: responsiveHeight(3),
        width: width,
    },

    textTittle: {
        fontSize: responsiveFontSize(2.5),
        paddingTop: responsiveHeight(1.5),
        color: "gray"
    },
    textTittleBold: {
        fontSize: responsiveFontSize(3),
        paddingTop: responsiveHeight(1.5),
        color: "black",
        fontWeight:'bold'
    },
    textAmount: {
        fontSize: responsiveFontSize(3.5),
        fontWeight: "bold"
    },
    textAmountSatang: {
        fontSize: responsiveFontSize(2.5),
        paddingRight: 20,
        paddingTop: responsiveHeight(1.2)
    },
    textAmountTHB: {
        fontSize: responsiveFontSize(3),
        paddingTop: responsiveHeight(0.5)
    },
    textStatus: {
        fontSize: responsiveFontSize(8),
        margin: 10,
        fontWeight: "bold",
    },
    text_info: {
        fontSize: 19,
        paddingTop: 5,
    },
    linebar: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        margin: 15
    }

});