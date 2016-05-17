'use strict';

module.exports = (models) => {
  return function $post(request, reply) {
    models.sprint
      .findById(request.params.sprint_id)
      .then(project => {
        project.updateAttributes(request.payload)
          .then(project => reply(project));
      }).catch(err => {
        console.log('err : ', err);
        reply(Boom.wrap(err));
      });
  }
};
