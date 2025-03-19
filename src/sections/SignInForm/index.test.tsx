import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SignInForm from './index';
import { loginUser } from '../../api/auth';

// Mock the loginUser function
vi.mock('../../api/auth', () => ({
  loginUser: vi.fn(),
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

describe('SignInForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the sign-in form', () => {
    renderWithProviders(<SignInForm />);
    expect(screen.getByText(/Enter your account/i)).toBeInTheDocument();
  });

  it('displays error messages for invalid inputs', () => {
    renderWithProviders(<SignInForm />);

    fireEvent.click(screen.getByText(/Sign in/i));

    expect(
      screen.getByText(/Please enter a valid email address./i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Password must be at least 6 characters long./i)
    ).toBeInTheDocument();
  });

  it('calls the mutation function with correct data', async () => {
    const mockCreateUser = loginUser as jest.Mock;

    renderWithProviders(<SignInForm />);

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText(/Sign in/i));

    await waitFor(() => {
      expect(mockCreateUser).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });

  it('handles successful sign-in', async () => {
    const mockCreateUser = loginUser as jest.Mock;
    mockCreateUser.mockResolvedValueOnce({
      user: { id: 1, email: 'test@example.com' },
    });

    renderWithProviders(<SignInForm />);

    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText(/Sign in/i));

    await waitFor(() => {
      expect(mockCreateUser).toHaveBeenCalledWith({
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });
});
