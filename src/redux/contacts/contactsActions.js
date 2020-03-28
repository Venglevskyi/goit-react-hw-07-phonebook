import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contact/addRequest");
const addContactSuccess = createAction("contact/addSuccess");
const addContactError = createAction("contact/addError");

const getContactRequest = createAction("contact/getRequest");
const getContactSuccess = createAction("contact/getSuccess");
const getContactError = createAction("contact/getError");

const removeContactRequest = createAction("contact/removeRequest");
const removeContactSuccess = createAction("contact/removeSuccess");
const removeContactError = createAction("contact/removeError");

const formFilter = createAction("contact/formFilter");

export {
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
};
