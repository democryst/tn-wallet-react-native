import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import  HomeScreen  from './App/Screen/home' ;
import EnterTransferIdScreen from './App/Screen/EnterTransferIdScreen' ;
import TransferScreen from './App/Screen/transfer' ;
const SimpleApp = StackNavigator({
    TransferScreen: {screen: TransferScreen},
    EnterTransferIdScreen: { screen: EnterTransferIdScreen } ,
    Home: { screen: HomeScreen },
});

const AppNavigation = () => (
  <SimpleApp  />
);

export default class App extends React.Component {
  render() {
    return (
      <AppNavigation/>
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

