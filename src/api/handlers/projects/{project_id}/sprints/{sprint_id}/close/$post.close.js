'use strict';

module.exports = (models) => {
  return function $post(request, reply) {
    models.user
      .findById(request.params.sprint_id)
      .then(project => {
        project.updateAttributes(request.payload.status)
          .then(project => reply(project));
      }).catch(err => reply(Boom.wrap(err)));
  }
};
