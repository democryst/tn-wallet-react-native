import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import  HomeScreen  from './App/Screen/home' ;
import EnterTransferIdScreen from './App/Screen/EnterTransferIdScreen' ;
import TransferScreen from './App/Screen/transfer' ;
const SimpleApp = StackNavigator({
<<<<<<< HEAD
=======
    TransferScreen: {screen: TransferScreen},
    EnterTransferIdScreen: { screen: EnterTransferIdScreen } ,
>>>>>>> 8294a9439470a0fb3fc5ef4f6f2a3a50c2f65094
    Home: { screen: HomeScreen },
    EnterTransferIdScreen: { screen: EnterTransferIdScreen } ,

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

