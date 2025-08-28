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
  'font-bold py-1.5 rounded-md cursor-pointer text-base text-center transition duration-300 md:py-2';
const variantClass: Record<Variant, string> = {
  primary:
    'bg-secondary text-white hover:bg-secondary-hover dark:bg-primary dark:hover:bg-primary-hover',
  secondary:
    'bg-accent text-white hover:bg-accent-hover dark:bg-transparent dark:border dark:border-primary dark:text-primary dark:hover:border-primary-hover dark:hover:text-primary-hover',
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
