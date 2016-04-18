'use strict';

module.exports = {
  "title": "sprint",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "effort_technique": {
      type: "integer"
    },
    "valeur_metier": {
      type: "integer"
    },
    "zone": {
      "type": "string"
    }
  },
  "required": ["name", "effort_technique", "valeur_metier", "zone"]
};
