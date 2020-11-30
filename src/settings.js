let changeHideWhitespace = document.getElementById('hideWhitespace');
let regex = /([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?\/pull\/[0-9]+\/files/gi;

chrome.storage.sync.get('hideWhitespace', function(data) {
  changeHideWhitespace.checked = data.hideWhitespace;
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'if (' + changeHideWhitespace.checked + '){ let anchors = document.getElementsByTagName("a"); for (let idx = 0; idx < anchors.length; ++idx){ if (a[idx.href].match(regex)) { a[idx].href += "?w=1"; } }'}
    );
});