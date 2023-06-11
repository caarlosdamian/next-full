import Image from 'next/image';
import styles from './Contact.module.css';
import { Button } from '@/components';

export const metadata = {
  title: 'Contact',
  description: 'This is contact Page',
};


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="name"
            id=""
            className={styles.input}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            id=""
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="message"
            id=""
            cols="30"
            rows="10"
            className={styles.textArea}
          />
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
