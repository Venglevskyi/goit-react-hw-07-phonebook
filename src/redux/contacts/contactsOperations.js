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

const addContact = (name, number) => dispatch => {
  dispatch(addContactRequest());

  const contact = {
    name,
    number
  };
  const option = {
    method: "POST",
    headers: {
      Authorization: "fcee5017-48e3-48f8-92f4-2944800aeec4",
      "Content-Type": "application/json"
    },
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
    headers: {
      Authorization: "cb0a48ae-cb89-4ff5-80dd-fd9aa8ec6052"
    }
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
    headers: {
      Authorization: "cb0a48ae-cb89-4ff5-80dd-fd9aa8ec6052"
    }
  };

  fetch(baseUrl + `/${id}`, option)
    .then(response => response.json())
    .then(() => dispatch(removeContactSuccess(id)))
    .catch(error => dispatch(removeContactError(error)));
};

export { addContact, getContacts, removeContact };