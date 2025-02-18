if (typeof likeButtonTriggered === 'undefined') {
  likeButtonTriggered = false;
} else {
  likeButtonTriggered = false;
}

function onLikeButtonVisible() {
  if (likeButtonTriggered) return;
  if (likeButton.getAttribute('aria-pressed') === 'true') {
    console.log("Already liked");
    return;
  }
  likeButton.click();
  likeButtonTriggered = true;
  observer.disconnect(); // Stop the observer
  console.log("????????????????????");
}

function waitForLikeButton() {
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!");
  likeButton = document.querySelector("#top-level-buttons-computed like-button-view-model button");
  if (likeButton && likeButton.offsetParent !== null) {
    clearTimeout(timeout);
    onLikeButtonVisible();
  } else {
    timeout = setTimeout(waitForLikeButton, 1000);
  }
}

if (typeof observer === 'undefined') {
  observer = new MutationObserver(() => {
    waitForLikeButton();
  });
}


observer.observe(document.body, { childList: true, subtree: true });
waitForLikeButton(); // Run on initial load