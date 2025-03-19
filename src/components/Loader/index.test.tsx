import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Loader from './index';

describe('Loader', () => {
  it('renders the loader component', () => {
    render(<Loader />);
    expect(screen.getAllByTestId('loader-item')).toHaveLength(3);
  });
});