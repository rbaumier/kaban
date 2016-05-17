'use strict';

var Sequelize = require('sequelize');

var task = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  zone: {
    type: Sequelize.ENUM('TODO', 'DOING', 'DONE')
  }
};

module.exports = task;
