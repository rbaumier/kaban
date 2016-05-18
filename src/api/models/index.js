'use strict';

var sequelize = require('sequelize');

var connection = new sequelize('blkoosbyy', 'upijy7sr3avpt9lb9s1j', 'rOIAFvzSd6a2OiqXRA8', {
  host: 'blkoosbyy-postgresql.services.clever-cloud.com',
  dialect: 'postgres',
  port: 1250
});

var modelsName = ['project', 'sprint', 'story', 'task'];

const models = modelsName.reduce(function(models, modelName) {
  var model = require('./' + modelName + 'Model');
  models[modelName] = connection.define(modelName, model);
  return models;
}, {});

models.project.hasMany(models.sprint);
models.sprint.hasMany(models.story);
models.story.hasMany(models.task);

connection.sync();

module.exports = models;
