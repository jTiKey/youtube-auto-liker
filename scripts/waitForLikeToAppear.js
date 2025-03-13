function waitForLikeToAppear() {
  console.log("waitForLikeButton triggered");
  let likeButton = document.querySelector("#top-level-buttons-computed like-button-view-model button");
  if (likeButton && likeButton.offsetParent !== null) {
    return likeButton
  }
}