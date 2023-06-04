import React, { FC } from 'react';
import styles from './Button.module.css';
import Link from 'next/link';

interface ButtonProps {
  url: string;
  text: string;
}
export const Button: FC<ButtonProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
  );
};
