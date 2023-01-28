import { ToastContainer, toast } from 'react-toastify';

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
    console.log(el);
    formFields[el.name] = el.attributes?.value ?? '';
  });

  const { setValue, validator, submit, setType } = useForm(formFields);

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
                    onChange: (event) => setValue(event, el.name),
                  })}
                </div>
                <div className="validator">
                  {validator[el.name] && (
                    <ValidationError message={validator[el.name]} />
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
