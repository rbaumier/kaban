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
      when.all([
        models.project.findById(request.params.project_id),
        models.sprint.findAll(),
        models.story.findAll()
      ]).spread((project, sprints, stories) => {
        var sprintsIds = _.filter(sprints, sprint => sprint.projectId === request.params.project_id).map(sprint => sprint.id);
        var stories = _.filter(stories, story => _.includes(sprintsIds, story.sprintId));
        var sums = _.reduce(stories, function(m, story) {
          if(story.zone === 'product_done' || story.zone === 'product done') {
            m.effort_technique += story.effort_technique;
            m.valeur_metier += story.valeur_metier;
          }
          return m;
        }, {
          effort_technique: 0,
          valeur_metier: 0
        });
        reply(_.assign(project.dataValues, sums))
      });
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
