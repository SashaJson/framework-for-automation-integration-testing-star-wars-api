'use strict';

module.exports = () => {

    return {
        "type": "object",
        "allOf": [
            {
                "$ref": "people.json#"
            },
            {
                "required": [
                    "count",
                    "next",
                    "previous",
                    "results"
                ]
            },
            {
                "properties": {
                    "results": {
                        "type": "array",
                        "items": {
                            "required": [
                                'name',
                                'height',
                                'mass',
                                'hair_color',
                                'skin_color',
                                'eye_color',
                                'birth_year',
                                'gender',
                                'homeworld',
                                'films',
                                'species',
                                'vehicles',
                                'starships',
                                'url',
                                'created',
                                'edited',
                            ]
                        }
                    }
                }
            }
        ]
    };

}