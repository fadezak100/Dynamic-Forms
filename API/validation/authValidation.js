const yup = require('yup')

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

const authenticateIndividualSchema = yup.object().shape({
  email: yup.string().email().required().max(50),
  password: yup.string().required().matches(PASSWORD_REGEX)
})

const authenticateAdminSchema = yup.object().shape({
  email: yup.string().email().required().max(50),
  password: yup.string().required().min(8)
})

const createIndividualSchema = yup.object().shape({
  email: yup.string().email().required().max(50),
  password: yup.string().required().matches(PASSWORD_REGEX),
  firstName: yup.string().min(2).max(40).required(),
  lastName: yup.string().min(2).max(40).required(),
  phoneNumber: yup.string().max(20).required(),
  birthDay: yup
    .date()
    .max(
      new Date(Date.now() - 567648000000),
      'Only 18+ are allowed on the platform'
    ),
  address: yup.string().max(500).required()
})

const createBusinessSchema = yup.object().shape({
  email: yup.string().email().required().max(50),
  password: yup.string().required().matches(PASSWORD_REGEX),
  name: yup.string().min(2).max(200).required(),
  phoneNumber: yup.string().max(20).required(),
  address: yup.string().max(500).required()
})

module.exports = {
  createIndividualSchema,
  authenticateAdminSchema,
  createBusinessSchema,
  authenticateIndividualSchema
}
