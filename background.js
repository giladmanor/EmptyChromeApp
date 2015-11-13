/**
 * @author Gilad Manor
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
  	id: "Hubitus",
    bounds: {
      width: 320,
      height: 660
    }
  });
});