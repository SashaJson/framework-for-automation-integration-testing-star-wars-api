"use strict";

const {describe, it} = require('mocha'),
    {expect} = require('chai');

const {transformResponseToJson} = require('../helpers/utils');
const {URL} = require('../config/defaults');

const validationJson = require('../helpers/validation-json-schemas');
const request = require('../helpers/requester');

const assertContentTypeJson = require('../helpers/assertHeaders/assertContentTypeJson'),
    assertCode200TextOk = require('../helpers/assertHeaders/assertCode200TextOk');

describe('The Root resource provides information on all available resources within the API', () => {

    it('0. Correct response format JSON and have all declared fields', async () => {

        const response = await request(`${URL}`);

        assertCode200TextOk(response.status, response.statusText);
        assertContentTypeJson(response.headers.get('content-type'));

        const responseJSON = await transformResponseToJson(response);

        validationJson(responseJSON, {
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
        });

    });

    it('1. Check if value isn\'t empty', async () => {

        const response = await request(`${URL}`);

        assertCode200TextOk(response.status, response.statusText);
        assertContentTypeJson(response.headers.get('content-type'));

        const responseJSON = await transformResponseToJson(response);

        validationJson(responseJSON, {
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
        });

        const emptyString = '';

        expect(responseJSON.people).not.equal(emptyString);
        expect(responseJSON.planets).not.equal(emptyString);
        expect(responseJSON.films).not.equal(emptyString);
        expect(responseJSON.species).not.equal(emptyString);
        expect(responseJSON.vehicles).not.equal(emptyString);
        expect(responseJSON.starships).not.equal(emptyString);

    });

    it('2. Check if field corresponds to a specific value', async () => {

        const response = await request(`${URL}`);

        assertCode200TextOk(response.status, response.statusText);
        assertContentTypeJson(response.headers.get('content-type'));

        const responseJSON = await transformResponseToJson(response);

        validationJson(responseJSON, {
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
        });

        expect(responseJSON.people).to.equal('http://swapi.dev/api/people/');
        expect(responseJSON.planets).to.equal('http://swapi.dev/api/planets/');
        expect(responseJSON.films).to.equal('http://swapi.dev/api/films/');
        expect(responseJSON.species).to.equal('http://swapi.dev/api/species/');
        expect(responseJSON.vehicles).to.equal('http://swapi.dev/api/vehicles/');
        expect(responseJSON.starships).to.equal('http://swapi.dev/api/starships/');

    });

}); // describe (The Root resource provides information on all available resources within the API)