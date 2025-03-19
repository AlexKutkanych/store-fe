import { FC, useCallback } from 'react';
import { filterButtons } from './data';
import styles from './index.module.scss';
import { Category, Subcategory } from '../../types/types';

interface FilterTabButtons {
  activeButton?: string;
  handleClick?: (body: Category | Subcategory) => void;
  setActiveButton?: (value: string) => void;
}

const FilterTabButtons: FC<FilterTabButtons> = ({
  activeButton,
  handleClick,
  setActiveButton,
}) => {
  const onClick = useCallback(
    (value: string) => () => {
      handleClick?.(value as Category | Subcategory);
      setActiveButton?.(value);
    },
    []
  );

  return (
    <div className={styles.buttonsWrapper}>
      {filterButtons?.map(({ name, value }) => (
        <button
          key={value}
          value={value}
          className={value === activeButton ? styles.active : styles.button}
          onClick={onClick(value)}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default FilterTabButtons;
