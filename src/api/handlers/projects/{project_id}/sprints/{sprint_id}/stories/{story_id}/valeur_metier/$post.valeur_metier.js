'use strict';

module.exports = (models) => {
  return function $post(request, reply) {
    models.story
      .findById(request.params.story_id)
      .then(story => {
        story.updateAttributes(request.payload.valeur_metier)
          .then(story => reply(story));
      }).catch(err => reply(Boom.wrap(err)));
  }
};
