import { FC, useCallback, useState } from 'react';

import ToggleProductInfoParameters from '../ToggleProductInfoParameters';
import { Color, Size } from '../../types/types';
import styles from './index.module.scss';

interface ProductInfoParameters {
  changeParameters: (parameter: string, value: string) => void;
  sizes?: Size[];
  error?: string;
}

const ProductInfoParameters: FC<ProductInfoParameters> = ({
  changeParameters,
  sizes,
  error,
}) => {
  const [activeSize, setActiveSize] = useState<Size>();
  const [activeColor, setActiveColor] = useState<Color>(Color.Black);
  const [open, setOpen] = useState<boolean[]>([false, false]);

  const colors: Color[] = Object.values(Color);
  const defaultSizes: Size[] = Object.values(Size);

  const handleClick = (value: Color | string) => {
    if (value in Color) {
      setActiveColor(value as Color);
      changeParameters('color', value);
    } else if (value in Size) {
      setActiveSize(value as Size);
      changeParameters('size', value);
    }
  };

  const toggle = useCallback((element: number) => {
    setOpen((prev) => {
      const updatedState = [...prev];
      updatedState[element] = !updatedState[element];
      return updatedState;
    });
  }, []);

  const props = {
    open,
    toggle,
    handleClick,
  };

  return (
    <div className={styles.parameters}>
      {error ? <p className={styles.error}>{error}</p> : null}
      {colors?.length ? (
        <ToggleProductInfoParameters
          parameters={colors}
          productInfo='color'
          text={`+${colors.length} ${'colors'}`}
          index={0}
          active={activeColor}
          {...props}
        />
      ) : null}
      {sizes?.length ? (
        <ToggleProductInfoParameters
          parameters={defaultSizes}
          productInfo='size'
          text={`+${sizes && sizes.length} ${'sizes'}`}
          index={1}
          active={activeSize}
          sizes={sizes}
          {...props}
        />
      ) : null}
    </div>
  );
};

export default ProductInfoParameters;
