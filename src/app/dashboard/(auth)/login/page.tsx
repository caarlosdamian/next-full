'use client';
import { signIn } from 'next-auth/react';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  );
};

export default Login;
