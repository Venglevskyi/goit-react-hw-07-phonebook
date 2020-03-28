const getLoadingContact = state => state.contacts.loader;

const getContacts = state => state.contacts.items;

const getFilterContact = state => state.contacts.filter;

const getVisibleContacts = state => {
  const filter = getFilterContact(state).toLowerCase();
  const items = getContacts(state);

  return items.filter(item => item.name.toLowerCase().includes(filter));
};

const getContactsById = (state, contactId) => {
    const contacts = getContacts(state);
    return contacts.find(contact => contact.id === contactId)
}

export { getLoadingContact, getContacts, getFilterContact, getVisibleContacts, getContactsById };
