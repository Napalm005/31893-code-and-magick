'use strict';

(function () {
  var CALLBACK_NAME = '__jsonpCallback';
  var SERVER_URL = '//js.dump.academy/code-and-magick/';

  var setup = function (onSuccess, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onSuccess(xhr.response);
          break;
        case 400:
          onError(xhr.status + ': Неверный запрос' + xhr.statusText);
          break;
        case 401:
          onError(xhr.status + ': ' + xhr.statusText);
          break;
        case 404:
          onError(xhr.status + ': ' + xhr.statusText);
          break;
        default:
          onError('Ваще непонятно');
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000; // 10s

    return xhr;
  };

  window.backend = {
    save: function (data, onSuccess, onError) {
      var xhr = setup(onSuccess, onError);

      xhr.open('POST', SERVER_URL);
      xhr.send(data);
    },
    load: function (onSuccess, onError) {
      window[CALLBACK_NAME] = function (data) {
        onSuccess(data);
      };

      var loader = document.createElement('script');

      loader.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });
      loader.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться');
      });

      loader.src = SERVER_URL + 'data?callback=' + CALLBACK_NAME;
      document.body.append(loader);
    }
  };
})();
