'use strict';

module.exports = (models) => {
  return function $post(request, reply) {
    request.payload.sprintId = request.params.sprint_id;
    models.story
      .create(request.payload)
      .then(sprint => sprint ? reply(sprint) : reply(Boom.notFound()))
      .catch(err => {
        reply(Boom.wrap(err))
      });
  }
};
