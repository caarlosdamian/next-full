'use client';
import { links } from '@/utils';
import Link from 'next/link';
import styles from './navbar.module.css';
import { DarkModeToggle } from '../darkModeToggle/DarkModeToggle';

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/" className={styles.logo}>
        Carmia
      </Link>
      <div className={styles.links}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button 
        className={styles.logout}
        onClick={() => console.log('loggout out ')}>Logout</button>
      </div>
    </nav>
  );
};
