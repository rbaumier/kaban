'use strict';

module.exports = () => ({
  $post: require('./$post.projects')(),
  $get: require('./$get.projects')()
});
