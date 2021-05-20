'use strict';

const contentTypeApplicationJson = 'application/json',
    { URL } = require('../config/defaults'),
    inspect = require('util').inspect,
    fetch = require('node-fetch');

function curlPostOrPutRequest(path, method, header, body) {
    console.log(inspect(`curl --request ${ method } '${ URL }${ path }' --header 'Content-Type: ${ header }' --data-raw '${ JSON.stringify(body) }'`, {
        showHidden: false,
        depth: null
    }));
}

async function fetchWrapperGet(path) {

    const METHOD = 'GET';

    console.log(inspect(`curl --request ${ METHOD } '${ URL }${ path }'`, { showHidden: false, depth: null }));

    const requestOptions = { method: METHOD };

    let response = await fetch(URL + path, requestOptions);

    return handleResponse(response);

}

async function fetchWrapperPost(path, body, options, headers, isFile = false) {

    const METHOD = 'POST';

    const defaultOptions = {
        method: METHOD,
        body: JSON.stringify(body)
    };

    const defaultHeaders = {
        'Content-Type': contentTypeApplicationJson
    };

    let requestOptions = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultHeaders,
            ...headers
        }
    };

    if (!isFile) {

        curlPostOrPutRequest(path, METHOD, requestOptions.headers['Content-Type'], body);

        let response = await fetch(URL + path, requestOptions);

        return handleResponse(response);

    } else {

        let response = await fetch(URL + path, requestOptions);

        return handleResponse(response);

    }

}

async function fetchWrapperPut(path, body, options, headers) {

    const METHOD = 'PUT';

    const defaultOptions = {
        method: METHOD,
        body: JSON.stringify(body)
    };

    const defaultHeaders = {
        'Content-Type': contentTypeApplicationJson
    };

    let requestOptions = {
        ...defaultOptions,
        ...options,
        headers: {
            ...defaultHeaders,
            ...headers
        }
    };

    curlPostOrPutRequest(path, METHOD, requestOptions.headers['Content-Type'], body);

    let response = await fetch(URL + path, requestOptions);

    return handleResponse(response);

}

async function fetchWrapperDelete(path) {

    const METHOD = 'DELETE';

    console.log(inspect(`curl --request ${ METHOD } ${ URL }${ path }' --data-raw ''`, { showHidden: false, depth: null }));

    const requestOptions = { method: METHOD };

    let response = await fetch(URL + path, requestOptions);

    return handleResponse(response);

}

function handleResponse(response) {

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

module.exports = { fetchWrapperGet, fetchWrapperPost, fetchWrapperPut, fetchWrapperDelete }
