import { useMemo, JSX } from 'react';
import { Link } from 'react-router';
// @ts-expect-error assets
import User from '/public/icons/User';
// @ts-expect-error assets
import Search from '/public/icons/Search';
import AddToCartButton from '../AddToCartButton';
import styles from './index.module.scss';

const ActionPanel = (): JSX.Element => {
  const quantity = useMemo(() => {
    const item = localStorage.getItem('cart');
    if (item) {
      const cart = JSON.parse(item);
      return cart?.products?.length;
    }
    return 0;
  }, [])

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
        <Link className={styles.userButton} to='/sign-up'>
          <User className={styles.userIcon} />
        </Link>
        <AddToCartButton quantity={quantity} />
      </div>
    </>
  );
};

export default ActionPanel;
