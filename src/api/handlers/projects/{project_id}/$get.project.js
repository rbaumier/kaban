'use strict';

module.exports = (models) => {
  return function $get(request, reply) {
    models.project.findById(request.params.project_id)
      .then(project => reply(project));
  }
};
