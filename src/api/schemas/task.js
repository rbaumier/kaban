'use strict';

module.exports = {
  "title": "task",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "zone": {
      "enum": ["TODO", "DOING", "DONE"]
    }
  },
  "required": ["name", "zone"]
};
