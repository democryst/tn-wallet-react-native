import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Keyboard } from 'react-native';


export default class Transfer extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      receiverName: "ธนาคารออมสิน",
      receiverID: "0000000000",
      amount: "0.00",
    }
  }


  render() {
    return (
      <View style={styles.container}>

        <View style={{ flex: 3}}>
          <View style={[styles.box, {paddingTop: 10}]}>
            <View style={styles.boxtext}><Text style={styles.text}>Receiver's Name</Text></View>
            <Text style={styles.textinput}>{this.state.receiverName}</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.boxtext}><Text style={styles.text}>Receiver's ID</Text></View>
            <Text style={styles.textinput}>{this.state.receiverID}</Text>
          </View>

          <View style={styles.box}>
            <View style={styles.boxtext}><Text style={styles.text}>Amount</Text></View>
            <TextInput style={styles.textinput1} keyboardType={'numeric'} placeholder={this.state.amount} onchangeText={(amount)=>this.setState({amount})} onSubmit={Keyboard.dismiss}/>
          </View>

        </View>

        <View style={{ flex: 2, flexDirection:'column', alignItems: 'flex-end' }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={()=>{})} style={styles.button}>
              <Text>Next</Text>
            </TouchableOpacity>
          </View>
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  
  },
  button: {
    margin: 10,
    backgroundColor: '#f88fb0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
      
  },
  box:{ flex: 1 ,
    justifyContent: 'center',
    alignItems:'flex-start',
   
    width: 250,
  },
  textinput:{
    paddingLeft:20, 
    width: 250,
    fontSize: 20 ,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontWeight: 'bold'
    
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold'
    
  },
  boxtext:{
     backgroundColor: 'white',
     width:250,
     borderRadius: 50
  },
    textinput1:{
    paddingLeft:20, 
    width: 250,
    fontSize: 50 ,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontWeight: 'bold'
  },
  textinput2:{
    paddingLeft:20, 
    width: 250,
    fontSize: 30 ,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    fontWeight: 'bold'
    
  },

});
