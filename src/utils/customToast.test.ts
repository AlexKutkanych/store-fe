import { describe, it, expect, vi } from 'vitest';
import { toast } from 'react-toastify';
import { invokeCustomToast } from './customToast';

vi.mock('react-toastify', () => ({
  toast: vi.fn(),
  Slide: vi.fn(),
}));

describe('invokeCustomToast', () => {
  it('calls toast with the correct parameters', () => {
    const message = 'Test message';

    invokeCustomToast(message);

    expect(toast).toHaveBeenCalledWith(message, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
      transition: expect.any(Function),
    });
  });
});