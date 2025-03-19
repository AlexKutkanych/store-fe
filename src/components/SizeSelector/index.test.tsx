import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import SizeSelector, { SizeSelectorProps } from './index';
import { Size } from '../../types/types';

describe('SizeSelector', () => {
  const mockHandleClick = vi.fn();

  const defaultProps: SizeSelectorProps = {
    parameters: [Size.S, Size.M, Size.L],
    active: Size.M,
    handleClick: mockHandleClick,
    isProductDetails: false,
    isFilter: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the size selector component', () => {
    render(<SizeSelector {...defaultProps} />);
    expect(screen.getByTestId('size-selector')).toBeInTheDocument();
  });

  it('renders the correct number of size buttons', () => {
    render(<SizeSelector {...defaultProps} />);
    expect(screen.getAllByRole('button')).toHaveLength(
      defaultProps?.parameters?.length ?? 0
    );
  });

  it('applies the active class to the active size button', () => {
    render(<SizeSelector {...defaultProps} />);
    const activeButtonClasses =
      screen.getByTestId('size-selector-M')?.className;
    expect(activeButtonClasses.includes('active')).toBeTruthy();
  });

  it('calls handleClick with the correct size when a button is clicked', () => {
    render(<SizeSelector {...defaultProps} />);
    const button = screen.getByTestId('size-selector-S');
    fireEvent.click(button);
    expect(mockHandleClick).toHaveBeenCalledWith(Size.S);
  });

  it('applies the correct styles for product details view', () => {
    const propsForProductDetails = {
      ...defaultProps,
      isProductDetails: true,
    };
    render(<SizeSelector {...propsForProductDetails} />);
    const activeButton = screen.getByTestId('size-selector-M');
    expect(activeButton).toHaveTextContent(String(Size.M));
  });

  it('applies the correct styles for filter view', () => {
    const propsForFilter = {
      ...defaultProps,
      isFilter: true,
    };
    render(<SizeSelector {...propsForFilter} />);
    const activeButtonClasses =
      screen.getByTestId('size-selector-M')?.className;
    expect(activeButtonClasses.includes('parameterBtnFilter')).toBeTruthy();
  });
});
