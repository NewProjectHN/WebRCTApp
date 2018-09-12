/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import VideoView from './../component/VideoView';
import MessageView from './../component/MessageView';

export default class DetailScreen extends Component<Props> {

  constructor () {
  super()
  this.state = {
    index: 0
  }
  this.updateIndex = this.updateIndex.bind(this)
}

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('name', 'Khong co ten'),
    };
  };

  updateIndex = (index) => {
      this.setState({index})
  }

  render() {

    const { navigation } = this.props;
    const itemId = navigation.getParam('id');
    const otherParam = navigation.getParam('name', 'Khong co Ten');
    let {index} = this.state;
    return (
      <View style={styles.container}>
          <ButtonGroup
          selectedBackgroundColor="pink"
          onPress={this.updateIndex}
          selectedIndex={this.state.index}
          buttons={['Video', 'Message']}
          containerStyle={{height: 30}} />
          {index == 0 ?(
              <VideoView style={{flex:1}}></VideoView>
            ):(
              <MessageView style={{flex:1}}></MessageView>
            )
          }

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
  view: {
    flex: 1
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
