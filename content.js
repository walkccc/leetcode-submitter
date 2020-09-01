document.addEventListener('keydown', function onEvent(e) {
  e = e || window.e;
  // "ctrl+return": click the "submit" button in LeetCode page
  if (e.ctrlKey && e.keyCode === 13) {
    document.querySelector('.submit__2ISl').click();
  }

  // "ctrl+`": close the 'x' and Console panel like a pro!
  if (e.ctrlKey && e.keyCode === 192) {
    const toClose = document.querySelector('.icon-wrapper__2q8n');
    if (toClose !== null) toClose.click();
  }
});
