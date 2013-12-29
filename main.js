window.onresize = doLayout;

function initApp() {
	console.log("initApp");
	var webview = document.querySelector('webview');
	doLayout();
	document.querySelector('webview').src = "https://medium.com/p/2fe38d8bbe59";

};

function doLayout() {
	var webview = document.querySelector('webview');
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var webviewWidth = windowWidth;
	var webviewHeight = windowHeight;

	webview.style.width = webviewWidth + 'px';
	webview.style.height = webviewHeight + 'px';

}



onload = initApp;
