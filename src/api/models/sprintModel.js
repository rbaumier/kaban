var Sequelize = require('sequelize');

var sprint = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  startDate : {
    type: Sequelize.INTEGER
  },
  endDate : {
    type: Sequelize.INTEGER
  }
}

module.exports = sprint;
