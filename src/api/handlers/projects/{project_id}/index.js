'use strict';

module.exports = (models) => ({
  $get: require('./$get.project')(models),
  sprints: require('./sprints')(models),
});
