var sequelize = require('sequelize');

var connection = new sequelize('uq86nc6h0f358etqfgg0', 'lj1NKtW5GdL3un97wWdH', 'kaban', {
  host: 'bkouxpkcja27aom-postgresql.services.clever-cloud.com',
  dialect: 'postgres',
  port: 5432
});

var models = {};

var modelsName = ['project', 'sprint'];

modelsName.map(function(modelName) {
  var model = require('./' + modelName + 'Model');
  models[modelName] = connection.define(modelName, model);
});

connection.sync();
module.exports = models;