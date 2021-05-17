const byId = (idname) => {
	var byid = document.querySelectorAll(`[id*=${idname}]`);
		for (let i = 0; i < byid.length; i++) {
		byid[i].innerHTML += byid[i].innerHTML;
	};
};

const byClass = (classname) => {
	var byclass = document.getElementsByClassName(classname);
	for (let i = 0; i < byclass.length; i++) {
		byclass[i].innerHTML += byclass[i].innerHTML;
	};
};

cont byIdDefault = (idname) => {
	var byid = document.querySelectorAll("[id*='google_ads_iframe']");
		for (let i = 0; i < byid.length; i++) {
		byid[i].innerHTML += byid[i].innerHTML;
	};
};

const byClassDefault = (classname) => {
	var byclass = document.getElementsByClassName("adsbygoogle");
	for (let i = 0; i < byclass.length; i++) {
		byclass[i].innerHTML += byclass[i].innerHTML;
	};
};

exports.byId = byId;
exports.byClass = byClass;
exports.byIdDefault = byIdDefault;
exports.byClassDefault = byClassDefault;