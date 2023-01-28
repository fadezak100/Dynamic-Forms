// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    component: 'input',
    name: 'First Name',
    attributes: {},
  },
  {
    component: 'input',
    name: 'Last Name',
    attributes: {},
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'Email',
    attributes: {
      type: 'email',
    },
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'Password',
    attributes: {
      type: 'password',
    },
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'Confirm Password',
    attributes: {
      type: 'password',
    },
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'Phone Number',
    attributes: {},
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'Date of Birth',
    attributes: {
      type: 'date',
    },
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'Address',
    attributes: {},
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'Gender',
    attributes: {},
    rules: {
      required: true,
    },
  },
];
