'use strict';

const Hapi = require('hapi');
const Swaggerize = require('swaggerize-hapi');

module.exports = function (packageJson, PORT) {
  const server = new Hapi.Server();
  const handlers = require('./handlers')();

  server.connection({
    port: PORT
  });

  server.register({
    register: Swaggerize,
    options: {
      api: require('./definition')(packageJson),
      docspath: '/api/definition.json',
      handlers: handlers
    }
  }, function (swaggerizeRegistrationError) {
    assert(_.isUndefined(swaggerizeRegistrationError));
  });

  return server;
};
