chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({enableWhitespaces: true}, function() {
        console.log("Enable whitespaces is true");
    });
});