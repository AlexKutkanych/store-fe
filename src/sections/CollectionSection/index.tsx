import React from 'react';
import CollectionItem from '@/components/CollectionItem';
import styles from './index.module.scss';
import { collections } from './collectionsData';

const CollectionSection = () => (
  <div className={styles.collectionWrapper}>
    <h2 className={styles.title}>Collections</h2>
    <div className={styles.cardWrapper}>
      {collections.map(({ id, image, text }) => (
        <CollectionItem
          key={id}
          image={image}
          text={text}
          buttonText='View Collection'
        />
      ))}
    </div>
  </div>
);

export default CollectionSection;
