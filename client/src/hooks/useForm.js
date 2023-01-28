import { toast } from 'react-toastify';

import { useState } from 'react';

import individualAPI from '../api/individual';
import businessAPI from '../api/business';

export const useForm = (args = {}) => {
  const [form, setForm] = useState(args);
  const [type, setType] = useState('');
  const [validator, setValidator] = useState({});

  const setValue = (event, field = null) => {
    const name = field ?? event?.target.name;
    const value = event?.target.value;
    try {
      setForm({ ...form, [name]: value });
    } catch (e) {}
  };

  const validation = () => {
    const _validator = {};

    for (let el in form) {
      if (form[el] === null || form[el]?.trim() === '') {
        _validator[el] = `${el} is required`;
      }
    }
    setValidator({ ..._validator });
    return Object.keys(validator).length === 0;
  };

  const submit = (event) => {
    event.preventDefault();
    validation();
    if (type === 'individual') {
      individualAPI
        .register(form)
        .then((res) => toast.success('Registered'))
        .catch((error) => toast.error('Internal server error'));
    } else {
      businessAPI
        .register(form)
        .then((res) => toast.success('Registered'))
        .catch((error) => toast.error('Internal server error'));
    }
  };

  return { form, setValue, validator, submit, setType };
};
