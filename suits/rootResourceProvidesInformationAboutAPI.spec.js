"use strict";

const {describe, it} = require('mocha');
const {expect, assert} = require('chai');
const utils = require('../libs/utils');
const val = require('../libs/jsonValidate');
const def = require('../config/defaults');
const request = require('../libs/request');

describe("The Root resource provides information on all available resources within the API", () => {

    it("0. Correct response format JSON and have all declared fields", async () => {

        const response = await request(`${def.URL}`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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

    it("1. Check if value isn't empty", async () => {

        const response = await request(`${def.URL}`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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

        expect(responseJSON.people).not.equal("");
        expect(responseJSON.planets).not.equal("");
        expect(responseJSON.films).not.equal("");
        expect(responseJSON.species).not.equal("");
        expect(responseJSON.vehicles).not.equal("");
        expect(responseJSON.starships).not.equal("");

    });

    it("2. Check if field corresponds to a specific value", async () => {

        const response = await request(`${def.URL}`);

        expect(response.status).to.equal(def["code200"]);
        expect(response.statusText).to.equal(def["statusTextOk"]);
        expect(response.headers.get('content-type')).to.equal(def["contentType"]);

        const responseJSON = await utils.transformResponseToJson(response);

        val.validationJsonSchema(responseJSON, {
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