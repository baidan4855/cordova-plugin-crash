var path = require("path");
var fs = require("fs");
var utilities = require("./utilities");



module.exports = function(context) {
  utilities.colorLog("red", '-------------------------------------------------------------');
  utilities.colorLog("red", 'Warnning: Never use this plugin in a production environment!!')

  var platforms = context.opts.cordova.platforms;

  if (platforms.indexOf("android") !== -1) {
    var crashCode = 'throw new RuntimeException("this is a test exception");\n        $1';
    var commentCode = '/* comment by crash trigger\n        $1\n        */';
    var cdvActivityPath = utilities.files.CordovaActivity;
    var content = utilities.readContent(cdvActivityPath);
    content = content.replace(/(super.onPause)/m,crashCode);
    content = content.replace(/(super.onPause[^}]+})/m, commentCode);
    utilities.saveContent(cdvActivityPath, content);
    utilities.colorLog("red", 'Tip: CordovaActivity.java has been changed automatically!!');
  }

  if (platforms.indexOf("ios") !== -1) {
    var crashCode = '$1\n    @throw [NSException exceptionWithName:@"TestException" reason:@"this is a test exception" userInfo:nil];';
    var cdvViewController = utilities.files.CDVViewController;
    var content = utilities.readContent(cdvViewController);
    content = content.replace(/(\@"applicationWillResignActive"\);)/m, crashCode);
    utilities.saveContent(cdvViewController, content);
    utilities.colorLog("red", 'Tip: CDVViewController.m has been changed automatically!!');
  }

  utilities.colorLog("red", '-------------------------------------------------------------');
};
