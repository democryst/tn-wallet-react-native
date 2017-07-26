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
    <View style={{flex: 1}}>
      <View style ={styles.container_userbar}>
        <View>
          <Image source={pic}
            style={styles.container_image_profile}
          />
        </View>
        <View style ={styles.container_userdetail}>
            <Text>Tanakorn  Suanprang</Text>
            <Text>4700.00  $</Text>
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
      margin: 40,
  },
  container_userdetail:{
    flex: 1,
        flexDirection: 'row',
    marginTop:40 ,
  },
  container_userbar:{
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'blue',
  },
  container_button:{
    flex: 5,
    flexDirection: 'column',
    padding: 60,
    backgroundColor: 'red',
  },
  button_box:{
    flex:1,
    paddingTop: 30,
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
