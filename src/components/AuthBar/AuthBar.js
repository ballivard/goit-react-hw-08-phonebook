import { logOut } from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';
import styles from './AuthBar.module.css';
import { authSelectors } from '../../redux/auth/auth-selectors';

export const AuthBar = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome back, {name}</h2>
      <button type="button" onClick={handleClick} className={styles.button}>
        {' '}
        Log out
      </button>
    </div>
  );
};
