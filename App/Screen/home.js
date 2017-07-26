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
        <View style ={styles.container_userdetail}>
          <Image source={pic}
            style={styles.container_image_profile}
          />

        </View>
        <View >
            <Text>Tanakorn  Suanprang</Text>
        </View>


      </View>
      <View style ={styles.container_button}>
        <View style ={styles.button_box}>
          <TouchableOpacity onPress={() => navigate('EnterTransferIdScreen')} style={styles.button}>
            <Text> Transfer </Text>
          </TouchableOpacity>
        </View>
        <View style ={styles.button_box}>
          <TouchableOpacity onPress={() => alert("Not ready yet")} style={styles.button}>
            <Text> Top Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container_image_profile:{
      width: 100,
      height: 100,
      borderRadius: 30,

  },
  container_userdetail:{
    flex: 1,
        flexDirection: 'row',
  },
  container_userbar:{
    flex: 1,
        flexDirection: 'row',
    margin: 30,
  },
  container_button:{
    flex: 1,
    flexDirection: 'column',
    padding: 60,
  },
  button_box:{
    flex:1,
    paddingTop: 100,
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
