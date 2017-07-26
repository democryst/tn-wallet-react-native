import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
var { height, width } = Dimensions.get('window');



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
    <Image source={require('../Resource/img/pink_background.png')} style={styles.container}>
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
    <View
      style={{
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        margin: 15
      }}
    />
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
    </Image>
    )
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: width,
      height: height,
  },
  container_image_profile:{
      width: 100,
      height: 100,
      borderRadius: 50,
      margin: 40,
  },
  container_userdetail:{
    flex: 1,
        flexDirection: 'column',
    marginTop:40 ,
  },
  container_userbar:{
    flex: 3,
    flexDirection: 'row',
  },
  container_button:{
    flex: 5,
    flexDirection: 'column',
    padding: 40,
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
