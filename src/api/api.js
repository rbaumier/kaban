'use strict';

const Hapi = require('hapi');
const Swaggerize = require('swaggerize-hapi');

module.exports = function(packageJson, PORT) {
  const server = new Hapi.Server();
  const models = require('./models');
  const handlers = require('./handlers')(models);
  var Path = require('path');
  var Inert = require('inert');

  server.connection({
    port: PORT
  });

  server.register(Inert, function() {
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: Path.normalize(__dirname + '/../public')
        }
      }
    });

    server.register({
      register: Swaggerize,
      options: {
        api: require('./definition')(packageJson),
        docspath: '/api/definition.json',
        handlers: handlers
      }
    }, function(swaggerizeRegistrationError) {
      assert(_.isUndefined(swaggerizeRegistrationError));
    });
  });

  return server;
};
