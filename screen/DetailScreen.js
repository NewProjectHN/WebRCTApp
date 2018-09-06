/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export default class DetailScreen extends Component<Props> {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Khong co ten'),
    };
  };

  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('id');
    const otherParam = navigation.getParam('name', 'Khong co Ten');

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Detail Page</Text>
        <Text>itemID: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>

        <Button
          title="Update the title"
          onPress={() => this.props.navigation.setParams({name: 'Nguyen Cam Tu'})}
        />

        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              id: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
