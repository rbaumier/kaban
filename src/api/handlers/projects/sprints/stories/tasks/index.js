'use strict';

module.exports = (models) => ({
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
  },

  '{task_id}': {
    $put(request, reply) {
      models.task
        .findById(request.params.task_id)
        .then(task => {
          task.updateAttributes(request.payload.zone)
            .then(task => reply(task));
        }).catch(err => reply(Boom.wrap(err)));
    },
    
    $delete(request, reply) {}
  }
});
