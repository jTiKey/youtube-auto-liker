export default class YouTubeLikeButtonDetector {
  constructor() {
    this.likeButtonTriggered = false;
    this.observer = new MutationObserver(() => this.waitForLikeButton());
    this.timeout = null;
    this.init();
  }

  init() {
    this.observer.observe(document.body, { childList: true, subtree: true });
    this.waitForLikeButton();
  }

  onLikeButtonVisible() {
    if (this.likeButtonTriggered) return;
    if (this.likeButton.getAttribute('aria-pressed') === 'true') {
      console.log("Already liked");
      return;
    }
    this.likeButton.click();
    this.likeButtonTriggered = true;
    this.observer.disconnect();
    console.log("Like button clicked");
  }

  waitForLikeButton() {
    console.log("Checking for like button...");
    this.likeButton = document.querySelector("#top-level-buttons-computed like-button-view-model button");
    if (this.likeButton && this.likeButton.offsetParent !== null) {
      clearTimeout(this.timeout);
      this.onLikeButtonVisible();
    } else {
      this.timeout = setTimeout(() => this.waitForLikeButton(), 1000);
    }
  }
}
