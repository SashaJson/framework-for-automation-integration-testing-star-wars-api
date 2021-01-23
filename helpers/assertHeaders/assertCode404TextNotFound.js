'use strict';

const {status404} = require('./checkStatusCode');
const {statusTextNotFound} = require('./checkStatusText');

module.exports = (statusCode, statusText) => {

    status404(statusCode);
    statusTextNotFound(statusText);

}