function waitForLikeToAppear() {
  let likeButton = document.querySelector("#top-level-buttons-computed like-button-view-model button");
  if (likeButton) {
    return likeButton
  }
}