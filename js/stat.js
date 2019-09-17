'use strict';

var CLOUD_HEIGHT = 270;
var CLOUD_WIDTH = 420;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var HEADER_X = 120;
var HEADER_Y = 40;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_X = 140;
var BAR_Y = 240;
var NAMES_GAP = 90;
var TEXT_Y = 260;

var renderCloud = function (ctx, x, y, color) {

  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', HEADER_X, HEADER_Y);
  ctx.fillText('Список результатов:', HEADER_X, HEADER_Y + GAP * 2);

};

//  Максимальный элемент в массиве TIMES
var getMaxElement = function (arr) {

  var maxElement = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (maxElement < arr[i]) {
        maxElement = arr[i];
      }
    }
  return Math.ceil(maxElement);
};

//  Случайное целое число для цвета гистограммы

var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);

  return rand;
};

window.renderStatistics = function (ctx, players, times) {

  var maxTime = getMaxElement(times);

  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffff');

  for (var i = 0; i < players.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], BAR_X + NAMES_GAP * i, TEXT_Y);
    ctx.fillText(Math.ceil(times[i]), BAR_X + NAMES_GAP * i, ((BAR_Y + (-BAR_HEIGHT * times[i]) / maxTime) - GAP));
    ctx.fillStyle = 'hsl(240,100%, ' + randomInteger(10, 100) + '%)'

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    ctx.fillRect(BAR_X + NAMES_GAP * i, BAR_Y,  BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
  }
};

