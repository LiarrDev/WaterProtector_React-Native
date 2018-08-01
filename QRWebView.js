import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions,
  WebView
} from 'react-native';

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class QRWebView extends Component {
  static props = {
    QRURI: ''
  }

  //渲染
  render() {
    return (
      <View style={styles.container}>
        <WebView bounces={false}
                scalesPageToFit={true}
                // source={{uri:"http://www.hangge.com", method: 'GET'}}       // 把扫码获得的链接传到这里
                source={{uri:QRURI, method:'GET'}}
                style={{width:deviceWidth, height:deviceHeight}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  }
});

module.exports = QRWebView;
