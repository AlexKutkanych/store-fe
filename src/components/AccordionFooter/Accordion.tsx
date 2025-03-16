import React, { FC } from 'react';
import PlusImg from '/public/icons/Plus';
import MinusImg from '/public/icons/Minus';
import styles from './Accordion.module.scss';

interface AccordionProps {
  title: string;
  listVisible?: boolean[];
  openList?: (listNumber: number) => void;
  listNumber: number;
}

const Accordion: FC<AccordionProps> = ({
  title,
  listVisible,
  openList,
  listNumber,
}) => (
  <button
    className={styles.box}
    onClick={() => (openList ? openList(listNumber) : '')}
  >
    <h3 className={styles.title}>{title}</h3>
    {listVisible?.length && !listVisible[listNumber] ? (
      <PlusImg className={styles.img} />
    ) : (
      <MinusImg className={styles.img} />
    )}
  </button>
);

export default Accordion;
