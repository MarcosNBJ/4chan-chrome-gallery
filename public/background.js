let thread_url;
chrome.browserAction.onClicked.addListener(function () {
    const queryInfo = {active: true, lastFocusedWindow: true};
    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        const url = tabs[0].url;
        thread_url = url;
        chrome.tabs.create({ url: chrome.runtime.getURL("index.html") });
    });

});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        sendResponse({url: thread_url});
      
    }
  );
