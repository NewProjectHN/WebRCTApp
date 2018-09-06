/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import LogoTitle from './../component/LogoTitle'

export default class HomeScreen extends Component<Props> {

  constructor(props) {
      super(props);
      this.state = {count: 0 };
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

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const {count} = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{count}</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details',{id:86,name:'Nguyen Duc Long'})}
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
