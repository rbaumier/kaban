'use strict';

module.exports = (models) => {
  return function $get(request, reply) {
    models.project.findAll()
      .then(projects => reply(projects));
  }
};
