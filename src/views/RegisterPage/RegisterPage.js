import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Register first</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Mail"
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
