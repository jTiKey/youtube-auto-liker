function likeVideo(likeButton) {
  if (likeButton.getAttribute('aria-pressed') === 'true') {
    console.log("Already liked");
    return;
  }
  likeButton.click();
}