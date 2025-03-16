import React, { useCallback, useState } from 'react';

import Accordion from '../../modules/core/components/AccordionFooter/Accordion';
import { menuName, listContent } from '../Footer/footerData';
import styles from './index.module.scss';
import { MenuItem, MenuList } from '../../types/types';

const FooterList = ({ className }: { className: string }): JSX.Element => {
  const [listVisible, setListVisible] = useState([false, false, false]);

  const openList = useCallback((count: number) => {
    setListVisible((prev) =>
      prev.map((value, index) => (index === count ? !value : value))
    );
  }, []);

  return (
    <>
      {menuName.map(({ id, listNumber, contentName, label }: MenuList) => (
        <div key={id} className={className}>
          <Accordion
            title={label}
            listVisible={listVisible}
            openList={openList}
            listNumber={listNumber}
          />
          <nav
            className={
              listVisible && listVisible[listNumber]
                ? styles.listOpen
                : styles.list
            }
          >
            {listContent[contentName]?.map(
              ({ id, href, label }: MenuItem) => (
                <a href={href} className={styles.link} key={id}>
                  {label}
                </a>
              )
            )}
          </nav>
        </div>
      ))}
    </>
  );
};

export default FooterList;
