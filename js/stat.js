'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 240;
var TIMES_TOP = 60;
var PILE_BAR = 150;
var PILE_TOP = 70;
var PILE_WIDTH = 40;
var PILE_GAP = 50;
var NAMES_Y = 240;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

var getRandomOpacity = function (min, max) {
  return Math.random() * (max - min) + min;
};

var getRandomBlue = function () {
  var randomOpacity = getRandomOpacity(0.1, 1);
  var randomBlue = 'rgba(0, 0, 255,' + randomOpacity + ')';
  return randomBlue;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов:', 170, 30);

  var playerStatX = 150;
  var timesY = 60;
  var pileY = 70;
  var pileHeight = 150;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], playerStatX, NAMES_Y);
    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : getRandomBlue();
    pileHeight = times[i] / maxTime * PILE_BAR;
    pileY = PILE_TOP + (PILE_BAR - pileHeight);
    ctx.fillRect(playerStatX, pileY, PILE_WIDTH, pileHeight);

    timesY = TIMES_TOP + (PILE_BAR - pileHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), playerStatX, timesY);

    playerStatX += PILE_WIDTH + PILE_GAP;
  }
};
