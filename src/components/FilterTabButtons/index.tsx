import React, { FC, useCallback } from 'react';
import { filterButtons } from './data';
import { BodySearchProducts } from '@/types/types';
import styles from './index.module.scss';

interface FilterTabButtons {
  activeButton?: string;
  handleClick?: (body: BodySearchProducts) => void;
  setActiveButton?: (value: string) => void;
  handleClickFilter?: (name: string) => void;
}

const FilterTabButtons: FC<FilterTabButtons> = ({
  activeButton,
  handleClick,
  setActiveButton,
  handleClickFilter,
}) => {
  const onClick = useCallback(
    (value: string) => () => {
      handleClick?.(value);
      handleClickFilter?.(value);
      setActiveButton?.(value);
    },
    []
  );

  return (
    <div className={styles.buttonsWrapper}>
      {filterButtons?.map(({ name, value }) => {
        return (
          <button
            key={value}
            value={value}
            className={value === activeButton ? styles.active : styles.button}
            onClick={onClick(value)}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default FilterTabButtons;
