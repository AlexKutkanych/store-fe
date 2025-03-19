import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ColorSelector from './index';
import { Color } from '../../types/types';

describe('ColorSelector', () => {
  const mockHandleClick = vi.fn();
  const parameters = [Color.Black, Color.Beige];
  const active = Color.Black;

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the color selector component', () => {
    render(
      <ColorSelector
        parameters={parameters}
        active={active}
        handleClick={mockHandleClick}
      />
    );

    expect(screen.getAllByRole('button')).toHaveLength(parameters.length);
  });

  it('applies the active class to the active color button', () => {
    render(
      <ColorSelector
        parameters={parameters}
        active={active}
        handleClick={mockHandleClick}
      />
    );

    const activeButtonClasses = screen.getByTestId('Black').className;
    expect(activeButtonClasses.includes('active')).toBeTruthy();
  });

  it('calls handleClick with the correct color when a button is clicked', () => {
    render(
      <ColorSelector
        parameters={parameters}
        active={active}
        handleClick={mockHandleClick}
      />
    );

    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[1]);

    expect(mockHandleClick).toHaveBeenCalledWith(Color.Beige);
  });
});
