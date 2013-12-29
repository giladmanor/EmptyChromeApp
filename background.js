/**
 * @author Gilad Manor
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
  	id: "EmptyApp",
    bounds: {
      width: 790,
      height: 600
    }
  });
});