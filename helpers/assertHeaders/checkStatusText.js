'use strict';

const {
    STATUS_TEXT_OK,
    STATUS_TEXT_BAD_REQUEST,
    STATUS_TEXT_FORBIDDEN,
    STATUS_TEXT_NOT_FOUND
} = require('../../config/defaults');

module.exports = {

    statusTextOk: statusText => {

        if (statusText !== STATUS_TEXT_OK) throw new Error('HTTP: ' + statusText);

    },

    statusTextBadRequest: statusText => {

        if (statusText !== STATUS_TEXT_BAD_REQUEST) throw new Error('HTTP: ' + statusText);

    },

    statusTextForbidden: statusText => {

        if (statusText !== STATUS_TEXT_FORBIDDEN) throw new Error('HTTP: ' + statusText);

    },

    statusTextNotFound: statusText => {

        if (statusText !== STATUS_TEXT_NOT_FOUND) throw new Error('HTTP: ' + statusText);

    }

}