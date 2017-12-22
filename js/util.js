'use strict';

(function () {
  var Keycode = {
    ESC: 27,
    ENTER: 13
  }
  var lastTimeout;

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === Keycode.ESC) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === Keycode.ENTER) {
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
    },
    debounce: function (fun, debounceInterval) {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(fun, debounceInterval);
    }
  };
})();

