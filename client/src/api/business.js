import axios from './axios';

const register = (data) => {
  const body = {
    name: data['Name'],
    email: data['Email'],
    password: data['Password'],
    phoneNumber: data['Phone Number'],
    address: data['Address'],
  };
  return axios.post('auth/business/sign-up', JSON.stringify(body));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register };
