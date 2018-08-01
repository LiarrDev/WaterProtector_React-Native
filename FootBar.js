import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  NativeModules,
  ToastAndroid
} from 'react-native';

export default class FootBar extends Component {
  _onPressScanBTN() {
    // NativeModules.IntentMoudle.startActivityFromJS("com.google.zxing.activity.CaptureActivity", null);
    NativeModules.IntentMoudle.startActivityForResult("com.google.zxing.activity.CaptureActivity", 100,
      (successMsg)=>{
        // ToastAndroid.show('二维码的字符串为：' + successMsg, ToastAndroid.LONG);
        alert(successMsg);
        // this.setState({TEXT:successMsg,});
      },
      (erroMsg)=>{alert(erroMsg)}
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.footbarbg} source={require('./images/footbar/footbar_background.png')}>

          <TouchableOpacity>
            {/* 充值按钮 */}
            <Image style={styles.moneybtn} source={require('./images/footbar/money_btn.png')} />
          </TouchableOpacity>

          <TouchableOpacity onPress={this._onPressScanBTN}>
            {/* 扫码按钮 */}
            <Image style={styles.scanbtn} source={require('./images/footbar/scan_btn.png')} />
          </TouchableOpacity>

          <TouchableOpacity>
            {/* 我的按钮 */}
            <Image style={styles.mebtn} source={require('./images/footbar/me_btn.png')} />
          </TouchableOpacity>

        </ImageBackground>
      </View>
    );
  }
}

// 获取屏幕宽度
var Dimensions = require('Dimensions');
var screenwidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row'
  },

  footbarbg: {
    flexDirection: 'row',
    width: screenwidth,
    height: screenwidth * 362 / 1081,
    justifyContent: 'center'
  },

  scanbtn: {
    width: screenwidth * 255 / 1081,
    height: screenwidth * 255 / 1081,
    margin: screenwidth * 362 / 1081 * 0.1,         // 扫描按钮的外边距为 FootBar 的 10%
  },

  moneybtn: {
    width: screenwidth * 101 / 1081,
    height: screenwidth * 101 / 1081,
    marginTop: screenwidth * 362 / 1081 * 0.6,      // 充值按钮的上边距为 FootBar 的 60%
    marginRight: screenwidth * 362 / 1081 * 0.5,    // 充值按钮的右边距为 FootBar 的 50%
  },

  mebtn: {
    width: screenwidth * 101 / 1081,
    height: screenwidth * 101 / 1081,
    marginTop: screenwidth * 362 / 1081 * 0.6,      // 我的按钮的上边距为 FootBar 的 50%
    marginLeft: screenwidth * 362 / 1081 * 0.5,     // 我的按钮的左边距为 FootBar 的 50%
  }

});

// 导出模块
module.exports = FootBar;
