function changeLikeColor() {
  let intervalId = setInterval(() => {
    let likeSVG = document.querySelector('#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button-view-model > button > div.yt-spec-button-shape-next__icon > yt-icon > yt-animated-icon > ytd-lottie-player > lottie-component > svg > g > g > g:nth-child(6) > g:nth-child(1) > path');
    if (likeSVG) {
      likeSVG.style.fill = '#ffd700';
      clearInterval(intervalId);
    } else {
      console.error('Like SVG not found');
    }
  }, 1000)
}