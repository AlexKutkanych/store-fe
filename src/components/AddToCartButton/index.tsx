import React, { FC } from 'react';
import ShoppingBag from '/public/icons/ShoppingBag';
import styles from './insex.module.scss';

interface AddToCartButtonProps {
  quantity?: number;
  isDisabled?: boolean;
  onClick?: () => void;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
  quantity = 0,
  isDisabled,
  onClick,
}) => (
  <button className={styles.button} disabled={isDisabled} onClick={onClick}>
    <ShoppingBag className={styles.shoppingBagIcon} />
    {quantity > 0 ? <div className={styles.quantity}>{quantity}</div> : null}
  </button>
);

export default AddToCartButton;
