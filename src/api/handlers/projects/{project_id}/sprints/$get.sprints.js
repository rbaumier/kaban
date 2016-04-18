'use strict';

module.exports = (models) => {
  return function $get(request, reply) {
    models.sprint.findAll({
      where: {
        projectId: request.params.project_id
      }
    })
    .then(sprints => reply(sprints));
  }
};
