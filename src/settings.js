let hideWhitespace = document.getElementById('hideWhitespace');

chrome.storage.sync.get('hideWhitespace', function(data) {
  hideWhitespace.checked = data.hideWhitespace;
});

hideWhitespace.addEventListener('change', (event) => {
  chrome.storage.sync.set({hideWhitespace: event.target.checked});
});