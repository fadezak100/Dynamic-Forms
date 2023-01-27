const UserQuery = require('../database/query/UsersQuery')

const getUserByEmail = async email => {
  const user = await UserQuery.getUserByEmail(email)
  return user.rows[0]
}

const getUserById = async id => {
  const user = await UserQuery.getUserById(id)
  return user.rows[0]
}

const createUser = async ({
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  birthDay,
  gender,
  address
}) => {
  const user = await UserQuery.createNewUser({
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    birthDay,
    gender,
    address
  })
  return user.rows[0]
}

module.exports = {
  getUserByEmail,
  getUserById,
  createUser
}
