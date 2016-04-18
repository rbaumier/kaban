'use strict';

module.exports = (models) => ({
  $post: require('./$post.sprints')(models),
  $get: require('./$get.sprints')(models),
  '{sprint_id}': require('./{sprint_id}')(models)
});
