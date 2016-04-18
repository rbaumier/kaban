'use strict';

module.exports = (models) => {
  return function $get(request, reply) {
    models.story.findAll({
      where: {
        sprintId: request.params.sprint_id
      }
    })
    .then(sprints => reply(sprints));
  }
};
