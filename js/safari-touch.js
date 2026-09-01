(function () {
  document.addEventListener('touchend', function (event) {
    var courseButton = event.target.closest ? event.target.closest('.course-choice') : null;
    if (courseButton && !courseButton.disabled) {
      event.preventDefault();
      var selects = document.querySelectorAll('#rounds-list .round-course');
      for (var i = 0; i < selects.length; i += 1) {
        if (!selects[i].value) {
          selects[i].value = courseButton.getAttribute('data-course');
          selects[i].dispatchEvent(new Event('change', { bubbles: true }));
          break;
        }
      }
      return;
    }
    var teacherButton = event.target.closest ? event.target.closest('#show-teachers') : null;
    if (teacherButton) {
      event.preventDefault();
      document.getElementById('teachers-modal').classList.remove('hidden');
    }
    var closeButton = event.target.closest ? event.target.closest('#close-teachers') : null;
    if (closeButton) {
      event.preventDefault();
      document.getElementById('teachers-modal').classList.add('hidden');
    }
  }, { passive: false });
}());
