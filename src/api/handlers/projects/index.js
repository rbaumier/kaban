'use strict';

module.exports = (models) => ({
  $post: require('./$post.projects')(models),
  $get: require('./$get.projects')(models),
  '{project_id}': require('./{project_id}')(models)
});
