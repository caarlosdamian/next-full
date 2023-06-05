import Link from 'next/link';
import styles from './Portafolio.module.css';

const Portafolio = () => {
 return (
  <div className={styles.container}>
   <h1 className={styles.selectTitle}>Choose a gallery</h1>
   <div className={styles.items}>
    <Link href='/portafolio/illustrations' className={styles.item}>
     <span className={styles.title}>Illustrations</span>
    </Link>
    <Link href='/portafolio/websites' className={styles.item}>
     <span className={styles.title}>Websites</span>
    </Link>
    <Link href='/portafolio/applications' className={styles.item}>
     <span className={styles.title}>Applications</span>
    </Link>
   </div>
  </div>
 );
};

export default Portafolio;
