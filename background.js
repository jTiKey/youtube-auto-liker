chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
  if (details.url && details.url.startsWith("https://www.youtube.com/watch")) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ["content.js"]
    }).catch((error) => console.error("Injection error:", error));
  }
});