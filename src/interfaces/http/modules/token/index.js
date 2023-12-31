const container = require('src/container')

const router = require('./router')
const instance = require('./instance')

module.exports = () => {
  const {
    logger,
    jwt,
    response: {
      Success, Fail
    },
  } = container.cradle

  const app = instance()

  return {
    app,
    router: router({
      logger,
      jwt,
      response: { Success, Fail },
      ...app
    })
  }
}
