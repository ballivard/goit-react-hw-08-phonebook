import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';
import styles from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import { addThunkContact } from '../../redux/contacts/contacts-operations';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputName = shortid.generate();
  const inputNumber = shortid.generate();

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const options = {
      id: shortid.generate(),
      name: name,
      number: number,
    };
    if (contacts.map(contact => contact.name).includes(options.name)) {
      alert(`${options.name} is already in contacts`);
    } else {
      dispatch(addThunkContact(options));
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className={styles.ContactEditor} onSubmit={handleSubmit}>
        <label className={styles.ContactEditor_label}>
          Name
          <input
            className={styles.ContactEditor_input}
            id={inputName}
            name={name}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            value={name}
            onChange={handleChangeName}
          />
        </label>

        <label className={styles.ContactEditor_label}>
          Number
          <input
            className={styles.ContactEditor_input}
            id={inputNumber}
            name={number}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            value={number}
            onChange={handleChangeNumber}
          />
        </label>

        <button type="submit" className={styles.ContactEditor_button}>
          Add contact
        </button>
      </form>
  );
};

ContactForm.propTypes = {
  searchDuplicate: PropTypes.func,
};

export default ContactForm;
