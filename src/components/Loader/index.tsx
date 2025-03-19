import { JSX } from 'react';
import styles from './index.module.scss';

const LoaderItem = (): JSX.Element => (
  <span className={styles.loaderItemWrapper} data-testid="loader-item">
    <span className={styles.loader} />
    <span className={styles.loaderColor} />
  </span>
);

const Loader = (): JSX.Element => (
  <div className={styles.loaderContainer}>
    <div className={styles.loaderWrapper}>
      <LoaderItem />
      <LoaderItem />
      <LoaderItem />
    </div>
  </div>
);

export default Loader;
