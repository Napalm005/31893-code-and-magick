'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.vars.setup.querySelector('.setup-close');
  var initPosition = {
    top: window.vars.setup.style.top,
    left: window.vars.setup.style.left
  };

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
    dialogPositionReset();
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
    window.util.isEnterEvent(evt, closePopup);
  });


  // drag and drop
  var dialogHandle = window.vars.setup.querySelector('.setup-user-pic');
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };
      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };
      window.vars.setup.style.top = (window.vars.setup.offsetTop - shift.y) + 'px';
      window.vars.setup.style.left = (window.vars.setup.offsetLeft - shift.x) + 'px';
    };
    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  function dialogPositionReset() {
    window.vars.setup.style.top = initPosition.top;
    window.vars.setup.style.left = initPosition.left;
  }
})();
