import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/contacts/selectors';
import {
  getThunkContacts,
  deleteThunkContact,
} from '../../redux/contacts/contacts-operations';
import styles from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => dispatch(getThunkContacts()), [dispatch]);

  return (
    <>
    <ul className={styles.ContactList}>
      {filter === ''
        ? contacts.length > 0 &&
          contacts.map(({ name, number, id }) => (
            <li className={styles.ContactList_item} key={id}>
              <p>
                {name} : {number}
              </p>
              <button
                className={styles.ContactList_button}
                type="button"
                onClick={() => dispatch(deleteThunkContact(id))}
              >
                Delete
              </button>
            </li>
          ))
        : contacts.length > 0 &&
          contacts.map(
            ({ name, number, id }) =>
              name.toLowerCase().includes(filter.toLowerCase()) && (
                <li className={styles.ContactList_item} key={id}>
                  <p>
                    {name} : {number}
                  </p>
                  <button
                    className={styles.ContactList_button}
                    type="button"
                    onClick={() => dispatch(deleteThunkContact(id))}
                  >
                    Delete
                  </button>
                </li>
              ),
          )}
      </ul>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.array,
  deleteItem: PropTypes.func,
};