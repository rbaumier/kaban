'use strict';

module.exports = function (packageJson, logger) {
  var config = require('./config')(logger);
  var createServer = require('./api');

  return function (f) {
    var server = createServer(packageJson, config.api.port);

    server.start(function (err) {
      f(err, server, config);
    });
  };
};
