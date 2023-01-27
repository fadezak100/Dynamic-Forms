const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const environment = require('../config/environment')

const checkPassword = (password, encryptedPassword) =>
  bcrypt.compare(password, encryptedPassword)

const hashPassword = password => bcrypt.hash(password, 12)

const generateToken = payload =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, environment.jwt.secretKey, (error, token) => {
      if (error) {
        reject(error)
      } else {
        resolve(token)
      }
    })
  })

const verifyToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, environment.jwt.secretKey, (error, decoded) => {
      if (error) {
        reject(error)
      } else {
        resolve(decoded)
      }
    })
  })

module.exports = {
  checkPassword,
  hashPassword,
  generateToken,
  verifyToken,
}
