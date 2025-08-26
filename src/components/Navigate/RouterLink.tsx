import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost';

interface RouterLinkProps extends LinkProps {
  children: ReactNode;
  variant?: Variant;
  to: string;
  className?: string;
}

const baseStyle =
  'font-bold py-2 rounded-md cursor-pointer text-base text-center transition duration-300';
const variantClass: Record<Variant, string> = {
  primary:
    'bg-secondary text-white hover:bg-secondary-hover dark:bg-primary dark:hover:bg-primary-hover',
  secondary:
    'bg-accent text-white hover:bg-accent-hover dark:bg-transparent dark:border dark:border-primary dark:text-primary dark:hover:border-primary-hover dark:hover:text-primary-hover',
  ghost: 'bg-transparent',
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
      className={clsx(baseStyle, variantClass[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default RouterLink;
