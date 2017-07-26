import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerLeft: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return(
    <View>
      <View style ={styles.container_userbar}>
        <Image source={pic} style={{width: 193, height: 50}}/>
        <Text style={styles.red} >Hello, Chat App!</Text>
      </View>
      <View style ={styles.container_button}>
        <TouchableOpacity onPress={() => navigate('EnterTransferIdScreen')} style={styles.button}>
          <Text> Transfer </Text>
        </TouchableOpacity>
      </View>
      <View style ={styles.container_button}>
        <TouchableOpacity onPress={() => alert("Not ready yet")} style={styles.button}>
          <Text> Top Up </Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container_userbar:{
    flex: 1,
        flexDirection: 'column',
    margin: 30,
  },
  container_button:{
    flex:1,
        flexDirection: 'column',
    padding: 30,
  },
  button: {
    // backgroundColor: '#f88fb0',
    backgroundColor: '#f06da1',
    // backgroundColor: '#e64f93',
    // flexDirection: "column",
    // justifyContent: "flex-end",
    padding: 20,

  },



})
