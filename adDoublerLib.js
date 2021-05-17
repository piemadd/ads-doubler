function byId(idname) {
	var byid = document.querySelectorAll(`[id*=${idname}]`);
		for (let i = 0; i < byid.length; i++) {
		byid[i].innerHTML += byid[i].innerHTML;
	};
};

function byClass(classname) {
	var byclass = document.getElementsByClassName(classname);
	for (let i = 0; i < byclass.length; i++) {
		byclass[i].innerHTML += byclass[i].innerHTML;
	};
};

function byIdDefault() {
	var byid = document.querySelectorAll("[id*='google_ads_iframe']");
		for (let i = 0; i < byid.length; i++) {
		byid[i].innerHTML += byid[i].innerHTML;
	};
};

function byClassDefault() {
	var byclass = document.getElementsByClassName("adsbygoogle");
	for (let i = 0; i < byclass.length; i++) {
		byclass[i].innerHTML += byclass[i].innerHTML;
	};
};

function byClassGuessA() {
	var byclassguessa = document.querySelectorAll("[class*='sponsored']");
	for (let i = 0; i < byclassguessa.length; i++) {
		byclassguessa[i].innerHTML += byclassguessa[i].innerHTML;
	};
}
	
function byClassGuessB() {	
	var byclassguessb = document.querySelectorAll("[class*='ad']");
	for (let i = 0; i < byclassguessb.length; i++) {
		byclassguessb[i].innerHTML += byclassguessb[i].innerHTML;
	};
}