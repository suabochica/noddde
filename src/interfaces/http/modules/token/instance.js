const container = require('src/container')
const { post } = require('src/app/token')

module.exports = () => {
  const {
    repository: {
      userRepository
    },
    jwt
  } = container.cradle

  const postUseCase = post({
    userRepository,
    webToken: jwt
  })
}
