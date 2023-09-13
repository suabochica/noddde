const container = require('src/container');
const { get } = require('src/app/user');

module.exports = () => {
  const {
    repository: {
      userRepository
    }
  } = container.cradle;

  const getUseCase = get({ userRepository });

  return {
    getUseCase
  }
}
