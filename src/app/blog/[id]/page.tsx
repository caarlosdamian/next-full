import React from 'react';
import styles from './Id.module.css';
import Image from 'next/image';
import { Metadata, ResolvingMetadata } from 'next';
import { Props } from 'next/script';

const getData = async ({ id }: { id: string }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch darta');
  }

  return res.json();
};

export async function generateMetadata( // dinamic metadata 
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const post = await getData({ id: params.id });
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params: { id } }: any) => {
  const data = await getData({ id });
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/2103127/pexels-photo-2103127.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{data.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={data.img}
            alt={data.title}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
