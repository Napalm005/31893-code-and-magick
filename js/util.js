'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getMaxElement: function (arr) {
      var max = -1;
      for (var i = 0; i < arr.length; i++) {
        var time = arr[i];
        if (time > max) {
          max = time;
        }
      }
      return max;
    },
    getRandomArbitary: function (min, max) {
      return parseInt(Math.random() * (max - min) + min, 10);
    }
  };
})();

