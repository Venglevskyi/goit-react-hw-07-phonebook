import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError
} from "./contactsActions";

const baseUrl = "https://goit-phonebook-api.herokuapp.com/v1/contacts";
const setHeaders = headers => {
  return {
    Authorization: "d83324e1-2e01-4247-ab19-c2671118966d",
    ...headers
  };
};

const addContact = (name, number) => dispatch => {
  dispatch(addContactRequest());

  const contact = {
    name,
    number
  };
  const option = {
    method: "POST",
    headers: setHeaders({ "Content-Type": "application/json" }),
    body: JSON.stringify(contact)
  };

  fetch(baseUrl, option)
    .then(response => response.json())
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const getContacts = () => dispatch => {
  dispatch(getContactRequest());

  const option = {
    method: "GET",
    headers: setHeaders()
  };

  fetch(baseUrl, option)
    .then(response => response.json())
    .then(data => dispatch(getContactSuccess(data)))
    .catch(error => dispatch(getContactError(error)));
};

const removeContact = id => dispatch => {
  dispatch(removeContactRequest());

  const option = {
    method: "DELETE",
    headers: setHeaders()
  };

  fetch(`${baseUrl}/${id}`, option)
    .then(response => response.json())
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};

export { addContact, getContacts, removeContact };
