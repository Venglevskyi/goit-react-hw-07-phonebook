import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  formFilter
} from "./contactsActions";

const onAddContact = (state, action) => {
  return [...state, action.payload];
};

const onRemoveContact = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const items = createReducer([], {
  [getContactSuccess]: (state, action) => action.payload,
  [addContactSuccess]: onAddContact,
  [removeContactSuccess]: onRemoveContact
});

const filter = createReducer("", {
  [formFilter]: (state, action) => action.payload
});

const loader = createReducer(false, {
  [getContactRequest]: () => true,
  [getContactSuccess]: () => false,
  [getContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => false
});

export default combineReducers({ items, filter, loader });
