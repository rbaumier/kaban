'use strict';

module.exports = {
  "title": "sprint",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "startDate": {
      type: "string",
      "format": "date-time"
    },
    "endDate": {
      type: "string",
      "format": "date-time"
    }
  },
  "required": ["name", "startDate", "endDate"]
};
