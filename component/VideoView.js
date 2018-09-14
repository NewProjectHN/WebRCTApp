/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,ScrollView} from 'react-native';

export default class VideoView extends Component<Props> {

  constructor () {
    super()
  }

  render() {

    return (
      <View style={styles.container}>
          <View style={{flex:4,backgroundColor:'grey',margin:2}}></View>
          <ScrollView style={{flex:1,flexDirection:'row',backgroundColor:'grey',margin:2}} horizontal={true}>
              <View style={{flex:1,backgroundColor:'green',margin:10,minWidth:100}}></View>
              <View style={{flex:1,backgroundColor:'green',margin:10,minWidth:100}}></View>
              <View style={{flex:1,backgroundColor:'green',margin:10,minWidth:100}}></View>
              <View style={{flex:1,backgroundColor:'green',margin:10,minWidth:100}}></View>
              <View style={{flex:1,backgroundColor:'green',margin:10,minWidth:100}}></View>
              <View style={{flex:1,backgroundColor:'green',margin:10,minWidth:100}}></View>
          </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
