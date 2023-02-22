function clickButton(className) {
  const button = document.querySelector(className);
  if (button === null) {
    return;
  }
  button.click();
}

document.addEventListener('keydown', function onEvent(e) {
  e = e || window.e;
  // Click the "Submit" button.
  if (e.ctrlKey && e.key === 'Enter') {
    clickButton('.custom-submit__2ISl');
  }

  // Close the x (Reset to default).
  if (e.ctrlKey && e.key === 'x') {
    clickButton('.icon-wrapper__382i');
  }

  // Toggle the Console panel like a pro!
  if (e.ctrlKey && e.key === 'c') {
    clickButton('.custom-testcase__2ah7');
  }
});
