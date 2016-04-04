'use strict';

module.exports = (domains, codes) => ({
  sprints: require('./sprints')(domains, codes),
});
