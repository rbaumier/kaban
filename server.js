'use strict';

require('./bootstrap');

var logger = require('winston');
var JSONPackage = require('./package.json');

// change default node process name, useful for `ps`
process.title = JSONPackage.title;

require('./src')(JSONPackage, logger)(function (err, server, config) {
  if (err) {
    logger.error('Start error', err);
    throw err;
  }

  logger.info('Server started at %s', config.api.port);
});


