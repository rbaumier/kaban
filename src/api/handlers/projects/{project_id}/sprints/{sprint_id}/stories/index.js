'use strict';

module.exports = (models) => ({
  $post: require('./$post.stories')(models),
  $get: require('./$get.stories')(models)
});
