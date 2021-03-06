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

  function takeParams() {
    var params = _.toArray(arguments);
    return [{
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
    }, {
      name: 'story_id',
      'in': 'path',
      description: 'story id',
      required: true,
      type: 'integer'
    }, {
      name: 'task_id',
      'in': 'path',
      description: 'task id',
      required: true,
      type: 'integer'
    }].filter(param => _.includes(params, param.name));
  };

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

      '/projects/{project_id}': {
        get: def({
          summary: 'find a project',
          parameters: takeParams('project_id')
        }),
        put: def({
          summary: 'update a project',
          parameters: takeParams('project_id').concat([{
            'in': 'body',
            name: 'body',
            required: true,
            type: 'integer'
          }, {
            'in': 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/project'
            }
          }])
        })
      },

      '/projects/{project_id}/sprints': {
        post: def({
          summary: 'create a new sprint',
          parameters: takeParams('project_id').concat([{
            'in': 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/sprint'
            }
          }])
        }),
        get: def({
          summary: 'find all sprints',
          parameters: takeParams('project_id')
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}': {
        get: def({
          summary: 'find a sprint',
          parameters: takeParams('project_id', 'sprint_id')
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}/close': {
        post: def({
          summary: 'Close a sprint',
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

      '/projects/{project_id}/sprints/{sprint_id}/stories': {
        post: def({
          summary: 'create a new story',
          parameters: takeParams('project_id', 'sprint_id').concat([{
            'in': 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/story'
            }
          }])
        }),
        get: def({
          summary: 'find all stories of a sprint',
          parameters: takeParams('project_id', 'sprint_id')
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}/stories/{story_id}': {
        get: def({
          summary: 'find a story',
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
          }, {
            name: 'story_id',
            'in': 'path',
            description: 'sprint id',
            required: true,
            type: 'integer'
          }]
        }),
        put: def({
          summary: 'update a story',
          parameters: takeParams('project_id', 'sprint_id', 'story_id').concat({
              'in': 'body',
              name: 'body',
              required: true,
              schema: {
                $ref: '#/definitions/story'
              }
            })
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}/stories/{story_id}/valeur_metier': {
        post: def({
          summary: 'update valeur metier',
          parameters: takeParams('project_id', 'sprint_id', 'story_id')
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}/stories/{story_id}/effort_technique': {
        post: def({
          summary: 'update effort technique',
          parameters: takeParams('project_id', 'sprint_id', 'story_id')
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}/stories/{story_id}/tasks': {
        post: def({
          summary: 'create a new task',
          parameters: takeParams('project_id', 'sprint_id', 'story_id').concat([{
            'in': 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/task'
            }
          }])
        }),

        get: def({
          summary: 'find all tasks of a story',
          parameters: takeParams('project_id', 'sprint_id', 'story_id')
        })
      },

      '/projects/{project_id}/sprints/{sprint_id}/stories/{story_id}/tasks/{task_id}': {
        put: def({
          summary: 'update a task',
          parameters: takeParams('project_id', 'sprint_id', 'story_id', 'task_id').concat([{
            'in': 'body',
            name: 'body',
            required: true,
            schema: {
              $ref: '#/definitions/task'
            }
          }])
        })
      }
    }
  };
};
