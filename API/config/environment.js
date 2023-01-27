require('dotenv').config()

const { DATABASE_URL, PORT, TEST_URL, NODE_ENV, DEV_URL, SECRET_KEY } =
  process.env

const config = {
  database: {
    production: DATABASE_URL,
    test: TEST_URL,
    development: DEV_URL
  },
  port: PORT || 3000,
  nodeEnv: NODE_ENV || 'development',
  jwt: {
    secretKey: SECRET_KEY
  }
}

module.exports = config
