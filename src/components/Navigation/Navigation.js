import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <NavLink exact to="/" className={styles.item}>
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
