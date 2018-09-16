/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View, Button,TextInput} from 'react-native';
import LogoTitle from './../component/LogoTitle'

export default class HomeScreen extends Component<Props> {

  constructor(props) {
      super(props);
      this.state = {name: "long",room:"ROOM_TEST" };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: <LogoTitle />,
      headerRight: (
        <Button
          onPress={navigation.getParam('increaseCount')}
          title="+1"
          color="black"
        />
      ),
    };
  };

  componentDidMount(){
      let {name,room} = this.state;
      this.props.navigation.navigate('Details',{name:name,room:room});
  }

  _joinRoom(){
    let {name,room} = this.state
    if(name == null || name == ""){
      alert("Please choose your name!!!");
      return;
    }
    this.props.navigation.navigate('Details',{name,room});
  }

  render() {
    const {name,room} = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={{height:50}}
          onChangeText={(name) => this.setState({name})}
          defaultValue={name}
          placeholder="Your name"/>
        <TextInput style={{height:50}}
          onChangeText={(room) => this.setState({room})}
          defaultValue={room}
          placeholder="Room name"/>
        <Button style={{height:50}}
          title="JOIN"
          onPress={() => this._joinRoom() }
        />
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
