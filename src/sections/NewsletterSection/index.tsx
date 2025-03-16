import React from 'react';
import NewsletterDescription from '@/components/NewsletterDescription';
import Input from '@/components/Input';
import ArrowButton from '/public/icons/ArrowButton';
import Email from '/public/icons/Email';
import styles from './index.module.scss';

export const PERCENTAGE_DISCOUNT = 10;

const NewsletterSection = () => (
  <div className={styles.wrapper}>
    <div className={styles.details}>
      <NewsletterDescription />
      <div className={styles.discountWrapper}>
        <span className={styles.discount}>-{PERCENTAGE_DISCOUNT}</span>
        <span className={styles.percent}>%</span>
      </div>
    </div>
    <form className={styles.inputsWrapper}>
      <div className={styles.wrapperItem}>
        <Input
          type='text'
          placeholder='Enter your email'
          className={styles.inputText}
          Icon={<Email />}
        />
        <button className={styles.buttonWrapper}>
          <ArrowButton />
        </button>
      </div>
      <Input
        type='checkbox'
        text='I accept the Privacy Policy'
        className={styles.checkbox}
      />
    </form>
  </div>
);

export default NewsletterSection;
