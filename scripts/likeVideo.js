function likeVideo(likeButton) {
  if (!isSubscribedBell) {
    return;
  }
  if (likeButton.getAttribute('aria-pressed') === 'true') {
    console.log("Already liked");
    return;
  }
  likeButton.click()
  changeLikeColor()
}