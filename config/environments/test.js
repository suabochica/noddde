module.exports = {
  version: process.env.APP_VERSION,
  port: process.env.PORT || 4000,
  timezone: process.env.TIMEZONE,
  logging: {
    maxSize: 100 * 1024,
    maxFiles: 2,
    colorize: false
  },
  authSecret: process.env.SECRET,
  authSession: {
    session: false
  }
}
