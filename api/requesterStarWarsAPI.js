'use strict';

const contentTypeApplicationJson = 'application/json',
    { URL } = require('../config/defaults'),
    inspect = require('util').inspect,
    fetch = require('node-fetch');

module.exports = class httpRequester {

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

    _curlPostOrPutRequest(path, method, header, body) {
        console.log(inspect(`curl --request ${ method } '${ URL }${ path }' --header 'Content-Type: ${ header }' --data-raw '${ JSON.stringify(body) }'`, {
            showHidden: false,
            depth: null
        }));
    }

    async get(path) {

        const METHOD = 'GET';

        console.log(inspect(`curl --request ${ METHOD } '${ URL }${ path }'`, { showHidden: false, depth: null }));

        const requestOptions = { method: METHOD };

        let response = await fetch(URL + path, requestOptions);

        return this._handleResponse(response);

    }

}
