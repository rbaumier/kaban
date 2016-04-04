'use strict';

describe('config', function () {
  var config;
  var silentLogger = {
    info: _.noop
  };

  beforeEach(function () {
    delete process.env.API_PORT;
    loadConfig();
  });

  it('should yield the default config.port number', function () {
    t.strictEqual(config.api.port, 8080);
  });

  describe('with env variables', function () {
    beforeEach(function () {
      process.env.API_PORT = 8081;
      loadConfig();
    });

    it('should yield the config.port number from the env variable if defined', function () {
      t.strictEqual(config.api.port, 8081);
    });
  });

  // helpers
  function loadConfig() {
    config = require('./config')(silentLogger);
  }
});
