package com.waterprotector;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;


/**
 * 注册模块
 * 实现 ReactPackage 接口暴露给 React Native 调用
 */

public class MyReactPackage implements ReactPackage {

	// 注册 MyIntentModule 添加的交互模块
	@Override
	public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
		return Arrays.<NativeModule>asList(new MyIntentModule(reactContext));
	}

	@Override
	public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
		return Collections.emptyList();
	}
}
