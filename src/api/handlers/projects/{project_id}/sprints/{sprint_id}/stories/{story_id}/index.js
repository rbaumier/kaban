'use strict';

module.exports = (models) => ({
  $get: require('./$get.story')(models),
  effort_technique: require('./effort_technique')(models),
  valeur_metier: require('./valeur_metier')(models)
});
