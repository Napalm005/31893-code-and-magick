'use strict';

(function () {
  var similarListElement = window.vars.setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  function createWizard(wizardItem) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizardItem.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizardItem.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizardItem.eyesColor;
    return wizardElement;
  }

  window.render = {
    renderWizardsList: function(wizards) {
      var fragment = document.createDocumentFragment();
      for (var i = 0; i < wizards.length; i++) {
        fragment.appendChild(createWizard(wizards[i]));
      }
      similarListElement.appendChild(fragment);
    }
  };
})();
