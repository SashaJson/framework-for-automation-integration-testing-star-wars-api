'use strict';

const {CONTENT_TYPE_JSON} = require('../../config/defaults');

module.exports = contentType => {

    if (CONTENT_TYPE_JSON !== contentType) {
        throw new Error('Header Content-Type has: ' + contentType);
    }

}