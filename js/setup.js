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

  window.setup = {
    errorHandler: function () {
      alert("Всё плохо!");
    }
  };

  window.backend.load(successHandler, window.setup.errorHandler);

  function successHandler(data) {
    wizards = data;
    window.render.renderWizardsList(wizards);
  }

  window.colorizeElement(wizardCoat, window.vars.WIZARD_COAT_COLOR, fillElement);
  window.colorizeElement(wizardEyes, window.vars.WIZARD_EYES_COLOR, fillElement);
  window.colorizeElement(fireball, window.vars.WIZARD_FIREBALL_COLOR, changeElementBackground);

  function fillElement(element, color) {
    element.style.fill = color;
  }
  function changeElementBackground(element, color) {
    element.style.backgroundColor = color;
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
