'use strict';

const inspect = require('util').inspect;

module.exports = {

    transformResponseToJson: async response => {

        const responseJson = await response.json();

        console.log(inspect(responseJson, {
            showHidden: true,
            depth: null,
            compact: false,
            maxArrayLength: null
        }));

        return responseJson;

    }

}