'use strict';

// TODO REFACTOR

const Ajv = require('ajv').default,
    ajv = new Ajv();

const inspect = require('util').inspect;

ajv.addMetaSchema(require('ajv/lib/refs/json-schema-draft-06.json'));
ajv.addSchema(require('../json-schemas/definitions.json'));
ajv.addSchema(require('../json-schemas/models-json-schema/root.json'));
ajv.addSchema(require('../json-schemas/models-json-schema/people.json'));

module.exports = class ValidationJsonSchemas {

     validation(jsonSchemaReceivedFromServer, validJsonSchema) {

        const validate = ajv.compile(validJsonSchema);
        const valid = validate(jsonSchemaReceivedFromServer)

        if (!valid) {
            throw new Error('Json Schema validation error. Details: ' +
                JSON.stringify({ validationError: validate.errors }, null, 2) + '\n' +
                'Json Schema with Error from server: ' + inspect(jsonSchemaReceivedFromServer, {
                    showHidden: false,
                    depth: null
                }));
        }

        console.log('Json Schema from server: ' + inspect(jsonSchemaReceivedFromServer, {
            showHidden: false,
            depth: null,
            colors: true
        }));

        return jsonSchemaReceivedFromServer;

    }

}
