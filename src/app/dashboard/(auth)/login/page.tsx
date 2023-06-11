'use client';
import { signIn, useSession } from 'next-auth/react';
import styles from './Login.module.css';
import Link from 'next/link';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [error, seterror] = useState(false);
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials',{email,password})
  };

  if (session.status === 'loading') {
    return <p>Loading....</p>;
  }
  if (session.status === 'authenticated') {
    router?.push('/dashboard/');
  }
  if (session.status === 'unauthenticated') {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          id=""
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="password"
          className={styles.input}
          required
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
      {error && 'Something went wrong'}
      <Link href="/dashboard/login">Login with an existing account</Link>
      <button onClick={() => signIn('google')}>Login with Google</button>
    </div>
  )};
};

export default Login;
