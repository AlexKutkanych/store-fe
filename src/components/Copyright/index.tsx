import { JSX } from 'react';

import styles from './index.module.scss';

const Copyright = (): JSX.Element => {
  const year = new Date().getFullYear();

  return (
    <p
      className={styles.copyright}
    >{`Copyright (c) ${year} A&S. All rights reserved`}</p>
  );
};

export default Copyright;
