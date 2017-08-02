import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import { StackNavigator,NavigationActions } from 'react-navigation';

import WelcomeScreen from './App/Screen/WelcomeScreen';
import EnterTransferIdScreen from './App/Screen/EnterTransferIdScreen';
import TransferCheckReceiver from './App/Screen/TransferCheckReceiver';
import TransferConfirm from './App/Screen/TransferConfirm';
import TransferResult from './App/Screen/TransferResult';
import TopUpAmount from './App/Screen/TopUpAmount' ;
import TopUpResult from './App/Screen/TopUpResult';
import TopUpSelectAmountScreen from './App/Screen/TopUpSelectAmountScreen';


const SimpleApp = StackNavigator({




  Home: { screen: WelcomeScreen },
  EnterTransferIdScreen: { screen: EnterTransferIdScreen },
  TransferCheckReceiver: { screen: TransferCheckReceiver },
  TransferConfirm: { screen: TransferConfirm },
  TransferResult: { screen: TransferResult },
    TopUpSelectAmountScreen: { screen:TopUpSelectAmountScreen},
   TopUpAmount: {screen: TopUpAmount },
  TopUpResult: {screen: TopUpResult},

});

const AppNavigation = () => (
  <SimpleApp />
);


export default class App extends React.Component {
  render() {
    return (
        <View style={{flex:1 ,marginTop:Platform.OS === 'ios' ? 0 : 10}} >
          <AppNavigation />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
