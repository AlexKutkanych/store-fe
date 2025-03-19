import  { FC } from 'react';
// @ts-expect-error assets
import ShoppingBag from '/public/icons/ShoppingBag';
import styles from './insex.module.scss';

interface AddToCartButtonProps {
  quantity?: number;
  isDisabled?: boolean;
  onClick?: () => void;
  id?: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
  quantity = 0,
  isDisabled,
  id = '',
  onClick,
}) => (
  <button className={styles.button} disabled={isDisabled} onClick={onClick} data-testid={`${id}-add-to-cart`}>
    <ShoppingBag className={styles.shoppingBagIcon} />
    {quantity > 0 ? <div className={styles.quantity}>{quantity}</div> : null}
  </button>
);

export default AddToCartButton;
