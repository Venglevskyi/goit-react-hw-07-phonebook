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
  [getContactSuccess]: (_, action) => action.payload,
  [addContactSuccess]: onAddContact,
  [removeContactSuccess]: onRemoveContact
});

const filter = createReducer("", {
  [formFilter]: (_, action) => action.payload
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

const error = createReducer(false, {
  [getContactRequest]: () => false,
  [getContactSuccess]: () => false,
  [getContactError]: () => true,
  [addContactRequest]: () => false,
  [addContactSuccess]: () => false,
  [addContactError]: () => true,
  [removeContactRequest]: () => false,
  [removeContactSuccess]: () => false,
  [removeContactError]: () => true
});

export default combineReducers({ items, filter, loader, error });
