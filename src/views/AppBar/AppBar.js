import { AuthBar } from '../../components/AuthBar/AuthBar';
import { Navigation } from '../../components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={styles.container}>
      <Navigation />
      {isLoggedIn && <AuthBar />}
    </div>
  );
};
