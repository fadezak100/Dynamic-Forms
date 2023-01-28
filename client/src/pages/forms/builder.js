import { ToastContainer, toast } from 'react-toastify';

import * as yup from 'yup';
import validationSchema from '../../validation/schemas';

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import IndividualFormFields from '../../data/individualFields';
import BusinessFormFields from '../../data/businessFields';
import ValidationError from '../../components/validationError';
import { useForm } from '../../hooks/useForm';
import './styles.css';

const FormBuilder = () => {
  const query = useLocation();
  const type = query.search.split('=')[1];

  let builder;
  let formFields = {};

  if (type === 'business') {
    builder = BusinessFormFields;
  } else {
    builder = IndividualFormFields;
  }

  builder.forEach((el) => {
    formFields[el.name] = el.attributes?.value ?? '';
  });

  const { setValue, validator, submit, setType } = useForm(formFields);

  const handleChanges = (event, el) => {
    setValue(event, el.name);
  };

  useEffect(() => {
    if (type !== '') {
      type === 'business' ? setType('business') : setType('individual');
    }
  }, []);

  return (
    <div className="wrapper">
      <form className="form" onSubmit={submit}>
        {builder.map((el) => {
          return (
            <div className="field" key={`form-${el.name}`}>
              <label htmlFor={el.name}>{el.name}</label>
              <div className="input">
                <div>
                  {React.createElement(el.component, {
                    ...el.attributes,
                    onChange: (e) => handleChanges(e, el),
                  })}
                </div>
                <div className="validator">
                  {validator.find((validate) => validate.name === el.name)
                    ?.message && (
                    <ValidationError
                      message={
                        validator.find((validate) => validate.name === el.name)
                          ?.message
                      }
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <input className="submit" type="submit" name="submit" />
      </form>
      <ToastContainer />
    </div>
  );
};
export default FormBuilder;
