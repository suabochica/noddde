const { createContainer, asFunction } = require('awilix');

const app = require('./app');

const container = createContainer()

// System
// ------

container
    .register({
        app: asFunction(app).singleton()
    });

module.exports = container;