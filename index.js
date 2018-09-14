'use strict';

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { createStackNavigator,createTabNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import DetailScreen from './screen/DetailScreen';
import VideoView from './component/VideoView';
import MessageView from './component/MessageView';

console.disableYellowBox = true;



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
