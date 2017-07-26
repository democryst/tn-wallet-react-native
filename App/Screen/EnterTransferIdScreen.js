import React, { Component }from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View ,Button,TouchableOpacity,Dimensions} from 'react-native';
var { height, width } = Dimensions.get('window');

 export default class EnterTransferScreen extends React.Component {
  static navigationOptions = {
    title: 'Transfer',

  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.top_container} >
          <Text style={styles.text_bold}>RecieverID</Text>
            <TextInput
              keyboardType='numeric'
              style={styles.text}
              placeholder="Input RecieverID"
          />
        </View >
        <View style={styles.bottom_container}>
         <TouchableOpacity  onPress={() => navigate('TransferCheckReceiver', { user: 'Lucy' })}>
          <View style={styles.button}>
            <Text style={styles.text}>Enter</Text>
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
  text:{
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },
  text_bold:{
    fontWeight: "bold",
    fontSize: 20
  },
  text_info:{
    fontSize: 24
  }
});
