var backgroundPageConnection = chrome.runtime.connect({
  name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
  let harLog =  browser.devtools.network.getHAR();
  console.log(`HAR version: ${harLog.version}`);
  for (const entry of harLog.entries) {
    console.log(entry.request.url);
  }
});

// Relay the tab ID to the background page
backgroundPageConnection.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId,
  scriptToInject: "content_script.js"
});