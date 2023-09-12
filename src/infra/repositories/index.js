const User = require('./user');

module.exports = ({ database }) => {
  const userModel = database.module.users;

  return {
    userRepository: User({ model: userModel })
  }
}
