import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import  HomeScreen  from './App/Screen/home' ;
import EnterTransferIdScreen from './App/Screen/EnterTransferIdScreen' ;

const SimpleApp = StackNavigator({
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
