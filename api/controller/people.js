'use strict';

const starWarsAPI = require('../requesterStarWarsAPI');
const validateJson = require('../../helpers/validationJsonSchemas');

module.exports = class PeopleController {

    constructor() {
        this._starWarsApi = new starWarsAPI;
    }

    async getAllPeople() {
        const bla = this._starWarsApi.get('https://swapi.dev/api/people/schema');
        console.log(bla)
    }

}
