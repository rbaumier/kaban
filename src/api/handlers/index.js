'use strict';

module.exports = (models) => ({
  projects: require('./projects')(models)
});
