import { createAsyncThunk } from '@reduxjs/toolkit';
import {} from './authApi';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const toastSettings = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', user);
      token.set(data.token);
      // console.log(data);
      toast.success('Success', toastSettings);
      return data;
    } catch (error) {
      toast.error('Not valid', toastSettings);
      return rejectWithValue(error);
    }
  },
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/logIn', user);
      token.set(data.token);
      toast.success('Success', toastSettings);
      // console.log(data);
      return data;
    } catch (error) {
      // console.log(error.message);
      toast.error('Bad mail or password', toastSettings);
      return rejectWithValue(error);
    }
  },
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      // console.log(error.message);
      return rejectWithValue(error);
    }
  },
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      // console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // console.log(error.message);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
