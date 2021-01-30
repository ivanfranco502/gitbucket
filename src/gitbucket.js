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


let conversationElement = document.getElementById("discussion_bucket");

if (conversationElement != null) {
    let discussionTimeline = conversationElement.getElementsByClassName("pull-discussion-timeline")[0];
    let discussionMerging = document.getElementById("partial-pull-merging");
    let cloneMergingDiv = discussionMerging.cloneNode(true);
    let mergingDetails = cloneMergingDiv.getElementsByClassName("js-details-container")[0];

    cloneMergingDiv.removeChild(cloneMergingDiv.getElementsByClassName("sr-only")[0]);

    let removeP = mergingDetails.getElementsByTagName("p")[0];
    if(removeP != null) {
        mergingDetails.removeChild(removeP);
    }
    let mergeMessage = mergingDetails.getElementsByClassName("merge-message")[0];
    if (mergeMessage != null){
        mergeMessage.remove();
    }
    mergingDetails.classList.remove("merge-pr");
    discussionTimeline.insertBefore(cloneMergingDiv, discussionTimeline.firstChild);
}
