import { createSlice } from '@reduxjs/toolkit';
// import {contactFilter} from '../contacts/reducers'
import {
  getThunkContacts,
  addThunkContact,
  deleteThunkContact,
} from './contacts-operations';
// import { contacts } from './reducers';

const SliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getThunkContacts.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getThunkContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        contacts: [...state.contacts, ...action.payload],
        loading: false,
      };
    },
    [getThunkContacts.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    [addThunkContact.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [addThunkContact.fulfilled]: (state, action) => {
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
        loading: false,
      };
    },
    [addThunkContact.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
    [deleteThunkContact.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [deleteThunkContact.fulfilled]: (state, action) => {
      return {
        ...state,
        contacts: [
          ...state.contacts.filter(contact => contact.id !== action.payload),
        ],
        loading: false,
      };
    },
    [deleteThunkContact.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export default SliceContacts.reducer;
