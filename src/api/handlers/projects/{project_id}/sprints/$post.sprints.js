'use strict';

module.exports = (models) => {
  return function $post(request, reply) {
    models.sprint
      .create(request.payload)
      .then(sprint => sprint ? reply(sprint) : reply(Boom.notFound()))
      .catch(err => {
        reply(Boom.wrap(err))
      });
  }
};
