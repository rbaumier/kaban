'use strict';

module.exports = (models) => ({
  $post: require('./$post.close')(models),
});
