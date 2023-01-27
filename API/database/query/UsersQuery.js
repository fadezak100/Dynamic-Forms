const connection = require('../config/connection')

const getUserById = id =>
  connection.query({
    text: 'select * from individuals where id = $1',
    values: [id]
  })

const getUserByEmail = email =>
  connection.query({
    text: 'select * from individual where email = $1',
    values: [email]
  })

const createNewUser = ({
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  birthDay,
  gender,
  address
}) =>
  connection.query({
    text: 'INSERT INTO INDIVIDUAL(first_name, last_name, email, password, address, gender, bod, phone_number) values ($1,$2, $3, $4, $5, $6, $7, $8) returning *',
    values: [
      firstName,
      lastName,
      email,
      password,
      address,
      gender,
      birthDay,
      phoneNumber
    ]
  })

module.exports = {
  getUserById,
  createNewUser,
  getUserByEmail
}
