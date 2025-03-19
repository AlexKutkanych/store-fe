import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductCardsList from './index';
import useGetViewportWidth from '../../hooks/useGetViewportWidth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { products } from '../../../mocks/products';

vi.mock('../../hooks/useGetViewportWidth', () => ({
  default: vi.fn(),
}));

vi.mock('../../hooks/useGetViewportWidth', () => ({
  default: vi.fn(),
}));

const mockUseGetViewportWidth = useGetViewportWidth as jest.Mock;
const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe('ProductCardsList', () => {
  const defaultProps = {
    searchProducts: products,
    title: 'Test Products',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the product cards list component', () => {
    mockUseGetViewportWidth.mockReturnValue(false);
    renderWithProviders(<ProductCardsList {...defaultProps} />);
    expect(screen.getByText(/Test Products/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(
      defaultProps.searchProducts.length
    );
  });

  it('renders the product cards in mobile view', () => {
    mockUseGetViewportWidth.mockReturnValue(true);
    renderWithProviders(<ProductCardsList {...defaultProps} />);
    expect(screen.getByText(/Test Products/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(
      defaultProps.searchProducts.length
    );
  });

  it('renders the correct number of product cards', () => {
    mockUseGetViewportWidth.mockReturnValue(false);
    renderWithProviders(<ProductCardsList {...defaultProps} />);
    expect(screen.getAllByRole('link')).toHaveLength(
      defaultProps.searchProducts.length
    );
  });

  it('renders no product cards when searchProducts is empty', () => {
    mockUseGetViewportWidth.mockReturnValue(false);
    renderWithProviders(
      <ProductCardsList searchProducts={[]} title='Empty Products' />
    );
    expect(screen.queryByText(/Empty Products/i)).not.toBeInTheDocument();
  });
});
