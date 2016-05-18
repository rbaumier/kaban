'use strict';

module.exports = (models) => ({
  $post(request, reply) {
    models.project
      .create(request.payload)
      .then(project => project ? reply(project) : reply(Boom.notFound()))
      .catch(err => {
        reply(Boom.wrap(err))
      })
  },

  $get(request, reply) {
    models.project.findAll()
      .then(projects => reply(projects));
  },

  '{project_id}': {
    $get(request, reply) {
      models.project.findById(request.params.project_id)
        .then(project => reply(project));
    },

    $put(request, reply){
    	models.project.findById(request.params.project_id)
    	.then(project => project.updateAttributes(request.payload)
    		.then(project => reply(project))
    	).catch(err => {
    		reply(Boom.wrap(err))
    	});
    },

    sprints: require('./sprints')(models)
  }
});
