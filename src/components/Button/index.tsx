import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  to?: string;
}

const baseStyle =
  'font-bold p-1.5 rounded-md cursor-pointer text-base text-center transition';

const variantClass = {
  primary:
    'bg-secondary text-white hover:bg-secondary-hover dark:bg-primary dark:hover:bg-primary-hover',
  secondary:
    'bg-accent text-white hover:bg-accent-hover dark:bg-transparent dark:border dark:border-primary dark:text-primary dark:hover:border-primary-hover dark:hover:text-primary-hover',
  ghost: 'bg-transparent',
};

const Button = ({
  children,
  type = 'button',
  className,
  variant = 'primary',
  to,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(baseStyle, variantClass[variant], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
