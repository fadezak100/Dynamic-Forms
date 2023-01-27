const BusinessQuery = require('../database/query/BusinessQuery')

const getUserById = async id => {
  const user = await BusinessQuery.getBusinessById(id)
  return user.rows[0]
}

const getUserByEmail = async email => {
  const user = await BusinessQuery.getBusinessByEmail(email)
  return user.rows[0]
}

const createBusiness = async ({
  email,
  password,
  name,
  phoneNumber,
  address
}) => {
  const user = await BusinessQuery.createNewBusiness({
    email,
    password,
    name,
    phoneNumber,
    address
  })
  return user.rows[0]
}

module.exports = {
  getUserByEmail,
  getUserById,
  createBusiness
}
