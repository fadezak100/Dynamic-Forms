import { toast } from 'react-toastify';

import { useState } from 'react';

import individualAPI from '../api/individual';
import businessAPI from '../api/business';

import validationSchemas from '../validation/schemas';

export const useForm = (args = {}) => {
  const [form, setForm] = useState(args);
  const [type, setType] = useState('');
  const [validator, setValidator] = useState([]);

  const setValue = (event, field = null) => {
    const name = field ?? event?.target.name;
    const value = event?.target.value;
    try {
      setForm({ ...form, [name]: value });
    } catch (e) {}
  };

  const typeOfUser = {
    individual: {
      schema: validationSchemas.createIndividualSchema,
      api: () => {
        individualAPI
          .register(form)
          .then(() => toast.success('Registered'))
          .catch(() => toast.error('Internal server error'));
      },
    },
    business: {
      schema: validationSchemas.createBusinessSchema,
      api: () => {
        businessAPI
          .register(form)
          .then(() => toast.success('Registered'))
          .catch(() => toast.error('Internal server error'));
      },
    },
  };

  const submit = (event) => {
    event.preventDefault();

    typeOfUser[type].schema
      .validate(form, { abortEarly: false })
      .then(typeOfUser[type].api)
      .catch((err) => {
        const errors = err.inner.map((e) => {
          return {
            name: e.path,
            message: e.message,
          };
        });
        setValidator(errors);
      });
  };

  return { setValue, validator, submit, setType };
};
