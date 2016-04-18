'use strict';

module.exports = (models) => ({
  $get: require('./$get.sprint')(models),
  close: require('./close')(models),
  stories: require('./stories')(models)
});
