'use strict';

const StarWarsAPI = require('../requesterStarWarsAPI');
const ValidationJsonSchemas = require('../../helpers/validationJsonSchemas');

module.exports = class PeopleController {

    constructor() {
        this._starWarsApi = new StarWarsAPI;
        this.ajv = new ValidationJsonSchemas();
    }

    async getAllPeople() {
        this.ajv.validation(await this._starWarsApi.get('/people/schema'), {});
    }

}
