'use strict';

module.exports = (models) => {
  return function $get(request, reply) {
    models.story.findById(request.params.story_id)
      .then(story => reply(story));
  }
};
