/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,ScrollView} from 'react-native';
import FullScreenVideo from './../component/FullScreenVideo';
import Thumbnails from './../component/Thumbnails';

export default class VideoView extends Component<Props> {

  constructor () {
    super()
    this.state = {activeStreamResult:null,streams:[]};
  }

  handleSetActive(streamId) {
    this.setState({
      activeStreamId: streamId
    });
  }

  componentDidMount(){
    // let {screenProps} = this.props;
    // alert(screenProps.name);
  }

  render() {
    let streams = this.props.screenProps;
    let {activeStreamResult} = this.state;

    if(streams.length > 0 && activeStreamResult == null){
      activeStreamResult = streams[0];
      this.setState({activeStreamResult})
    }
    return (
      <View style={styles.container}>
          <FullScreenVideo streamURL={activeStreamResult != null ? activeStreamResult.url : null} />
          <Thumbnails streams={streams}
            setActive={this.handleSetActive.bind(this)}
            activeStreamId={this.state.activeStreamId}/>
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
