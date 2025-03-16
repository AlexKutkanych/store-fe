import React from 'react';
import styles from './index.module.scss';

const NewsletterDescription = () => (
  <div className={styles.wrapper}>
    <p className={styles.mainText}>Subscribe to our newsletter</p>{' '}
    <span className={styles.spanText}>and get a discount</span>
  </div>
);

export default NewsletterDescription;
