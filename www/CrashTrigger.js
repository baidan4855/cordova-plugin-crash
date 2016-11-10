var CrashTrigger = function() {};

CrashTrigger.prototype.do = function(successCallback, errorCallback, options) {
  cordova.exec(successCallback, errorCallback, "CrashTrigger", "do", []);
}

var crashTrigger = new CrashTrigger();

module.exports = crashTrigger;
