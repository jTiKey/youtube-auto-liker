chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com/watch')) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["scripts/newTab.js", "scripts/waitForLikeToAppear.js", "scripts/likeVideo.js", "main.js"]
    });
  }
});