const environment = require('../../config/environment')
const { Pool } = require('pg')

const {
  database: { production, test, development }
} = environment
const { nodeEnv } = environment

let connectionString = ''
let ssl = false

switch (nodeEnv) {
  case 'production':
    connectionString = production
    ssl = {
      rejectUnauthorized: false
    }
    break
  case 'development':
    connectionString = development
    break
  case 'test':
    connectionString = test
    break
  default:
    throw new Error('not a valid database url')
}

const connection = new Pool({
  connectionString,
  ssl
})

module.exports = connection
