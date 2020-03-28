import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact, getContacts } from "./redux/contacts/contactsOperations";
import { getLoadingContact } from "./redux/contacts/contactsSelectors";

import styles from "./base.module.css";

import Layout from "./Components/Layout/Layout";
import Spiner from "./Components/Loader/Loader";
import Toggler from "./Components/Toggler/Toggler";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ThemeContext from "./context/ThemeContext";

class App extends Component {
  componentDidMount() {
    this.props.onGetContacts();
  }

  render() {
    const { isLoadingContact } = this.props;
    return (
      <ThemeContext>
        <Layout>
          <Toggler />
          <h1 className={styles.title}>Phonebook</h1>
          <ContactForm />
          <h2 className={styles.title}>Contacts</h2>
          {!isLoadingContact && <Filter />}
          {isLoadingContact && <Spiner />}
          {!isLoadingContact && <ContactList />}
        </Layout>
      </ThemeContext>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContact: getLoadingContact(state)
});

const mapDispatchToProps = {
  onGetContacts: getContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
