import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Mail"
          />
        </label>

        <label className={styles.label}>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
          />
        </label>

        <button type="submit" className={styles.button}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
