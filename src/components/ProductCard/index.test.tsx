import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import ProductCard, { ProductCardProps } from './index';
import { Size } from '../../types/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('ProductCard', () => {
  const defaultProps: ProductCardProps = {
    productId: '1',
    productName: 'Test Product',
    price: 100,
    sizes: [Size.XS, Size.M, Size.L],
    images: [
      {
        id: '0',
        url: 'https://via.placeholder.com/150',
        alt: 'Test Image',
      },
    ],
    quantity: 10,
  };

  const renderWithProviders = (ui: React.ReactElement) => {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{ui}</BrowserRouter>
      </QueryClientProvider>
    );
  };

  it('renders the product card component', () => {
    renderWithProviders(<ProductCard {...defaultProps} />);
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$100/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Test Product/i)).toBeInTheDocument();
  });

  it('renders the product link correctly', () => {
    renderWithProviders(<ProductCard {...defaultProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/product/1');
  });

  it('renders the product image correctly', () => {
    renderWithProviders(<ProductCard {...defaultProps} />);
    const image = screen.getByAltText(/Test Product/i);
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/150');
  });

  it('renders the product info correctly', () => {
    renderWithProviders(<ProductCard {...defaultProps} />);
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/\$100/i)).toBeInTheDocument();
    expect(screen.getByText(/XS/i)).toBeInTheDocument();
    expect(screen.getByText(/M/i)).toBeInTheDocument();
    expect(screen.getByText(/10/i)).toBeInTheDocument();
  });
});
