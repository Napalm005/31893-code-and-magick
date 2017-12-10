'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizards = [];
  var wizardsQuantity = 4;

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
})();
