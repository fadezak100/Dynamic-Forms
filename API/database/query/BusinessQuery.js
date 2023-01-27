const connection = require('../config/connection')

const getBusinessById = id =>
  connection.query({
    text: 'select * from business where id = $1',
    values: [id]
  })

const getBusinessByEmail = email =>
  connection.query({
    text: 'select * from business where email = $1',
    values: [email]
  })

const createNewBusiness = ({ email, password, name, phoneNumber, address }) =>
  connection.query({
    text: 'INSERT INTO BUSINESS(name, email, password, address, phone_number) values ($1,$2, $3, $4, $5) returning *',
    values: [name, email, password, address, phoneNumber]
  })

module.exports = {
  getBusinessById,
  getBusinessByEmail,
  createNewBusiness
}
