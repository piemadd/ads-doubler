function allDefault() {
	var byid = document.querySelectorAll("[id*='google_ads_iframe']");
	console.log(byid);
		for (let i = 0; i < byid.length; i++) {
		byid[i].innerHTML += byid[i].innerHTML;
		console.log("byid")
		console.log(i)
	};
	var byclass = document.getElementsByClassName("adsbygoogle");
	console.log(byclass);
	for (let i = 0; i < byclass.length; i++) {
		byclass[i].innerHTML += byclass[i].innerHTML;
		console.log("byclass")
		console.log(i)
	};
}

browserAction.onClicked.addListener((tab) => {
	browser.tabs.executeScript({
		code: "allDefault()"
	});
});
