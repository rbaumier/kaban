'use strict';

module.exports = (models) => ({
  effort_technique: require('./effort_technique')(models),
  valeur_metier: require('./valeur_metier')(models)
});
