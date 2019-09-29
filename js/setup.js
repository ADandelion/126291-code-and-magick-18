'use strict';

var WIZARD_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_LASTNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYECOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var WIZARDS_NUMBER = 4;
var wizards = [];

var userDialog = document.querySelector('.setup');


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
var addWizardsList = function (wizardsList) {
  var fragment = document.createDocumentFragment();
  for (var y = 0; y < WIZARDS_NUMBER; y++) {
    fragment.appendChild(renderWizards(wizards[y]));
  }

  return wizardsList.appendChild(fragment);
};

addWizardsList(similarListWizards);
userDialog.querySelector('.setup-similar').classList.remove('hidden');


//ОБРАБОТКА СОБЫТИЙ
var KEYCODES = {
  'ESC': 27,
  'ENTER': 13
};

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose= setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var wizardFireBall = document.querySelector('.setup-fireball-wrap');
var blockInput = document.querySelector('input[name = "username"]');


var pressEscClosePopUpHandler = function (evt) {
  if (evt.keyCode === KEYCODES.ESC) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', pressEscClosePopUpHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
};


blockInput.addEventListener('focus', function (){
});

// Открываем или закрываем окно настройки мага по КЛИКУ на аватарку
setupOpen.addEventListener('click', function () {
  if (setup.classList.contains('hidden')) {
    openPopup();
  } else {
    closePopup();
  }
});

//Открываем окно настройки мага клавишей ENTER, если фокус находится на аватарке
 setupOpen.addEventListener('keydown', function (evt){
   if (evt.keyCode === KEYCODES.ENTER) {
    openPopup();
   }
 });

//Закрываем окно настройки мага по клику на иконку "Крестик"
setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

//Закрываем окно настройки мага клавишей ENTER, если фокус находится на иконке "Крестик"
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODES.ENTER) {
    closePopup();
  }
});

//Закрываем окно настройки мага клавишей ESC
setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODES.ESC) {
    closePopup();
  }
});

//По клику менять цвет мантии
wizardCoat.addEventListener('click', function () {
  var colorCoat = getRandomProperties(WIZARD_COATCOLOR);
  document.querySelector('.wizard-coat').style.fill = colorCoat;
  document.querySelector('input[name = "coat-color"]').value = colorCoat;
});

//По клику менять цвет глаз
wizardEyes.addEventListener('click', function () {
  var colorEyes = getRandomProperties(WIZARD_EYECOLOR);
  document.querySelector('.wizard-eyes').style.fill = colorEyes;
  document.querySelector('input[name = "eyes-color"]').value = colorEyes;
});

//По клику менять цвет Фаербола
wizardFireBall.addEventListener('click', function () {
  var colorFireBall = getRandomProperties(WIZARD_FIREBALL);
  wizardFireBall.style.background = colorFireBall;
  document.querySelector('input[name = "fireball-color"]').value = colorFireBall;
});
