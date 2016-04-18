'use strict';

module.exports = (models) => {
  return function $post(request, reply) {
    request.payload.projectId = request.params.project_id;
    request.payload.status = 'open';
    models.sprint
      .create(request.payload)
      .then(sprint => sprint ? reply(sprint) : reply(Boom.notFound()))
      .catch(err => {
        reply(Boom.wrap(err))
      });
  }
};
