var Sequelize = require('sequelize');

var sprint = {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nom: {
    type: Sequelize.STRING
  },
  date_debut : {
    type: Sequelize.INTEGER
  },
  date_fin : {
    type: Sequelize.INTEGER
  }
}

module.exports = sprint;