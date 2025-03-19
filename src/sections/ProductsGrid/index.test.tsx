import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductsGrid from './index';
import { products } from '../../../mocks/products';
import { BrowserRouter } from 'react-router-dom';

const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe('ProductsGrid', () => {
  it('renders the products grid component', () => {
    renderWithProviders(<ProductsGrid products={products} />);
    expect(screen.getByTestId('products-grid')).toBeInTheDocument();
  });

  it('renders the correct number of product cards', () => {
    renderWithProviders(<ProductsGrid products={products} />);
    expect(screen.getAllByRole('link')).toHaveLength(products.length);
  });

  it('renders "No products found" when products array is empty', () => {
    renderWithProviders(<ProductsGrid products={[]} />);
    expect(screen.getByText(/No products found/i)).toBeInTheDocument();
  });

  it('renders product details correctly', () => {
    renderWithProviders(<ProductsGrid products={products} />);
    expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
    expect(screen.getByText(/\$100/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i)).toBeInTheDocument();
    expect(screen.getByText(/\$200/i)).toBeInTheDocument();
  });
});
