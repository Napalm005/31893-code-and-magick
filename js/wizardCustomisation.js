'use strict';

(function () {
  var wizard = document.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function (evt) {
    evt.target.style.fill = window.vars.WIZARD_COAT_COLOR[window.util.getRandomArbitary(0, window.vars.WIZARD_COAT_COLOR.length)];
  });
  wizardEyes.addEventListener('click', function (evt) {
    evt.target.style.fill = window.vars.WIZARD_EYES_COLOR[window.util.getRandomArbitary(0, window.vars.WIZARD_EYES_COLOR.length)];
  });
  fireball.addEventListener('click', function (evt) {
    evt.target.style.backgroundColor = window.vars.WIZARD_FIREBALL_COLOR[window.util.getRandomArbitary(0, window.vars.WIZARD_FIREBALL_COLOR.length)];
  });
})();

