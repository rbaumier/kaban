'use strict';

module.exports = {
  "title": "project",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "DoD": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": ["name", "DoD"]
};
