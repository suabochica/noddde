const { User } = require('src/domain/user')

module.exports = ({ userRepository }) => {
  const create = ({ body }) => {
    return Promise
      .resolve()
      .then(() => {
        const password = body.password || 'test'
        const entity = Object.assign({}, body, { password })
        const user = User(entity)

        return userRepository.create(user)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }

  return { create };
}
