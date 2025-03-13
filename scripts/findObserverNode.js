function findObserverNode() {
  let node = null
  let title = document.querySelector(".watch-active-metadata");
  try {
    node = initialLoad ? document.body : title;
  } catch (e) {
    if (e instanceof ReferenceError) {
      node = document.body;
    }
  }
  if (!node) {
    node = document.body;
  }
  return node;
}