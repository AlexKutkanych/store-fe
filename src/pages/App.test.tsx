import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect } from 'vitest';
import App from './App';
import '@testing-library/jest-dom';

const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient();
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe('App', () => {
  it('renders the HomePage component for the root route', () => {
    renderWithProviders(<App />);
    expect(
      screen.getByText(/Subscribe to our newsletter/i)
    ).toBeInTheDocument();
  });

  it('renders the SignUpPage component for the /sign-up route', () => {
    window.history.pushState({}, 'Sign Up Page', '/sign-up');
    renderWithProviders(<App />);
    expect(screen.getByTestId('sign-up-form')).toBeInTheDocument();
  });

  it('renders the ProductsGridPage component for the /men/products-grid route', () => {
    window.history.pushState({}, 'Products Grid Page', '/men/products-grid');
    renderWithProviders(<App />);
    expect(screen.getByTestId('products-grid')).toBeInTheDocument();
  });
});
