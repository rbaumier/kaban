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
        .then(project => {
          return models.sprint.findAll({
            where: {
              projectId: project.id
            }
          })
        })
        .then(sprints => when.map(sprints, sprint => {
          return models.story.findAll({
            where: {
              sprintId: sprint.id
            }
          })
        }))
        .then(stories => when.reduce(stories, (m, story) => {
          m.valeur_metier = story[0].dataValues.valeur_metier;
          m.effort_technique = story[0].dataValues.effort_technique;
          return m;
        }, {
          valeur_metier: 0,
          effort_technique: 0
        }))
        .then(sums => {
          models.project.findById(request.params.project_id)
            .then(project => {
              var finalProject = _.assign(project.dataValues, sums);
              console.log("sums:", sums);
              console.log("finalProject:", finalProject);
              reply(finalProject);
            });
        })
        .catch(err => reply(err));
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
