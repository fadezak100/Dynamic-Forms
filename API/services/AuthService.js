const AuthHelpers = require('../helpers/AuthHelpers')
const GenericError = require('../helpers/GenericError')
const UserRepository = require('../repositories/UserRepository')
const BusinessRepository = require('../repositories/BusinessRepository')

const authenticateIndividual = async ({ email, password }) => {
  const foundUser = await UserRepository.getUserByEmail(email)

  if (!foundUser) {
    throw new GenericError('please double check your password and email')
  }

  const isCorrectPassword = await AuthHelpers.checkPassword(
    password,
    foundUser.password
  )

  if (!isCorrectPassword) {
    throw new GenericError('please double check your password and email')
  }

  const token = await AuthHelpers.generateToken({
    id: foundUser.id
  })
  const userInfo = foundUser

  return { token, userInfo }
}

const authenticateBusiness = async ({ email, password }) => {
  const foundUser = await BusinessRepository.getUserByEmail(email)

  if (!foundUser) {
    throw new GenericError('please double check your password and email')
  }

  const isCorrectPassword = await AuthHelpers.checkPassword(
    password,
    foundUser.password
  )

  if (!isCorrectPassword) {
    throw new GenericError('please double check your password and email')
  }

  const token = await AuthHelpers.generateToken({
    id: foundUser.id
  })
  const userInfo = foundUser

  return { token, userInfo }
}

const createIndividualAccount = async ({
  email,
  password,
  firstName,
  lastName,
  phoneNumber,
  birthDay,
  gender,
  address
}) => {
  const businessUserByEmail = await BusinessRepository.getUserByEmail(email)

  if (businessUserByEmail) {
    throw new GenericError('This email is associated with an account of type Business')
  }
  const userByEmail = await UserRepository.getUserByEmail(email)

  if (userByEmail) {
    throw new GenericError('email already in use')
  }

  const hashedPassword = await AuthHelpers.hashPassword(password)

  return UserRepository.createUser({
    email,
    password: hashedPassword,
    firstName,
    lastName,
    phoneNumber,
    birthDay,
    gender,
    address
  })
}

const createBusinessAccount = async ({
  email,
  password,
  name,
  phoneNumber,
  address
}) => {
  const individualUserByEmail = await UserRepository.getUserByEmail(email)

  if (individualUserByEmail) {
    throw new GenericError(
      'email is associated with an account of type Individual'
    )
  }

  const userByEmail = await BusinessRepository.getUserByEmail(email)

  if (userByEmail) {
    throw new GenericError('email already in use')
  }

  const hashedPassword = await AuthHelpers.hashPassword(password)

  return BusinessRepository.createBusiness({
    email,
    password: hashedPassword,
    name,
    phoneNumber,
    address
  })
}

module.exports = {
  createIndividualAccount,
  createBusinessAccount,
  authenticateBusiness,
  authenticateIndividual
}
