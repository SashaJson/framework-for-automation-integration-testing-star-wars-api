'use strict';

// TODO REFACTOR

const StarWarsAPI = require('../requesterStarWarsAPI');
const ValidationJsonSchemas = require('../../helpers/validationJsonSchemas');

module.exports = class PeopleController {

    constructor() {
        this._starWarsApi = new StarWarsAPI;
        this.ajv = new ValidationJsonSchemas();
    }

    async getAllPeople() {
        // TODO ADD JSON SCHEMA
        this.ajv.validation(await this._starWarsApi.get('/people/schema'), {});
    }

    async getPeople(queryParams) {
        // TODO ADD JSON SCHEMA
        if (!queryParams) {
            return this.ajv.validation(await this._starWarsApi.get('/people'), {});
        } else {
            this.ajv.validation(await this._starWarsApi.get('/people'), {});
        }
    }

}
