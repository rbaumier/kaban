'use strict';

module.exports = {
  "title": "story",
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
      "enum": ["backlog", "sprint_planning","product_done"]
    }
  },
  "required": ["name", "effort_technique", "valeur_metier", "zone"]
};
