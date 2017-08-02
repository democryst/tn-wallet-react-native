'use strict';

var React = require('react-native');
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { AppRegistry, StyleSheet, Text, TextInput, View, Button, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';
var { height, width } = Dimensions.get('window');


module.exports = StyleSheet.create({

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
    text: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: responsiveFontSize(3.5)
    },
    button: {
        backgroundColor: '#f06da1',
        padding: 20,
        width: width,
    },

    textTittle: {
        fontSize: responsiveFontSize(2.5),
        paddingTop: responsiveHeight(1.5),
        color: "gray"
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
    underline: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        margin: 15
    }

});