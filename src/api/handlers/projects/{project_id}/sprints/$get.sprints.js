'use strict';

module.exports = (models) => {
  return function $get(request, reply) {
    models.sprint.findAll()
      .then(sprints => reply(sprints));
  }
};
