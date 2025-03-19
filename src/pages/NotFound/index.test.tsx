import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import NotFound from './index';

vi.mock('../../components/MainLayout', () => ({
  default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

describe('NotFound', () => {
  it('renders the MainLayout component', () => {
    render(<NotFound />);
    expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
  });

  it('renders the 404 image', () => {
    render(<NotFound />);
    const image = screen.getByAltText('Logo');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/not-found.jpg');
  });

  it('renders the 404 message', () => {
    render(<NotFound />);
    expect(screen.getByText(/404 Page Not Found/i)).toBeInTheDocument();
    expect(
      screen.getByText(/The page you are looking for does not exist./i)
    ).toBeInTheDocument();
  });
});
