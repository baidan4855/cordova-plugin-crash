package com.ihealth.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;

public class CrashTrigger extends CordovaPlugin{

	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
	    super.initialize(cordova, webView);
	}

	@Override
	public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
	    if ("do".equals(action)) {
          int[] arr = new int[1];
          arr[2] = 3;
	        callbackContext.success();
	        return true;
	    }
	    return false;  // Returning false results in a "MethodNotFound" error.
	}
}
