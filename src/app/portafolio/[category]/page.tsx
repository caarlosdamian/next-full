import { Button } from '@/components';
import styles from './Category.module.css';
import Image from 'next/image';

const Category = ({ params }: any) => {
 return (
  <div className={styles.container}>
   <h1 className={styles.catTitle}>{params.category}</h1>
   <div className={styles.item}>
    <div className={styles.content}>
     <h1 className={styles.title}>Test</h1>
     <p className={styles.desc}>desc</p>
     <Button text='See More' url='#' />
    </div>
    <div className={styles.imgContainer}>
     <Image
     className={styles.img}
      fill={true}
      src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
      alt='title'
     />
    </div>
   </div>
   <div className={styles.item}>
    <div className={styles.content}>
     <h1 className={styles.title}>Test</h1>
     <p className={styles.desc}>desc</p>
     <Button text='See More' url='#' />
    </div>
    <div className={styles.imgContainer}>
     <Image
     className={styles.img}
      fill={true}
      src='https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg'
      alt='title'
     />
    </div>
   </div>
  </div>
 );
};

export default Category;
