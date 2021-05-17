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

function byIdDefault(idname) {
	var byid = document.querySelectorAll("[id*='google_ads_iframe']");
		for (let i = 0; i < byid.length; i++) {
		byid[i].innerHTML += byid[i].innerHTML;
	};
};

function byClassDefault(classname) {
	var byclass = document.getElementsByClassName("adsbygoogle");
	for (let i = 0; i < byclass.length; i++) {
		byclass[i].innerHTML += byclass[i].innerHTML;
	};
};