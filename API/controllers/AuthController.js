const AuthService = require('../services/AuthService')
const validator = require('../validation/validator')
const AuthHelper = require('../helpers/AuthHelpers')
const {
  authenticateIndividualSchema,
  createIndividualSchema,
  createBusinessSchema
} = require('../validation/authValidation')

const authenticateIndividual = async request => {
  try {
    const { email, password } = request.body

    const validationResult = await validator({
      schema: authenticateIndividualSchema,
      data: { email, password }
    })

    if (!validationResult.isValid) {
      return { statusCode: 400, body: { error: validationResult.error } }
    }

    const { token, userInfo: savedUser } =
      await AuthService.authenticateIndividual({
        email,
        password
      })

    return {
      statusCode: 200,
      body: {
        message: 'success',
        status: 200,
        data: {
          user: {
            id: savedUser.id,
            firstName: savedUser.first_name,
            lastName: savedUser.last_name,
            email: savedUser.email,
            gender: savedUser.gender,
            phoneNumber: savedUser.phone_number
          },
          token
        }
      }
    }
  } catch (error) {
    if (error.name !== 'GenericError') throw error
    return { statusCode: 400, body: { status: 400, message: error.message } }
  }
}

const authenticateBusiness = async request => {
  try {
    const { email, password } = request.body

    const validationResult = await validator({
      schema: authenticateIndividualSchema,
      data: { email, password }
    })

    if (!validationResult.isValid) {
      return { statusCode: 400, body: { error: validationResult.error } }
    }

    const { token, userInfo: savedUser } =
      await AuthService.authenticateBusiness({
        email,
        password
      })

    return {
      statusCode: 200,
      body: {
        message: 'success',
        status: 200,
        data: {
          user: {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            phoneNumber: savedUser.phone_number
          },
          token
        }
      }
    }
  } catch (error) {
    if (error.name !== 'GenericError') throw error
    return { statusCode: 400, body: { status: 400, message: error.message } }
  }
}
const createIndividualAccount = async request => {
  const {
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    birthDay,
    gender,
    address
  } = request.body

  const validationResult = await validator({
    schema: createIndividualSchema,
    data: {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      birthDay,
      gender,
      address
    }
  })

  if (!validationResult.isValid) {
    return {
      statusCode: 400,
      body: { status: 400, message: validationResult.error }
    }
  }

  try {
    const savedUser = await AuthService.createIndividualAccount({
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      birthDay,
      gender,
      address
    })

    const token = await AuthHelper.generateToken({
      id: savedUser.id
    })

    return {
      statusCode: 201,
      body: {
        status: 201,
        message: 'success',
        data: {
          users: {
            id: savedUser.id,
            firstName: savedUser.first_name,
            lastName: savedUser.last_name,
            email: savedUser.email,
            gender: savedUser.gender,
            phoneNumber: savedUser.phone_number
          },
          token
        }
      }
    }
  } catch (error) {
    if (error.name !== 'GenericError') throw error
    return { statusCode: 400, body: { status: 400, message: error.message } }
  }
}

const createBusinessAccount = async request => {
  const { email, password, name, phoneNumber, address } = request.body

  const validationResult = await validator({
    schema: createBusinessSchema,
    data: {
      email,
      password,
      name,
      phoneNumber,
      address
    }
  })

  if (!validationResult.isValid) {
    return {
      statusCode: 400,
      body: { status: 400, message: validationResult.error }
    }
  }

  try {
    const savedUser = await AuthService.createBusinessAccount({
      email,
      password,
      name,
      phoneNumber,
      address
    })

    const token = await AuthHelper.generateToken({
      id: savedUser.id
    })

    return {
      statusCode: 201,
      body: {
        status: 201,
        message: 'success',
        data: {
          users: {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            phoneNumber: savedUser.phone_number
          },
          token
        }
      }
    }
  } catch (error) {
    if (error.name !== 'GenericError') throw error
    return { statusCode: 400, body: { status: 400, message: error.message } }
  }
}

module.exports = {
  createBusinessAccount,
  createIndividualAccount,
  authenticateIndividual,
  authenticateBusiness
}
