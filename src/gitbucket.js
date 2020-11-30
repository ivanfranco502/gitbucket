chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({hideWhitespace: false}, function() {
        console.log("Hide whitespace changes is false");
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'github.com'},
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
});