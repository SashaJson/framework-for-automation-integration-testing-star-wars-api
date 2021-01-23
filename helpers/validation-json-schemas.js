'use strict';

const inspect = require('util').inspect;
const Ajv = require('ajv');

const ajv = new Ajv({
    meta: true,
    unknownFormats: 'ignore',
    allErrors: true
});

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
ajv.addSchema(require('../json-schemas/definitions.json'));
ajv.addSchema(require('../json-schemas/models-json-schema/root.json'));
ajv.addSchema(require('../json-schemas/models-json-schema/people.json'));

module.exports = (jsonSchemaReceivedFromServer, validJsonSchema) => {

    const validate = ajv.compile(validJsonSchema);
    const valid = validate(jsonSchemaReceivedFromServer)

    if (!valid) {
        throw new Error('JSON-Schema invalid!' +
            ' Error in validate JSON-Schema: ' + JSON.stringify(validate.errors) +
            ' Must will be: ' +
            inspect(validJsonSchema, {
                showHidden: false,
                depth: null,
                compact: true,
                maxArrayLength: null
            }) +
            ' Received response: ' +
            inspect(jsonSchemaReceivedFromServer, {
                showHidden: false,
                depth: null,
                compact: true,
                maxArrayLength: null
            }));
    }

    inspect(jsonSchemaReceivedFromServer, {showHidden: false, depth: null});

}