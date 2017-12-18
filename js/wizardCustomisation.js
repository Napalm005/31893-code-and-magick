'use strict';

(function () {
  var wizard = document.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  window.colorizeElement(wizardCoat, window.vars.WIZARD_COAT_COLOR, fillElement);
  window.colorizeElement(wizardEyes, window.vars.WIZARD_EYES_COLOR, fillElement);
  window.colorizeElement(fireball, window.vars.WIZARD_FIREBALL_COLOR, changeElementBackground);

  function fillElement(element, color) {
    element.style.fill = color;
  };
  function changeElementBackground(element, color) {
    element.style.backgroundColor = color;
  };
})();

