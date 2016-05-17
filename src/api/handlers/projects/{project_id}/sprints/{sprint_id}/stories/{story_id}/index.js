'use strict';

module.exports = (models) => ({
  $get: require('./$get.story')(models),
  effort_technique: require('./effort_technique')(models),
  valeur_metier: require('./valeur_metier')(models),
  tasks: {
    $post(request, reply) {
      request.payload.storyId = request.params.story_id;
      models.task
        .create(request.payload)
        .then(task => task ? reply(task) : reply(Boom.notFound()))
        .catch(err => {
          reply(Boom.wrap(err))
        });
    },
    $get(request, reply) {
      models.task.findAll({
        where: {
          storyId: request.params.story_id
        }
      })
      .then(tasks => reply(tasks));
    }
  }
});
