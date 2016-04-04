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
  startDate: {
    type: Sequelize.INTEGER
  },
  endDate: {
    type: Sequelize.INTEGER
  },
  status: {
    type: Sequelize.ENUM('open', 'closed'),
    set(val) {
      this.setDataValue('status', val || 'open');
    }
  },
}

module.exports = sprint;
