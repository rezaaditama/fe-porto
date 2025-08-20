import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  to?: string;
}

const baseStyle =
  'font-bold p-2 rounded-md cursor-pointer text-base text-center transition';

const variantClass = {
  primary: 'bg-slate-800 text-white hover:bg-slate-950',
  secondary: 'bg-yellow-500 text-white hover:bg-yellow-600',
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
