import Home from '../pages/home/home';
import FormBuilder from '../pages/forms';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    attributes: {
      path: '/',
    },
    children: [
      {
        component: <Home />,
        attributes: {
          index: 'index',
        },
      },
      {
        component: <FormBuilder />,
        attributes: {
          path: 'registration-form',
        },
      },
    ],
  },
];
