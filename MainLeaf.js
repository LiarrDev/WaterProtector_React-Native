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

// import Swiper from 'react-native-swiper';

// 引入主页内容
const MainLeafContent = require('./MainLeafContent');

// 引入底部菜单栏
const FootBar = require('./FootBar');

type Props = {};
export default class MainLeaf extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>

        <StatusBar translucent={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MainLeafContent />
        </ScrollView>
        <View style={{position: 'absolute', bottom: 0}}>
          <FootBar />
        </View>
      </View>
    );
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

// 导出模块
module.exports = MainLeaf;
