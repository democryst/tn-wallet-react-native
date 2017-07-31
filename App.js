import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import WelcomeScreen from './App/Screen/WelcomeScreen';
import EnterTransferIdScreen from './App/Screen/EnterTransferIdScreen';
import TransferCheckReceiver from './App/Screen/TransferCheckReceiver';
import TransferConfirm from './App/Screen/TransferConfirm';
import TransferResult from './App/Screen/TransferResult';
import TopUpAmount from './App/Screen/TopUpAmount' ;
import TopUpResult from './App/Screen/TopUpResult';
import TopUpSelectAmountScreen from './App/Screen/TopUpSelectAmountScreen';


const SimpleApp = StackNavigator({

    TopUpSelectAmountScreen: { screen:TopUpSelectAmountScreen},
   TopUpAmount: {screen: TopUpAmount },
  TopUpResult: {screen: TopUpResult},


  Home: { screen: WelcomeScreen },
  EnterTransferIdScreen: { screen: EnterTransferIdScreen },
  TransferCheckReceiver: { screen: TransferCheckReceiver },
  TransferConfirm: { screen: TransferConfirm },
  TransferResult: { screen: TransferResult },
  


});

const AppNavigation = () => (
  <SimpleApp />
);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigation />
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
