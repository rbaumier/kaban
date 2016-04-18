'use strict';

module.exports = {
  "title": "sprint",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "startDate": {
      type: "integer"
    },
    "endDate": {
      type: "integer"
    }
  },
  "required": ["name", "startDate", "endDate"]
};
