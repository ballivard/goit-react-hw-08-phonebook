import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>This is your ePhonebook</h1>
      <p className={styles.text}>
        Please{' '}
        <Link to="/register" className={styles.link}>
          Register
        </Link>{' '}
        or{' '}
        <Link to="/login" className={styles.link}>
          Log in
        </Link>{' '}
      </p>
    </div>
  );
};

export default Home;
