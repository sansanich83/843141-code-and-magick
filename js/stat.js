'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 240;

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

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов:', 170, 30);

  var PILE_BAR = 150;
  var timesX = 150;
  var timesY = 60;
  var TIMES_TOP = 60;
  var pileX = 150;
  var pileY = 70;
  var PILE_TOP = 70;
  var pileWidth = 40;
  var pileHeight = 150;
  var pileGap = 50;
  var namesX = 150;
  var namesY = 240;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(names[i], namesX, namesY);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var getRandomOpacity = function (min, max) {
        return Math.random() * (max - min) + min;
      };
      var randomOpacity = getRandomOpacity(0.1, 1);
      var randomBlue = 'rgba' + '(0, 0, 255,' + randomOpacity + ')';
      ctx.fillStyle = randomBlue;
    }
    pileHeight = times[i] / maxTime * PILE_BAR;
    pileY = PILE_TOP + (PILE_BAR - pileHeight);
    ctx.fillRect(pileX, pileY, pileWidth, pileHeight);

    timesY = TIMES_TOP + (PILE_BAR - pileHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), timesX, timesY);

    pileX += pileWidth + pileGap;
    namesX += pileWidth + pileGap;
    timesX += pileWidth + pileGap;
  }
};
