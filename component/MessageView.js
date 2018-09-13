/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,TextInput,Dimensions,ScrollView} from 'react-native';

export default class VideoView extends Component<Props> {

  constructor () {
    super()
    this.state = {text:''}
  }

  _sendText(){
    alert(this.state.text);
  }

  render() {
    let deviceWidth = Dimensions.get('window').width;
  // alert(deviceWidth);
    return (
      <View style={styles.container}>
          <View style={{flex:4}}>
              <ScrollView></ScrollView>
          </View>
          <View style={{flex:1,backgroundColor:'green'}}>
            <TextInput style={{flex:1}} onPress={(text) => this.setState({text:text})} defaultValue={this.state.text}></TextInput>
            <Button style={{flex:1,position:'absolute',bottom:0,left:0,right:0,width:deviceWidth}} title="Send" onPress={() => this._sendText()}/>
          </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
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
