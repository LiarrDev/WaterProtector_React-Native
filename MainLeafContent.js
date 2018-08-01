import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    ViewPagerAndroid,
    Navigator,
    ScrollView,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class MainLeafContent extends Component {
  render() {
    return (
      <View>
        <View style={styles.banner}>
          <Swiper style={styles.wrapper} autoplay={true}>
          {/* <View style={styles.slide1}> */}
            {/* <Text style={styles.text}>Hello Swiper</Text> */}
            <Image style={styles.banner_image_size} source={require('./images/banner/0.png')} />
          {/* </View> */}
          {/* <View style={styles.slide2}> */}
            {/* <Text style={styles.text}>Beautiful</Text> */}
            <Image style={styles.banner_image_size} source={require('./images/banner/1.png')} />
          {/* </View> */}
          {/* <View style={styles.slide3}> */}
            {/* <Text style={styles.text}>And simple</Text> */}
            <Image style={styles.banner_image_size} source={require('./images/banner/2.png')} />
          {/* </View> */}
          </Swiper>
        </View>

        <View style={styles.notice}>
          <Text>
            <Text style={styles.notice_title}>  水币商城  </Text>
            <Text style={styles.notice_content}>   🔊 关注公众号即可领取水币，点击查看 >> </Text>
          </Text>
        </View>

        <View style={styles.goods_view}>
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_1.png')} />
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_2.png')} />
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_3.png')} />
        </View>

        <View style={styles.goods_view}>
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_1.png')} />
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_2.png')} />
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_3.png')} />
        </View>
        <View style={styles.goods_view}>
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_1.png')} />
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_2.png')} />
          <Image style={styles.goods_image_size} source={require('./images/goods/goods_3.png')} />
        </View>

        {/* 这个 View 用来占位，使滑动到底部时页面内容不会被 FootBar 挡住 */}
        <View style={styles.placeholder}></View>
    </View>
    );
  }
}

// 获取屏幕宽度
var Dimensions = require('Dimensions');
var screenwidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  banner: {
    height: screenwidth * 673 / 1090,
    width: screenwidth
  },

  // wrapper: {
  //   height: screenwidth * 673 / 1090,
  //   width: screenwidth
  // },

  banner_image_size: {
    height: screenwidth * 673 / 1090,
    width: screenwidth
  },

  notice: {
    backgroundColor: "white",
    padding: 5,
    borderWidth: 2,
    borderTopColor: "#E0E0E0",
    borderBottomColor: "#E0E0E0",
    borderLeftColor: "white",
    borderRightColor: "white"
  },

  notice_title: {
    backgroundColor: "red",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },

  notice_content: {
    color: "red",
    fontSize: 12,
  },

  goods_view: {
    flexDirection: "row",
    justifyContent: "center"
  },

  goods_image_size: {
    width: screenwidth / 4,
    height: screenwidth / 4 * (446 / 310),
    margin: screenwidth / 4 / 4 / 2,
  },

  placeholder: {
    width: screenwidth,
    height: screenwidth * 362 / 1081,
  }

});

// 导出模块
module.exports = MainLeafContent;
