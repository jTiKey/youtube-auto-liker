function initializeObserver() {
  let observer = new MutationObserver(() => {
    likeButton = waitForLikeToAppear();
    if (likeButton) {
      likeVideo(likeButton);
      initialLoad = true;
      observer.disconnect();
    }
  });
  let node = null
  let title = document.querySelector(".watch-active-metadata");
  try {
    node = initialLoad ? document.body : title;
  } catch (error) {

  }
  if (!node) {
    node = document.body;
  }

  observer.observe(node, { childList: true, subtree: true });
}

// Initialize observer on page load
initializeObserver();