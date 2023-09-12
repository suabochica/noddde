const { toEntity } = require('./transform');

module.exports = ({ model }) => {

    const getAll = (...args) =>
        model
            .findAll(...args)
            .then((entity) => {
                entity.map((data) => {
                    const { dataValues } = data;

                    return toEntity(dataValues)
                })
            })

    return {
        getAll
    }
}
