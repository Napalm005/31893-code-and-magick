'use strict';

(function () {
  var userNameInput = window.vars.setup.querySelector('.setup-user-name');
  var wizardCustomForm = window.vars.setup.querySelector('.setup-wizard-form');

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  // for edge
  userNameInput.addEventListener('input', function (evt) {
    evt.preventDefault();
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  wizardCustomForm.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(wizardCustomForm), function () {
      window.vars.setuo.classList.add('hidden');
    }, window.setup.errorHandler);
    evt.preventDefault();
  });
})();

