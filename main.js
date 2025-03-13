let likeButton = null
let likeButtonTriggered  = false

let observer = new MutationObserver(() => {
  likeButton = waitForLikeToAppear();
  if (likeButton && !likeButtonTriggered) {
    observer.disconnect();
    likeVideo(likeButton)
  }
});

observer.observe(document.body, { childList: true, subtree: true });