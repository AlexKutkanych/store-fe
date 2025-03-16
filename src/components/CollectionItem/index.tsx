import React, { FC } from 'react';
import styles from './index.module.scss';

interface CollectionItemProps {
  image: string;
  text: string;
  buttonText: string;
}

const CollectionItem: FC<CollectionItemProps> = ({
  image,
  text,
  buttonText,
}) => (
  <div className={styles.itemsWrapper}>
    <img src={image} alt={text} className={styles.image} />
    <p className={styles.text}>{text}</p>
    <div className={styles.wrapperButton}>
      <button className={styles.button}>{buttonText}</button>
    </div>
  </div>
);

export default CollectionItem;
