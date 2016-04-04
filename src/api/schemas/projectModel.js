var Sequelize = require('sequelize');

var project = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: Sequelize.STRING
  }
}

module.exports = project;