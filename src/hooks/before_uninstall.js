var path = require("path");
var fs = require("fs");
var utilities = require("./utilities");



module.exports = function(context) {

  var platforms = context.opts.cordova.platforms;

  if (platforms.indexOf("android") !== -1) {
    var crashCode = 'throw new RuntimeException("this is a test exception");\n        ';
    var commentReg = /\/\* comment by crash trigger\n        (super.onPause[^}]+})\n        \*\//;
    var cdvActivityPath = utilities.files.CordovaActivity;
    var content = utilities.readContent(cdvActivityPath);
    content = content.replace(crashCode, '');
    content = content.replace(commentReg, '$1');
    utilities.saveContent(cdvActivityPath, content);
    utilities.colorLog("green", 'Tip: CordovaActivity.java has been restored automatically!!')
  }

  if (platforms.indexOf("ios") !== -1) {
    var crashCode = '@throw [NSException exceptionWithName:@"TestException" reason:@"this is a test exception" userInfo:nil];\n    ';
    var cdvViewController = utilities.files.CDVViewController;
    var content = utilities.readContent(cdvViewController);
    content = content.replace(crashCode, '');
    utilities.saveContent(cdvViewController, content);
    utilities.colorLog("green", 'Tip: CDVViewController.m has been restored automatically!!');
  }
};
