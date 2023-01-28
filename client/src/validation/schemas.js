import * as yup from 'yup';

const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const authenticateIndividualSchema = yup.object().shape({
  email: yup.string().email().required().max(50),
  password: yup.string().required().matches(PASSWORD_REGEX),
});

const authenticateAdminSchema = yup.object().shape({
  email: yup.string().email().required().max(50),
  password: yup.string().required().min(8),
});

const createIndividualSchema = yup.object().shape({
  Email: yup.string().email().required().max(50),
  Password: yup.string().required().matches(PASSWORD_REGEX),
  'Confirm Password': yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  'First Name': yup.string().min(2).max(40).required(),
  'Last Name': yup.string().min(2).max(40).required(),
  'Phone Number': yup.string().max(20).required(),
  'Date of Birth': yup
    .date()
    .max(
      new Date(Date.now() - 567648000000),
      'Only 18+ are allowed on the platform'
    ),
  Address: yup.string().max(500).required(),
  Gender: yup.string().max(7),
});

const createBusinessSchema = yup.object().shape({
  email: yup.string().email().required().max(50),
  password: yup.string().required().matches(PASSWORD_REGEX),
  name: yup.string().min(2).max(200).required(),
  phoneNumber: yup.string().max(20).required(),
  address: yup.string().max(500).required(),
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  createBusinessSchema,
  createIndividualSchema,
  authenticateAdminSchema,
  authenticateIndividualSchema,
};
