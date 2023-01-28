// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    component: 'input',
    name: 'Name',
    attributes: {},
    rules: {
      required: true,
    },
  },
  {
    component: 'input',
    name: 'email',
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
    name: 'Phone Number',
    attributes: {},
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
];
