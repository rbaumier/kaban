'use strict';

module.exports = (models) => ({
  close: require('./close')(models)
});
