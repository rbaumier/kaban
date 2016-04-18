'use strict';

module.exports = (models) => ({
  close: require('./close')(models),
  stories: require('./stories')(models)
});
