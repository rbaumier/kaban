'use strict';

var Sequelize = require('sequelize');

var story = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  effort_technique: {
    type: Sequelize.INTEGER
  },
  valeur_metier: {
    type: Sequelize.INTEGER
  },
  zone: {
    type: Sequelize.STRING
  }
};

module.exports = story;
