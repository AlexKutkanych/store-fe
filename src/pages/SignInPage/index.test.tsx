import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SignInPage from './index';

vi.mock('../../components/MainLayout', () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

vi.mock('../../sections/SignInForm', () => ({
  default: () => <div>Sign In Form</div>,
}));

describe('SignInPage', () => {
  it('renders the MainLayout component', () => {
    render(<SignInPage />);
    expect(screen.getByText(/Sign In Form/i)).toBeInTheDocument();
  });

  it('renders the SignInForm component', () => {
    render(<SignInPage />);
    expect(screen.getByText(/Sign In Form/i)).toBeInTheDocument();
  });
});
