'use strict';

// TODO REFACTOR

const camelcase = require('camelcase'),
    prefix = 'findWhere';

const assertions = {
    Equals: (object, value) => object === value,
    IsNull: (object, value) => object === null,
    IsUndefined: (object, value) => object === undefined,
    IsEmpty: (object, value) => object.length === 0,
    Includes: (object, value) => object.includes(value),
    IsLowerThan: (object, value) => object === value,
    IsGreaterThan: (object, value) => object === value
};

const assertionNames = Object.keys(assertions);

const wrap = arr => {
    return new Proxy(arr, {
        get(target, propKey) {

            if (propKey in target) return target[propKey];

            const assertionName = assertionNames.find(assertion =>
                propKey.endsWith(assertion))

            if (propKey.startsWith(prefix)) {
                const field = camelcase(
                    propKey.substring(prefix.length,
                        propKey.length - assertionName.length)
                );

                const assertion = assertions[assertionName];

                return value => {
                    return target.find(item => assertion(item[field], value));
                };
            }
        }
    })
}
