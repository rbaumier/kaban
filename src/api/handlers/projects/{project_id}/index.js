'use strict';

module.exports = (models) => ({
  sprints: require('./sprints')(models),
});
