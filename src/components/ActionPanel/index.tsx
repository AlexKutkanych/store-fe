import { JSX } from 'react';
import { Link } from 'react-router';
import { useAppContext } from '../../context/AppContext';
import AddToCartButton from '../AddToCartButton';
// @ts-expect-error assets
import User from '/public/icons/User';
// @ts-expect-error assets
import SignIn from '/public/icons/SignIn';
// @ts-expect-error assets
import Search from '/public/icons/Search';
import styles from './index.module.scss';

const ActionPanel = (): JSX.Element => {
  const { auth, cart } = useAppContext();
  console.log(auth);
  const hasToken = auth?.hasToken;
  const quantity = cart?.products?.length;

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
        <Link
          className={styles.userButton}
          to={hasToken ? '/profile' : '/sign-up'}
        >
          {hasToken ? (
            <User className={styles.userIcon} />
          ) : (
            <SignIn className={styles.userIcon} />
          )}
        </Link>
        <AddToCartButton quantity={quantity} />
      </div>
    </>
  );
};

export default ActionPanel;
