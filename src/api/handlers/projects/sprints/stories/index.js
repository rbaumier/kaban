'use strict';

module.exports = (models) => ({
  $post(request, reply) {
    request.payload.sprintId = request.params.sprint_id;
    models.story
      .create(request.payload)
      .then(sprint => sprint ? reply(sprint) : reply(Boom.notFound()))
      .catch(err => {
        reply(Boom.wrap(err))
      });
  },

  $get(request, reply) {
    models.story.findAll({
      where: {
        sprintId: request.params.sprint_id
      }
    })
    .then(sprints => reply(sprints));
  },

  '{story_id}': {
    $get(request, reply) {
        models.story.findById(request.params.story_id)
          .then(story => reply(story));
    },

    $put(request, reply){
      models.story.findById(request.params.story_id)
      .then(story => story.updateAttributes(request.payload)
        .then(story => reply(story))
      ).catch(err => {
        reply(Boom.wrap(err))
      });
    },

    effort_technique: {
      $post(request, reply) {
        models.story
          .findById(request.params.story_id)
          .then(story => {
            story.updateAttributes(request.payload.effort_technique)
              .then(story => reply(story));
          }).catch(err => reply(Boom.wrap(err)));
      }
    },

    valeur_metier: {
      $post(request, reply) {
        models.story
          .findById(request.params.story_id)
          .then(story => {
            story.updateAttributes(request.payload.valeur_metier)
              .then(story => reply(story));
          }).catch(err => reply(Boom.wrap(err)));
      }
    },

    tasks: require('./tasks')(models)
  }
});
