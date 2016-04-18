'use strict';

module.exports = (models) => ({
  $post: require('./$post.valeur_metier')(models)
});
