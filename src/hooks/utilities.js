var path = require("path");
var fs = require("fs");

var styles = {
    'green'         : '\x1B[1m\x1B[32m%s\x1B[39m\x1B[22m',
    'red'           : '\x1B[1m\x1B[31m%s\x1B[39m\x1B[22m',
    'yellow'        : '\x1B[1m\x1B[33m%s\x1B[39m\x1B[22m',
    'blue'          : '\x1B[1m\x1B[44m%s\x1B[39m\x1B[22m'
};

module.exports = {
    colorLog: function(style, content) {
      console.log(styles[style], content);
    },
    readContent: function(path) {
        return fs.readFileSync(path, "utf-8");
    },
    saveContent: function(path, content) {
        fs.writeFileSync(path, content);
    },
    files: {
      CordovaActivity: "platforms/android/CordovaLib/src/org/apache/cordova/CordovaActivity.java",
      CDVViewController: "platforms/ios/CordovaLib/Classes/Public/CDVViewController.m" 
    }
};
