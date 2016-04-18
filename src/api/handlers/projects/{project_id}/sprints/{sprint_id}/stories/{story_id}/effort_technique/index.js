'use strict';

module.exports = (models) => ({
  $post: require('./$post.effort_technique')(models)
});
