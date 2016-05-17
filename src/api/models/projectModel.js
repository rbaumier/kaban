var Sequelize = require('sequelize');

var project = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  DoD: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
}

module.exports = project;
