import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import { Link } from 'react-scroll';

type Variant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  to?: string;
}

const Button = ({
  children,
  variant = 'primary',
  className = '',
  to,
  ...props
}: ButtonProps) => {
  const baseStyle =
    'py-2.5 px-4 rounded-lg font-bold transition cursor-pointer text-center aria-label text-lg';

  const variantClass = {
    primary: 'bg-slate-900 text-white hover:bg-slate-950',
    secondary: 'bg-yellow-500 text-white hover:bg-yellow-600',
  };
  return to ? (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={clsx(baseStyle, variantClass[variant], className)}
    >
      {children}
    </Link>
  ) : (
    <button
      {...props}
      className={clsx(baseStyle, variantClass[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
