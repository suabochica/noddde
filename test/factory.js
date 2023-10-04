const { curry } = require('rambda')

const models = (name) => app
  .resolve('database')
  .models(name)

const repository = curry((repo, model) => {
  return repo(model)
})

module.exports = {
  models,
  repository,
}
