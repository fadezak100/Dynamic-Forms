const { join } = require('path')
const { readFileSync } = require('fs')

const connection = require('./connection')

const build = () => {
  const sql = readFileSync(join(__dirname, 'schema.sql'), {
    encoding: 'utf-8'
  })
  const seeds = readFileSync(join(__dirname, 'seeds.sql'), {
    encoding: 'utf-8'
  })
  return connection.query(sql + seeds)
}

module.exports = build
