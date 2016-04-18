'use strict';

const deepExtend = require('deepmerge');
const schemas = require('./schemas');

module.exports = function(packageJson) {
  /**
   * Define a new route
   * @param  {Object} options
   * @return {Object} extended `options` with default parameters
   */
  function def(options) {
    return deepExtend({
      tags: ['kaban'],
      summary: 'not-defined',
      operationId: 'not-defined',
      produces: ['text/html'],
      parameters: []
    }, options);
  }

  return {
    swagger: '2.0',
    schemes: [
      'http'
    ],

    info: {
      title: packageJson.title,
      description: packageJson.description,
      termsOfService: packageJson.tos,
      contact: packageJson.author,
      license: packageJson.license,
      version: packageJson.version
    },

    // Defines the objects used in the routes
    definitions: schemas,

    paths: {
      '/projects': {
        post: def({
          summary: 'create a new project',
          parameters: [{
            'in': 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/project'
            }
          }]
        }),
        get: def({
          summary: 'view every project'
        })
      },

      '/projects/{project_id}/sprints': {
        post: def({
          summary: 'create a new sprint',
          parameters: [{
            name: 'project_id',
            'in': 'path',
            description: 'project id',
            required: true,
            type: 'integer'
          }, {
            'in': 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/sprint'
            }
          }]
        }),
        get: def({
          summary: 'find all sprints',
          parameters: [{
            name: 'project_id',
            'in': 'path',
            description: 'project id',
            required: true,
            type: 'integer'
          }]
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}/close': {
        post: def({
          summary: 'create a new sprint',
          parameters: [{
            name: 'project_id',
            'in': 'path',
            description: 'project id',
            required: true,
            type: 'integer'
          }, {
            name: 'sprint_id',
            'in': 'path',
            description: 'sprint id',
            required: true,
            type: 'integer'
          }]
        })
      },
    }
  };
};
