import { useState, FC, JSX } from 'react';
import { AxiosError } from 'axios';
import { useMutation } from '@tanstack/react-query';
import { Slide, toast, ToastContainer } from 'react-toastify';
import ProductInfoParameters from '../ProductInfoParameters';
import AddToCartButton from '../AddToCartButton';
import ProductPrice from '../ProductPrice';
import { Size, Color } from '../../types/types';
import { AddToCartBodyProps, AddToCartResponseProps } from '../../api/types';
import { addToCart } from '../../api/cart';
import styles from './index.module.scss';

interface ProductInfo {
  productId: string;
  productName: string;
  price?: number;
  sizes?: Size[];
  quantity: number;
}

const ProductInfo: FC<ProductInfo> = ({
  productId,
  price,
  productName,
  sizes,
  quantity,
}): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState<Color>(Color.Black);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [error, setError] = useState<string | undefined>();

  const handleSuccessAddToCart = (data: AddToCartResponseProps) => {
    toast(data?.message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: Slide,
    });

    localStorage.setItem('cart', JSON.stringify(data?.cart));
  };

  const handleErrorAddToCart = (error: Error) => {
    if ((error as AxiosError).isAxiosError) {
      toast('Error adding to cart', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Slide,
      });
    }
  };

  const addToCartMutation = useMutation<
    AddToCartResponseProps,
    Error,
    AddToCartBodyProps
  >({
    mutationFn: addToCart,
    onSuccess: handleSuccessAddToCart,
    onError: handleErrorAddToCart,
  });

  const existingProductQuantity = 0;

  const changeParameters = (parameter: string, value: string): void => {
    switch (parameter) {
      case 'color':
        setSelectedColor(value as Color);
        setError('');
        break;
      case 'size':
        setSelectedSize(value as Size);
        setError('');
        break;
      default:
        break;
    }
  };

  const addToShoppingCart = (): void => {
    if (!selectedSize) {
      setError('Select size');
      return;
    }
    if (quantity - existingProductQuantity <= 0) {
      setError('No products left');
      return;
    }
    if (!price) {
      return;
    }

    setError('');

    addToCartMutation.mutate({
      productId,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className={styles.info}>
      <div className={styles.nameBox}>
        <span className={styles.productName}>{productName}</span>
        <div className={styles.shoppingCartWrapper}>
          <AddToCartButton id='product-card' onClick={addToShoppingCart} />
        </div>
      </div>
      {price ? <ProductPrice price={price} /> : null}
      <div className={styles.productInfoParametersWrapper}>
        <ProductInfoParameters
          changeParameters={changeParameters}
          error={error}
          sizes={sizes}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductInfo;
