import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'custom';

interface RouterLinkProps extends LinkProps {
  children: ReactNode;
  variant?: Variant;
  to: string;
  className?: string;
}

const baseStyle =
  'font-bold py-2 rounded-md cursor-pointer text-base text-center transition';
const variantClass: Record<Exclude<Variant, 'custom'>, string> = {
  primary: 'bg-slate-800 text-white hover:bg-slate-950',
  secondary: 'bg-yellow-500 text-white hover:bg-yellow-600',
  ghost: 'bg-transparent text-slate-800',
};

const RouterLink: FC<RouterLinkProps> = ({
  children,
  variant = 'primary',
  to,
  className,
  ...props
}: RouterLinkProps) => {
  return (
    <Link
      to={to}
      className={clsx(
        baseStyle,
        variant !== 'custom' && variantClass[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default RouterLink;
