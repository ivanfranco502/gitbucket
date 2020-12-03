chrome.storage.sync.get('hideWhitespace', function(data) {
    let prFileRegex = /([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?\/pull\/[0-9]+\/files/gi;
    let queryStringRegex = /\?.+=.*/g;
    let hideWhitespace = data.hideWhitespace;

    if (hideWhitespace) {
        let currentUrl = window.location.href;
        if (currentUrl.match(prFileRegex) && currentUrl.indexOf('?w=') === -1 && currentUrl.indexOf('&w=') === -1) {
                currentUrl.match(queryStringRegex) ? window.location.href += "&w=1" : window.location.href += "?w=1";
        }

        let anchors = document.getElementsByTagName("a"); 
        for (let idx = 0; idx < anchors.length; ++idx) {
            if (anchors[idx].href.match(prFileRegex)) {
                let compareFileUrl = anchors[idx].href;
                if (compareFileUrl.indexOf('?w=') === -1 && compareFileUrl.indexOf('&w=') === -1) {
                    compareFileUrl.match(queryStringRegex) ? anchors[idx].href += "&w=1" : anchors[idx].href += "?w=1"; 
                }
            }
        }
    }
});
  
