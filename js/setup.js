'use strict';

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYECOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARDS_NUMBER = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListWizards = document.querySelector('.setup-similar-list');
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


// Возвращает случаный элемент из массива
var getRandomProperties = function (el) {
  var randInteger = Math.floor(Math.random() * el.length);
  for (var i = 0; i < el.length; i++) {
    var randElement = el[randInteger];
  }
  return randElement;
};

// Собираем массив из объектов
var getAllwizards = function (fn) {
  for (var j = 0; j < WIZARDS_NUMBER; j++) {
    wizards.push({
      name: fn(WIZARD_NAME) + ' ' + fn(WIZARD_LASTNAME),
      coatcolor: fn(WIZARD_COATCOLOR),
      color: fn(WIZARD_EYECOLOR)
    });
  }

  return wizards;
};

getAllwizards(getRandomProperties);

// Добавляем магу имя, цвет глаз и плаща
var renderWizards = function (wizard) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.color;
  wizardElement.querySelector('.wizard-head').style.fill = wizard.color;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.color;
  wizardElement.querySelector('.wizard-hands').style.fill = wizard.color;
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  return wizardElement;
};

// Создаем DOM элемент
var addWizardsElement = function (wizardsList) {
  var fragment = document.createDocumentFragment();
  for (var y = 0; y < WIZARDS_NUMBER; y++) {
    fragment.appendChild(renderWizards(wizards[y]));
  }

  return wizardsList.appendChild(fragment);
};

addWizardsElement(similarListWizards);

userDialog.querySelector('.setup-similar').classList.remove('hidden');


