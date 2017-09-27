
var combiner = require("concat-files"),
    path = require("path");

exports.initialize = () => {

    var globalJSFiles = [
        path.join(__dirname, 'js/action-btn.js'),
        path.join(__dirname, 'js/closeable-tabs.js'),
        path.join(__dirname, 'js/responsive-tabs.js'),
        path.join(__dirname, 'js/selectable.js'),
        path.join(__dirname, 'js/sticky-header.js')
    ];
    combiner(globalJSFiles, path.join(__dirname, '_min/js/global.combined.js'), function () { console.log('global.combined.js') });
};