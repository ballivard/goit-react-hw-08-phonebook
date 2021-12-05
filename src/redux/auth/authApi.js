import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const registerUserApi = user => {
  const { data } = axios.post('/users/signup', user);
  return data;
};

export const logInApi = user => {
  const { data } = axios.post('/users/logIn', user);
  return data;
};

export const logOutApi = () => {
  return axios.post('/users/logIn');
};

export const currentUserApi = () => {
  const { data } = axios.get('/users/current');
  return data;
};
