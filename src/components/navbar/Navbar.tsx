'use client';
import { links } from '@/utils';
import Link from 'next/link';
import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <nav>
      <Link href="/" className={styles.logo}>
        Carmia
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button onClick={() => console.log('loggout out ')}>Logout</button>
      </div>
    </nav>
  );
};
