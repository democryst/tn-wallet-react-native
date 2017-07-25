import React, { Component }from 'react';
import {AppRegistry, StyleSheet, Text, TextInput, View ,Button} from 'react-native';

 export default class EnterTransferScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textReceiverId}>
        <Text>RecieverID</Text>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Input RecieverID"
          
        />
<Button
  onPress={() => { Alert.alert('You tapped the button!')}}
  title="Press Me"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
     
  
       
  },
  textInput:{
   width:'100%'
       
  },
  textReceiverId:{
   
     justifyContent: 'flex-start',
    
  }
});
