import React, { FC, useCallback } from 'react';
import { getValidClassNames } from '@/helpers';
import { Color } from '@/types/types';
import styles from './index.module.scss';

interface ColorSelectorProps {
  parameters: Color[];
  active: Color;
  handleClick: (value: Color) => void;
  className?: string;
}

const ColorSelector: FC<ColorSelectorProps> = ({
  parameters,
  active,
  handleClick,
  className,
}): JSX.Element => {
  const getCombinedClass = useCallback(
    (parameter: Color): string =>
      getValidClassNames(styles.parameterColorBtn, {
        [styles.active]: active === parameter,
      }),
    [active]
  );

  const renderColorButton = useCallback(
    (parameter: Color, index: number): JSX.Element => (
      <button
        key={parameter + index}
        className={getCombinedClass(parameter)}
        onClick={() => handleClick(parameter)}
      >
        <span
          className={
            parameter === Color.Black ? styles.blackColor : styles.whiteColor
          }
        ></span>
      </button>
    ),
    [getCombinedClass, handleClick]
  );

  return <div className={className}>{parameters.map(renderColorButton)}</div>;
};

export default ColorSelector;
