chrome.storage.sync.get('hideWhitespace', function(data) {
    let regex = /([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?\/pull\/[0-9]+\/files/gi;
    let hideWhitespace = data.hideWhitespace;

    if (hideWhitespace) {
        let anchors = document.getElementsByTagName("a"); 
        for (let idx = 0; idx < anchors.length; ++idx) {
            if (anchors[idx].href.match(regex)) {
                anchors[idx].href += "?w=1"; 
            }
        }
    }
});
  
