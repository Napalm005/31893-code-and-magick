'use strict';

(function () {
  var wizards = [];
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');
  var wizard = document.querySelector('.wizard');
  var wizardCoat = wizard.querySelector('.wizard-coat');
  var wizardEyes = wizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  var coatColor;
  var eyesColor;
  var DEBOUNCE_INTERVAL = 300;

  window.setup = {
    errorHandler: function () {
      alert("Всё плохо!");
    }
  };

  window.backend.load(successHandler, window.setup.errorHandler);

  function successHandler(data) {
    wizards = data;
    window.render(wizards);
  }

  window.colorizeElement(wizardCoat, window.vars.WizardProp.COAT_COLOR, fillCoat);
  window.colorizeElement(wizardEyes, window.vars.WizardProp.EYES_COLOR, fillEyes);
  window.colorizeElement(fireball, window.vars.WizardProp.FIREBALL_COLOR, changeElementBackground);

  function fillCoat(element, color) {
    element.style.fill = color;
    coatColor = color;
    window.util.debounce(updateWizards, DEBOUNCE_INTERVAL);
  }
  function fillEyes(element, color) {
    element.style.fill = color;
    eyesColor = color;
    window.util.debounce(updateWizards, DEBOUNCE_INTERVAL);
  }
  function changeElementBackground(element, color) {
    element.style.backgroundColor = color;
  }
  function updateWizards() {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  }
  function getRank(wizardOne) {
    var rank = 0;
    if (wizardOne.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizardOne.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  }
  function namesComparator(left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });
  shopElement.addEventListener('dragend', function () {
    artifactsElement.style.outline = 'none';
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });
  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem.cloneNode(true));
    artifactsElement.style.outline = 'none';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });
})();
