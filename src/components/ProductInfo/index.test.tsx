import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import ProductInfo from './index';
import { Size, Color } from '../../types/types';
import { useAppContext } from '../../context/AppContext';
import { useMutation } from '@tanstack/react-query';
import { invokeCustomToast } from '../../utils/customToast';
import { AddToCartResponseProps } from '../../api/types';

vi.mock('../../context/AppContext', () => ({
  useAppContext: vi.fn(),
}));

vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn(),
}));

vi.mock('../../utils/customToast', () => ({
  invokeCustomToast: vi.fn(),
}));

describe('ProductInfo', () => {
  const mockUpdateCart = vi.fn();
  const mockMutate = vi.fn();

  const defaultProps = {
    productId: '1',
    productName: 'Test Product',
    price: 100,
    sizes: [Size.S, Size.M],
    quantity: 10,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useAppContext as Mock).mockReturnValue({ updateCart: mockUpdateCart });
    (useMutation as Mock).mockReturnValue({ mutate: mockMutate });
  });

  it('renders the product name and price', () => {
    render(<ProductInfo {...defaultProps} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$100.00')).toBeInTheDocument();
  });

  it('shows an error message when no size is selected', () => {
    render(<ProductInfo {...defaultProps} />);
    fireEvent.click(screen.getByTestId('product-card-add-to-cart'));
    expect(screen.getByText('Select size')).toBeInTheDocument();
  });

  it('calls mutate with correct parameters when adding to cart', () => {
    render(<ProductInfo {...defaultProps} />);
    fireEvent.click(screen.getByText('S'));
    fireEvent.click(screen.getByTestId('product-card-add-to-cart'));
    expect(mockMutate).toHaveBeenCalledWith({
      productId: '1',
      color: Color.Black,
      size: Size.S,
      quantity: 1,
    });
  });

  it('calls updateCart and invokeCustomToast on successful add to cart', () => {
    const mockData = { message: 'Added to cart', cart: {} };
    (useMutation as Mock).mockReturnValue({
      mutate: mockMutate,
      onSuccess: ({ message, cart }: AddToCartResponseProps) => {
        invokeCustomToast(message);
        mockUpdateCart(cart);
      },
    });

    render(<ProductInfo {...defaultProps} />);
    fireEvent.click(screen.getByText('S'));
    fireEvent.click(screen.getByTestId('product-card-add-to-cart'));
    mockMutate.mock.instances[0].onSuccess(mockData);

    expect(invokeCustomToast).toHaveBeenCalledWith('Added to cart');
    expect(mockUpdateCart).toHaveBeenCalledWith({});
  });

  it('calls invokeCustomToast on error', () => {
    const mockError = new Error('Error adding to cart');
    (useMutation as Mock).mockReturnValue({
      mutate: mockMutate,
      onError: () => {
        invokeCustomToast('Error adding to cart');
      },
    });

    render(<ProductInfo {...defaultProps} />);
    fireEvent.click(screen.getByText('S'));
    fireEvent.click(screen.getByTestId('product-card-add-to-cart'));
    mockMutate.mock.instances[0].onError(mockError);

    expect(invokeCustomToast).toHaveBeenCalledWith('Error adding to cart');
  });
});
