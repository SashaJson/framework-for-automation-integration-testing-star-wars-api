"use strict";

const util = require("util");

module.exports = {

    transformResponseToJson: async response => {

        const responseJson = await response.json();

        console.log(util.inspect(responseJson, {
            showHidden: true,
            depth: null,
            compact: false,
            maxArrayLength: null
        }));

        return await responseJson
    }

}