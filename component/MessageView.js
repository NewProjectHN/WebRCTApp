/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,TextInput} from 'react-native';

export default class VideoView extends Component<Props> {

  constructor () {
    super()
    this.state = {text:''}
  }

  _sendText(){
    alert(this.state.text);
  }

  render() {

    return (
      <View style={styles.container}>
          <View style={{flex:5}}></View>
          <View style={{flex:1}}>
              <TextInput style={{flex:1,textAlign:'center'}} onPress={(text) => this.setState({text})} defaultValue={this.state.text}/>
              <Button style={{flex:1}} title="Send" onPress={() => this._sendText()}/>
          </View>

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
