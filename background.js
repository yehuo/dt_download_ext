// chrome.action.onClicked.addListener((tab) => {
//   chrome.tabs.create({ url:  });
// });

// listen to context。js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "followLink" && sender.tab) {
    chrome.tabs.update(sender.tab.id, { active: true });
  } else if (message.action === "downloadLink" && message.url) {
    var timestamp=new Date().getTime();
    chrome.downloads.download({
      url: message.url,
      // filename: 'example.mp4',
      // saveAs: true,
    });
  }
});
