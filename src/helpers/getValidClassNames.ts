import { type ClassValue, clsx } from 'clsx';

export const getValidClassNames = (...classNames: ClassValue[]): string => {
  return clsx(...classNames);
};
