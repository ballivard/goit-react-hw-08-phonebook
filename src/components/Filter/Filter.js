import PropTypes from 'prop-types';
import shortid from 'shortid';
import styles from './Filter.module.css';

// ======redux=====
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';

export const Filter = () => {
  let inputFilterID = shortid();

  // ======redux======
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const handleChangeFilter = e => {
    // setFilter(e.target.value);
    dispatch(filterContact(e.target.value)); // в редакс
  };

  return (
    <div className={styles.filter}>
      <label className={styles.filter_label}>Find contacts by name</label>
      <input
        className={styles.filter_input}
        id={inputFilterID}
        name={filter}
        type="text"
        value={filter}
        onChange={handleChangeFilter}
      ></input>
    </div>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};
