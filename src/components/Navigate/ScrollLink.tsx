import clsx from 'clsx';
import type { ReactNode } from 'react';
import { Link as Scroll, type LinkProps } from 'react-scroll';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ScrollLinkProps extends Omit<LinkProps, 'ref'> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const baseStyle =
  'font-bold py-2 rounded-md cursor-pointer text-base text-center transition';
const variantClass: Record<Variant, string> = {
  primary: 'bg-secondary text-white hover:bg-slate-950 dark:bg-primary',
  secondary:
    'bg-accent text-white hover:bg-yellow-600 dark:bg-transparent dark:border dark:border-primary dark:text-primary',
  ghost: 'bg-transparent',
};

const ScrollLink = ({
  children,
  variant = 'primary',
  className,
  ...props
}: ScrollLinkProps) => {
  return (
    <Scroll
      spy
      smooth
      duration={500}
      className={clsx(baseStyle, variantClass[variant], className)}
      {...props}
    >
      {children}
    </Scroll>
  );
};

export default ScrollLink;
