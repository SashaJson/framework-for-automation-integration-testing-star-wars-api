'use strict';

module.exports = () => {

    return {
        "type": "object",
        "allOf": [
            {
                "$ref": "root.json#"
            },
            {
                "required": [
                    "people",
                    "planets",
                    "films",
                    "species",
                    "vehicles",
                    "starships",
                ]
            }
        ]
    };

}