function initializeObserver() {
  let observer = new MutationObserver(() => {
    const likeButton = waitForLikeToAppear();
    if (likeButton) {
      likeVideo(likeButton);
      initialLoad = true;
      observer.disconnect();
    }
  });
  let node = findObserverNode();
  observer.observe(node, { childList: true, subtree: true });
}

// Initialize observer on page load
initializeObserver();