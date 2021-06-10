'use strict';

const { URL } = require('../config/defaults');
const inspect = require('util').inspect;
const fetch = require('node-fetch');

module.exports = class HttpRequester {

    async _handleResponse(response) {

        console.log('Date when make request: ' + Date());

        for (let [key, value] of response.headers) {
            console.log(`Headers: ${ key } = ${ value }`);
        }

        console.log(`HTTP-cod response: ${ response.status }`);

        if (!response.ok) {
            console.error(`Server return HTTP-cod: ${ response.status }`);
            return response.text();
        } else {
            return response.json();
        }

    }

    async get(path) {

        const METHOD = 'GET';

        console.log(inspect(`curl --request ${ METHOD } '${ URL }${ path }'`, { showHidden: false, depth: null }));

        const requestOptions = { method: METHOD };

        let response = await fetch(URL + path, requestOptions);

        return this._handleResponse(response);

    }

}
