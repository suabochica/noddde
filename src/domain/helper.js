const { complement, compose, isNil, pickBy } = require('rambda');

const notNull = compose(complement(isNil));

const cleanData = (entity) => pickBy(notNull, entity);

module.exports = {
    cleanData
}