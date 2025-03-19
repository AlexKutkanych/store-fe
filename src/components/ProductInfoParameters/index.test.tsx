import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductInfoParameters from './index';
import { Color, Size } from '../../types/types';
import ToggleProductInfoParameters from '../ToggleProductInfoParameters';

// Mock the ToggleProductInfoParameters component
vi.mock('../ToggleProductInfoParameters', () => ({
  default: ({
    parameters,
    text,
    index,
    open,
    toggle,
    handleClick,
  }: ToggleProductInfoParameters) => (
    <div>
      <button onClick={() => toggle(index)}>{text}</button>
      {open[index] && (
        <ul>
          {parameters.map((param) => (
            <li key={param} onClick={() => handleClick(param)}>
              {param}
            </li>
          ))}
        </ul>
      )}
    </div>
  ),
}));

describe('ProductInfoParameters', () => {
  const mockChangeParameters = vi.fn();

  const defaultProps = {
    changeParameters: mockChangeParameters,
    sizes: [Size.S, Size.M],
    error: 'Test error message',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the error message when error prop is provided', () => {
    render(<ProductInfoParameters {...defaultProps} />);
    expect(screen.getByTestId('product-parameter-error')).toHaveTextContent(
      'Test error message'
    );
  });

  it('renders the color and size parameters', () => {
    render(<ProductInfoParameters {...defaultProps} />);
    expect(screen.getByText('+2 colors')).toBeInTheDocument();
    expect(screen.getByText('+2 sizes')).toBeInTheDocument();
  });

  it('toggles the color parameters list', () => {
    render(<ProductInfoParameters {...defaultProps} />);
    const colorButton = screen.getByText('+2 colors');
    fireEvent.click(colorButton);
    expect(screen.getByText(Color.Black)).toBeInTheDocument();
    expect(screen.getByText(Color.Beige)).toBeInTheDocument();
  });

  it('toggles the size parameters list', () => {
    render(<ProductInfoParameters {...defaultProps} />);
    const sizeButton = screen.getByText('+2 sizes');
    fireEvent.click(sizeButton);
    expect(screen.getByText(Size.S)).toBeInTheDocument();
    expect(screen.getByText(Size.M)).toBeInTheDocument();
  });

  it('calls changeParameters with the correct color value', () => {
    render(<ProductInfoParameters {...defaultProps} />);
    const colorButton = screen.getByText('+2 colors');
    fireEvent.click(colorButton);
    fireEvent.click(screen.getByText(Color.Black));
    expect(mockChangeParameters).toHaveBeenCalledWith('color', Color.Black);
  });

  it('calls changeParameters with the correct size value', () => {
    render(<ProductInfoParameters {...defaultProps} />);
    const sizeButton = screen.getByText('+2 sizes');
    fireEvent.click(sizeButton);
    fireEvent.click(screen.getByText(Size.S));
    expect(mockChangeParameters).toHaveBeenCalledWith('size', Size.S);
  });
});
