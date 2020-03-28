import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOperations";
import { getContacts } from "../../redux/contacts/contactsSelectors";
import PropTypes from "prop-types";

import styles from "./contactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const findContact = this.props.contacts.find(
      contact => contact.name === name
    );
    if (findContact) {
      alert(`${findContact.name} is already consist`);
      return;
    }
    this.props.onAddContact(name, number);
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.Form} onSubmit={this.handleSubmit}>
        <label className={styles.FormLabel}>
          Name
          <input
            className={styles.FormInput}
            type="name"
            value={name}
            onChange={this.handleChange}
            name="name"
          />
        </label>
        <label className={styles.FormLabel}>
          Number
          <input
            className={styles.FormInput}
            type="name"
            value={number}
            onChange={this.handleChange}
            name="number"
          />
        </label>
        <button className={styles.FormButton} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getContacts(state)
});

const mapDispatchToProps = {
  onAddContact: addContact
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ),
  onAddContact: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
