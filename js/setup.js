'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];
var wizardsQuantity = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');
var wizard = document.querySelector('.wizard');
var wizardCoat = wizard.querySelector('.wizard-coat');
var wizardEyes = wizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

createWizardsArray();
function createWizardsArray() {
  for (var wizardItem = 1; wizardItem <= wizardsQuantity; wizardItem++) {
    wizards.push({
      name: WIZARD_NAMES[getRandomArbitary(0, WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAME[getRandomArbitary(0, WIZARD_SURNAME.length)],
      coatColor: WIZARD_COAT_COLOR[getRandomArbitary(0, WIZARD_COAT_COLOR.length)],
      eyesColor: WIZARD_EYES_COLOR[getRandomArbitary(0, WIZARD_EYES_COLOR.length)]
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

// userDialog.querySelector('.setup-similar').classList.remove('hidden');

function getRandomArbitary(min, max) {
  return parseInt(Math.random() * (max - min) + min, 10);
}

function onPopupEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

// for edge
userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

wizardCoat.addEventListener('click', function (evt) {
  evt.target.style.fill = WIZARD_COAT_COLOR[getRandomArbitary(0, WIZARD_COAT_COLOR.length)];
});
wizardEyes.addEventListener('click', function (evt) {
  evt.target.style.fill = WIZARD_EYES_COLOR[getRandomArbitary(0, WIZARD_EYES_COLOR.length)];
});
fireball.addEventListener('click', function (evt) {
  evt.target.style.backgroundColor = WIZARD_FIREBALL_COLOR[getRandomArbitary(0, WIZARD_FIREBALL_COLOR.length)];
});
