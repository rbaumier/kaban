'use strict';

module.exports = (models) => {
  return function $get(request, reply) {
    models.sprint.findById(request.params.sprint_id)
      .then(sprint => reply(sprint));
  }
};
