import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SignUpForm from './index';
import { createUser } from '../../api/auth';

// Mock the createUser function
vi.mock('../../api/auth', () => ({
  createUser: vi.fn(),
}));

// Mock the useAuthErrorHandler hook
vi.mock('../../hooks/useAuthErrorHandler', () => ({
  useAuthErrorHandler: vi.fn(() => ({
    errorMessage: '',
    authErrorHandler: vi.fn(),
  })),
}));

const queryClient = new QueryClient();

const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>{ui}</BrowserRouter>
    </QueryClientProvider>
  );
};

describe('SignUpForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the sign-up form', () => {
    renderWithProviders(<SignUpForm />);
    expect(screen.getByText(/Create your account/i)).toBeInTheDocument();
  });

  it('displays error messages for invalid inputs', () => {
    renderWithProviders(<SignUpForm />);

    fireEvent.click(screen.getByText(/Create account/i));

    expect(
      screen.getByText(/Please enter a valid email address./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Password must be at least 6 characters long./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Please enter a phone number./i)
    ).toBeInTheDocument();
  });

  it('calls the mutation function with correct data', async () => {
    const mockCreateUser = createUser as jest.Mock;

    renderWithProviders(<SignUpForm />);

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText(/Create account/i));

    await waitFor(() => {
      expect(mockCreateUser).toHaveBeenCalledWith({
        phone: '1234567890',
        email: 'test@example.com',
        password: 'password123',
        acceptOffers: false,
      });
    });
  });

  it('handles successful sign-up', async () => {
    const mockCreateUser = createUser as jest.Mock;
    mockCreateUser.mockResolvedValueOnce({
      user: { id: 1, email: 'test@example.com' },
    });

    renderWithProviders(<SignUpForm />);

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), {
      target: { value: '1234567890' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText(/Create account/i));

    await waitFor(() => {
      expect(mockCreateUser).toHaveBeenCalledWith({
        phone: '1234567890',
        email: 'test@example.com',
        password: 'password123',
        acceptOffers: false,
      });
    });
  });
});
