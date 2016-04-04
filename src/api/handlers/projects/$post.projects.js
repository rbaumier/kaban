'use strict';

module.exports = (models) => {
  return function $post(request, reply) {
    models.project
      .create(request.payload)
      .then(project => project ? reply(project) : reply(Boom.notFound()))
      .catch(err => {
        reply(Boom.wrap(err))
      });
  }
};
