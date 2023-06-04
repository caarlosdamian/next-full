import React from 'react';
import Hero from 'public/hero.png';
import Image from 'next/image';
import { Button } from '@/components';
import styles from './page.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better desing for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring toguether the teams from the
          flobal tech industry.
        </p>
        <Button url="/portafolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
