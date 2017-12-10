'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.vars.setup.querySelector('.setup-close');

  function onPopupEscPress(evt) {
    window.util.isEscEvent(evt, closePopup);
  }

  function openPopup() {
    window.vars.setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  }

  function closePopup() {
    window.vars.setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
  });
})();
