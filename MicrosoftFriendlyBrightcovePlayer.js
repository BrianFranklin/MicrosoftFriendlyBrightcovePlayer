/* MicrosoftFriendlyBrightcovePlayer.js
 * By Brian Franklin
 * https://www.vorpal.io
 * 
 * This script enhances Brightcove Smart Player embed logic to allow Xbox One and Windows Phone HTML5 fallback
 */
 
// isSupportedHTMLDevice has had Xbox One and WPDesktop added to the supported user agent types
brightcove.isSupportedHTMLDevice = function (pUAString) {
    var types = ["iPad", "iPhone", "iPod", "android", "Silk", "Xbox One", "WPDesktop"];
    var numTypes = types.length;
    var uaString = pUAString || brightcove.userAgent;
    for (var i = 0; i < numTypes; i++) {
        if (uaString.match(new RegExp(types[i], "i"))) {
            return true;
        }
    }
    return false;
};

// isMetroIE detects Modern IE mode on Windows 8 and RT to use whitelisted Flash players. This will also return true for Xbox One and Windows Phone, so we want to skip this logic.
brightcove.isMetroIE = function () {
    var version = 0;
    if (navigator.appVersion.indexOf("Xbox One") != -1 || navigator.appVersion.indexOf("WPDesktop") != -1) {
        return false;
    }
    if (navigator.appVersion.indexOf("MSIE") != -1) {
        var appSplit = navigator.appVersion.split("MSIE");
        if (appSplit.length > 1) {
            version = parseFloat(appSplit[1]);
        }
    }
    if (version < 10 || isNaN(version)) {
        return false;
    }
    var activeXSupport = false;
    try {
        activeXSupport = !! new ActiveXObject("htmlfile");
    } catch (e) {
        activeXSupport = false;
    }
    return !activeXSupport;
};
