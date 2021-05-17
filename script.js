// Opera 8.0+
var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);

// Edge (based on chromium) detection
var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

function webstoreRedirect() {
	if (isFirefox) { 
		if (confirm("TableDent is currently in the process of being reviewed for the Firefox Apps Store. Press OK to download the zip for manual install or press cancel to avoid installing the extension.")) {
			window.location.href = "/builds/tabledent-firefox.zip";
		};
	} else if (isChrome || isEdgeChromium || isBlink) {
		if (confirm("TableDent is currently in the process of being reviewed for the Chrome Webstore. Press OK to download the zip for manual install or press cancel to avoid installing the extension.")) {
			window.location.href = "/builds/tabledent-chromium.zip";
		};
	}
}