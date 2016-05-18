'use strict';

module.exports = (models) => ({
  $post(request, reply) {
    request.payload.projectId = request.params.project_id;
    request.payload.status = 'open';
    models.sprint
      .create(request.payload)
      .then(sprint => sprint ? reply(sprint) : reply(Boom.notFound()))
      .catch(err => {
        reply(Boom.wrap(err))
      });
  },

  $get(request, reply) {
    models.sprint.findAll({
      where: {
        projectId: request.params.project_id
      }
    })
    .then(sprints => reply(sprints));
  },

  '{sprint_id}': {
    $get(request, reply) {
      models.sprint.findById(request.params.sprint_id)
        .then(sprint => reply(sprint));
    },

    close: {
      $post(request, reply) {
        models.sprint
          .findById(request.params.sprint_id)
          .then(project => {
            project.updateAttributes(request.payload)
              .then(project => reply(project));
          }).catch(err => {
            reply(Boom.wrap(err));
          });
      }
    },

    stories: require('./stories')(models)
  }
});
