"use strict";

const fetch = require('node-fetch');
const {describe, it} = require('mocha');
const {expect, assert} = require('chai');
const utils = require('../libs/utils');
const val = require('../libs/jsonValidate');
const def = require('../config/defaults');

describe("A People resource is an individual person or character within the Star Wars universe", () => {
    it("0. Get all the people with default query parameter 'page=1'", async () => {
        const response = await fetch(`${def.url}/people`);
        expect(response.status).to.equal(def.code200);
        expect(response.statusText).to.equal(def.statusTextOk);
        expect(response.headers.get('content-type')).to.equal(def.contentType);
        const responseJSON = await utils.transformResponseToJson(response);

    });
})