'use strict';

module.exports = (models) => ({
  $post: require('./$post.stories')(models),
  $get: require('./$get.stories')(models),
  '{story_id}': require('./{story_id}')(models)
});
