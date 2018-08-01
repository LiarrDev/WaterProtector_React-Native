package com.waterprotector;

import android.app.Activity;
import android.content.Intent;
import android.provider.SyncStateContract;
import android.text.TextUtils;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import static com.waterprotector.MainActivity.myBlockingQueue;


/**
 * 原生 Activity 与 React 交互模块
 */

public class MyIntentModule extends ReactContextBaseJavaModule {
	public MyIntentModule(ReactApplicationContext reactContext) {
		super(reactContext);
	}

	@Override
	public String getName() {
		return "IntentMoudle";
	}
	//注意：记住getName方法中的命名名称，JS中调用需要

	@ReactMethod
	public void startActivityFromJS(String name, String params) {
		try {
			Activity currentActivity = getCurrentActivity();
			if (null != currentActivity) {
				Class toActivity = Class.forName(name);
				Intent intent = new Intent(currentActivity, toActivity);
				intent.putExtra("params", params);
				currentActivity.startActivity(intent);
			}
		} catch (Exception e) {
			throw new JSApplicationIllegalArgumentException("不能打开Activity : " + e.getMessage());
		}
	}

	@ReactMethod
	public void dataToJS(Callback successBack, Callback errorBack) {
		try {
			Activity currentActivity = getCurrentActivity();
			String result = currentActivity.getIntent().getStringExtra("data");
			if (TextUtils.isEmpty(result)) {
				result = "没有数据";
			}
			successBack.invoke(result);
		} catch (Exception e) {
			errorBack.invoke(e.getMessage());
		}
	}


	@ReactMethod
	public void startActivityForResult(String activityName, int requestCode, Callback successCallback, Callback erroCallback) {
		try {
			Activity currentActivity = getCurrentActivity();
			if(null != currentActivity){
				Class aimActivity = Class.forName(activityName);
				Intent intent = new Intent(currentActivity, aimActivity);
				currentActivity.startActivityForResult(intent, requestCode);
				String result = (String) myBlockingQueue.take();
				successCallback.invoke(result);
			}
		} catch (Exception e) {
			erroCallback.invoke(e.getMessage());
			throw new JSApplicationIllegalArgumentException("Could not open the activity : " + e.getMessage());
		}
	}
}