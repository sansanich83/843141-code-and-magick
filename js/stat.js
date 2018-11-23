'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud (ctx, 110, 60, 'rgba(0, 0, 0, 0.7)');
  renderCloud (ctx, 100, 50, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!\nСписок результатов:', 110, 75);
};
