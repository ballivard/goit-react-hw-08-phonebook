import styles from './ContactsPage.module.css';
import { Filter } from '../../components/Filter/Filter';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
// import ContactListItem from '../../components/ContactListItem/ContactListItem';

const ContactsPage = () => {
  return (
    <div className={styles.contactsPage}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList>
      </ContactList>
    </div>
  );
};

export default ContactsPage;
