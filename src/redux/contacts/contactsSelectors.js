import { createSelector } from "@reduxjs/toolkit";

const getLoadingContact = state => state.contacts.loader;

const getContacts = state => state.contacts.items;

const getFilterContact = state => state.contacts.filter;

const getErrorServer = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [getContacts, getFilterContact],
  (items, filter) =>
    items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
);

const getContactsById = createSelector(
  [(_, contactId) => contactId, getContacts],
  (contactId, contacts) => contacts.find(contact => contact.id === contactId)
);

export {
  getLoadingContact,
  getContacts,
  getFilterContact,
  getErrorServer,
  getVisibleContacts,
  getContactsById
};
