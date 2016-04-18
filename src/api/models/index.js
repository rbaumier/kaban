'use strict';

var sequelize = require('sequelize');

var connection = new sequelize('bkouxpkcja27aom', 'uq86nc6h0f358etqfgg0', 'lj1NKtW5GdL3un97wWdH', {
  host: 'bkouxpkcja27aom-postgresql.services.clever-cloud.com',
  dialect: 'postgres',
  port: 5432
});

var modelsName = ['project', 'sprint', 'story'];

const models = modelsName.reduce(function(models, modelName) {
  var model = require('./' + modelName + 'Model');
  models[modelName] = connection.define(modelName, model);
  return models;
}, {});

models.project.hasMany(models.sprint);
models.sprint.hasMany(models.story);

connection.sync();

module.exports = models;
