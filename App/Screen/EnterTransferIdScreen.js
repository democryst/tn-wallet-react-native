import React, { Component }from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View ,Button,TouchableOpacity} from 'react-native';


 export default class EnterTransferScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.top_container} >
          <Text style={styles.textReceiverId}>RecieverID</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Input RecieverID"
          />
        </View >
        <View style={styles.bottom_container}>
         <TouchableOpacity  onPress={() => navigate('TransferCheckReceiver', { user: 'Lucy' })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Enter</Text>
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
    margin: 10,
    backgroundColor: '#fff',
  },
  row_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
  },
  top_container: {
    flex: 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  bottom_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    // backgroundColor: '#f88fb0',
    backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    // flexDirection: "column",
    // justifyContent: "flex-end",
    padding: 20,

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

