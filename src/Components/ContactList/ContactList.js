import React from "react";
import { connect } from "react-redux";
import { getVisibleContacts } from "../../redux/contacts/contactsSelectors";
import PropTypes from "prop-types";

import ContactListItem from "../ContactListItem/ContactListItem";

const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(({ id }) => (
      <ContactListItem key={id} id={id} />
    ))}
  </ul>
);

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state)
});

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default connect(mapStateToProps)(ContactList);
