package com.waterprotector;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;

import com.facebook.react.ReactActivity;

import java.util.concurrent.ArrayBlockingQueue;

import static com.google.zxing.activity.CaptureActivity.INTENT_EXTRA_KEY_QR_SCAN;
import static com.google.zxing.activity.CaptureActivity.RESULT_CODE_QR_SCAN;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "WaterProtector";
    }

    public static ArrayBlockingQueue myBlockingQueue = new ArrayBlockingQueue(1);

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data){
        super.onActivityResult(requestCode, resultCode, data);
        if(resultCode == RESULT_CODE_QR_SCAN && requestCode == 100) {
	        Bundle bundle = data.getExtras();
	        String scanResult = bundle.getString(INTENT_EXTRA_KEY_QR_SCAN);
            if (!TextUtils.isEmpty(scanResult)) {
                myBlockingQueue.add(scanResult);
            } else {
                myBlockingQueue.add("无数据传回");
            }
        } else {
            myBlockingQueue.add("resultCode 错误");
        }
    }
}
