'use strict';

module.exports = () => ({
  $post: require('./$post.sprints')(),
  '{sprint_id}': require('./{sprint_id}')()
});
