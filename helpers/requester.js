'use strict';

const fetch = require('node-fetch');
const inspect = require('util').inspect;

module.exports = async (url, method = 'GET', data = null) => {

    switch (method) {

        case 'GET':
            console.log(inspect(`curl --request ${method} ${url}`, {
                showHidden: false,
                depth: null
            }));
            break;

        case 'POST':
            console.log(inspect(`curl --request ${method} ${url} --header 'Content-Type: application/json' --data-raw '${JSON.stringify(data)}'`, {
                showHidden: false,
                depth: null
            }));
            break;

        case 'PUT':
            console.log(inspect(`curl --request ${method} ${url} --header 'Content-Type: application/json' --data-raw '${JSON.stringify(data)}'`, {
                showHidden: false,
                depth: null
            }));
            break;

        case 'DELETE':
            console.log(inspect(`curl --request ${method} ${url} --data-raw ''`, {
                showHidden: false,
                depth: null
            }));
            break;

        default:
            throw new Error('Http method undefine');
    }

    try {

        let body;
        const headers = {};

        if (data) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
            method,
            headers,
            body
        });

        console.log('Data when make request: ' + Date());

        for (let [key, value] of response.headers) {
            console.log(`Headers: ${key} = ${value}`);
        }

        console.log(`HTTP-cod response: ${response.status}`);

        return await response;

    } catch (error) {
        console.error('Error when make request', error.message);
    }

}