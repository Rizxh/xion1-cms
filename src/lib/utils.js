import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using `clsx` and merges them using `tailwind-merge`.
 *
 * @param {...*} inputs - The class values to combine and merge.
 * @returns {string} The combined and merged class names.
 */
export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};
