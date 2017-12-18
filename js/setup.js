'use strict';

(function () {
  var similarListElement = window.vars.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = [];
  var wizardsQuantity = 4;
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;
  var artifactsElement = document.querySelector('.setup-artifacts');
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

  createWizardsArray();
  function createWizardsArray() {
    for (var wizardItem = 1; wizardItem <= wizardsQuantity; wizardItem++) {
      wizards.push({
        name: window.vars.WIZARD_NAMES[window.util.getRandomArbitary(0, window.vars.WIZARD_NAMES.length)] + ' ' + window.vars.WIZARD_SURNAME[window.util.getRandomArbitary(0, window.vars.WIZARD_SURNAME.length)],
        coatColor: window.vars.WIZARD_COAT_COLOR[window.util.getRandomArbitary(0, window.vars.WIZARD_COAT_COLOR.length)],
        eyesColor: window.vars.WIZARD_EYES_COLOR[window.util.getRandomArbitary(0, window.vars.WIZARD_EYES_COLOR.length)]
      });
    }
  }

  function renderWizard(wizardItem) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardItem.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardItem.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardItem.eyesColor;
    return wizardElement;
  }

  renderWizardsList();
  function renderWizardsList() {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
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
