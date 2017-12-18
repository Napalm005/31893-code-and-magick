'use strict';

(function () {
  window.colorizeElement = function (element, colorsArray, callback) {
    element.addEventListener('click', function (evt) {
      var color = colorsArray[window.util.getRandomArbitary(0, window.vars.WIZARD_COAT_COLOR.length)]
      callback(element, color);
    });
  };
})();

