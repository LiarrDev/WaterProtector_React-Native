import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  ScrollView,
  View
} from 'react-native';

import Swiper from 'react-native-swiper';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// 引入主页
const MainLeaf = require('./MainLeaf');

// 引入底部菜单栏
// const FootBar = require('./FootBar');

// 引入扫描二维码获取的 WebView
const QRWebView = require('./QRWebView');

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      currentScene: 'MainLeaf',
      URI: ''
    };
    // this.handleBackSignal = this.handleBackSignal.bind(this);
  }

  QRLink(QRString) {
    this.setState({
      currentScene: 'QRWebView',
      QRURI: QRString
    });
  }

  render() {
    if (this.state.currentScene === 'MainLeaf') {
      return (
        <MainLeaf />
      );
    } else if (this.state.currentScene === 'QRWebView') {
      return (
        <QRWebView QRURI={this.state.QRURI} />
      );
    }

  }
}


// 获取屏幕宽度
var Dimensions = require('Dimensions');
var screenwidth = Dimensions.get('window').width;
var screenheight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
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
