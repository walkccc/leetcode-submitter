document.addEventListener('keydown', function onEvent(e) {
  e = e || window.e;
  // "ctrl+return": click the "submit" button in LeetCode page
  if (e.ctrlKey && e.keyCode === 13) {
    document.querySelector('.submit__2ISl').click();
  }
});
