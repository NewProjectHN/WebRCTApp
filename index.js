'use strict';

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class WebRCTApp extends React.Component {
  
  render() {
    return <RootStack />;
  }
}

AppRegistry.registerComponent('WebRCTApp', () => WebRCTApp);
