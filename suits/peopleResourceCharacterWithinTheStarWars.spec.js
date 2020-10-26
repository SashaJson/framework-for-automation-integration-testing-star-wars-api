"use strict";

const {describe, it} = require('mocha');
const {expect, assert} = require('chai');
const utils = require('../libs/utils');
const val = require('../libs/jsonValidate');
const def = require('../config/defaults');
const request = require('../libs/request');

const COUNT = 82;

describe("A People resource is an individual person or character within the Star Wars universe", () => {

    it("0. Get all the people with query parameter 'schema'", async () => {

        const response = await request(`${def.URL}/people/schema`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);
        //need add json-schema
    });

    it("1. Get all the people with default query parameter 'page=1'", async () => {

        const response = await request(`${def.URL}/people`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=2');
        expect(responseJSON.previous).to.equal(null);
    });

    it("2. Get all the people with query parameter 'page=1'", async () => {

        const response = await request(`${def.URL}/people?page=1`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=2');
        expect(responseJSON.previous).to.equal(null);
    });

    it("3. Get all the people with query parameter 'page=2'", async () => {

        const response = await request(`${def.URL}/people?page=2`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=3');
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=1');
    });

    it("4. Get all the people with query parameter 'page=3'", async () => {

        const response = await request(`${def.URL}/people?page=3`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=4');
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=2');
    });

    it("5. Get all the people with query parameter 'page=4'", async () => {

        const response = await request(`${def.URL}/people?page=4`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=5');
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=3');
    });

    it("6. Get all the people with query parameter 'page=5'", async () => {

        const response = await request(`${def.URL}/people?page=5`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=6');
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=4');
    });

    it("7. Get all the people with query parameter 'page=6'", async () => {

        const response = await request(`${def.URL}/people?page=6`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=7');
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=5');
    });

    it("8. Get all the people with query parameter 'page=7'", async () => {

        const response = await request(`${def.URL}/people?page=7`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=8');
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=6');
    });

    it("9. Get all the people with query parameter 'page=8'", async () => {

        const response = await request(`${def.URL}/people?page=8`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal('http://swapi.dev/api/people/?page=9');
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=7');
    });

    it("10. Get all the people with query parameter 'page=9'", async () => {

        const response = await request(`${def.URL}/people?page=9`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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
        });

        expect(responseJSON.count).to.equal(COUNT);
        expect(responseJSON.next).to.equal(null);
        expect(responseJSON.previous).to.equal('http://swapi.dev/api/people/?page=8');
    });

    it("11. GET request with invalid query parameter 'page=10'", async () => {

        const response = await request(`${def.URL}/people?page=10`);

        expect(response.status).to.equal(def["code404"]);
        expect(response.statusText).to.equal(def["statusTextNotFound"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
            "type": "object",
            "required": ["detail"],
            "additionalProperties": false,
            "properties": {
                "detail": {
                    "$ref": "definitions.json#/definitions/detail",
                }
            }
        });

        expect(responseJSON.detail).to.equal('Not found')
    });

}); // describe (A People resource is an individual person or character within the Star Wars universe)