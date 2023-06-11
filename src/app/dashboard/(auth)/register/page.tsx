'use client';
import Link from 'next/link';
import styles from './Register.module.css';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

const Register = () => {
  const [error, seterror] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push('/dashboard/login?success=Account has created');
    } catch (error) {
      seterror(true);
    }
  };

  return (
    <div className={styles.container}>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id=""
          placeholder="username"
          className={styles.input}
          required
        />
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
          Register
        </button>
      </form>
      {error && 'Something went wrong'}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  );
};

export default Register;
