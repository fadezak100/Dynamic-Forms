import axios from './axios';

const register = (data) => {
  const body = {
    firstName: data['First Name'],
    lastName: data['Last Name'],
    email: data['Email'],
    password: data['Password'],
    phoneNumber: data['Phone Number'],
    birthDay: data['Date of Birth'],
    address: data['Address'],
    gender: data['Gender'],
  };
  return axios.post('auth/individual/sign-up', body);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { register };
