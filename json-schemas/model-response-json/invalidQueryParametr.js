'use strict';

module.exports = () => {

    return {
        "type": "object",
        "required": [
            "detail"
        ],
        "additionalProperties": false,
        "properties": {
            "detail": {
                "$ref": "definitions.json#/definitions/detail",
            }
        }
    }

}