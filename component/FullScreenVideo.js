import React, {Component} from 'react';
import {StyleSheet, Text, TouchableHighlight, View, ListView, Image} from 'react-native';
import {RTCView} from 'react-native-webrtc';
import config from './../common/config';
import styles from './../asset/style/fullScreenVideo';

export default class FullScreenVideo extends Component{

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <View style={styles.container}>
      {
        config.useRCTView ?
        <RTCView streamURL={this.props.streamURL} style={styles.video} />
        :
        <Image source={this.props.streamURL} style={styles.video} resizeMode={"contain"} />
      }
    </View>
  }
}
