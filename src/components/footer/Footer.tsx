import Image from 'next/image';
import styles from './Footer.module.css';

export const Footer = () => {
  console.log('testing,footer');
  return (
    <footer className={styles.container}>
      <div className="">2023 Carmia All rights reserved</div>
      <div className={styles.social}>
        <Image className={styles.icon} src="/1.png" alt="Facebook" width={15} height={15} />
        <Image className={styles.icon} src="/2.png" alt="Instagram" width={15} height={15} />
        <Image className={styles.icon} src="/3.png" alt="Twitter" width={15} height={15} />
        <Image className={styles.icon} src="/4.png" alt="Youtube" width={15} height={15} />
      </div>
    </footer>
  );
};
