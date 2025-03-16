import React from 'react';
import { useAppSelector, useClearCartEffect } from '@/hooks';
import { selectTotalQuantity } from '@/redux/slices/shopping-cart';
import User from '/public/icons/User';
import Search from '/public/icons/Search';
import AddToCartButton from '../AddToCartButton';
import styles from './index.module.scss';

const ActionPanel = (): JSX.Element => {
  const quantity = useAppSelector(selectTotalQuantity);

  useClearCartEffect(quantity);

  return (
    <>
      <div className={styles.searchBox}>
        <input
          type='text'
          className={styles.searchInput}
          placeholder='Search'
        />
        <button className={styles.searchButton}>
          <Search className={styles.searchIcon} />
        </button>
      </div>
      <div className={styles.userButtons}>
        <button className={styles.userButton}>
          <User className={styles.userIcon} />
        </button>
        <AddToCartButton quantity={quantity} />
      </div>
    </>
  );
};

export default ActionPanel;
