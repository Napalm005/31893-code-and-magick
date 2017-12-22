'use strict';

(function () {
  window.colorizeElement = function (element, colorsArray, callback) {
    element.addEventListener('click', function () {
      var color = colorsArray[window.util.getRandomArbitary(0, window.vars.WizardProp.COAT_COLOR.length)]
      callback(element, color);
    });
  };
})();

