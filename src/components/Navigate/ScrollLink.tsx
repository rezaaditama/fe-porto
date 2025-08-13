import clsx from 'clsx';
import type { FC, ReactNode } from 'react';
import { Link as Scroll } from 'react-scroll';

type Variant = 'primary' | 'secondary';

interface ScrollLinkProps {
  children: ReactNode;
  variant?: Variant;
  to: string;
  className?: string;
}

const baseStyle =
  'font-bold py-2 rounded-md cursor-pointer text-base text-center transition';
const variantClass: Record<Variant, string> = {
  primary: 'bg-slate-800 text-white hover:bg-slate-950',
  secondary: 'bg-yellow-500 text-white hover:bg-yellow-600',
};

const ScrollLink: FC<ScrollLinkProps> = ({
  children,
  variant = 'primary',
  to,
  className,
  ...props
}: ScrollLinkProps) => {
  return (
    <Scroll
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className={clsx(baseStyle, variantClass[variant], className)}
      {...props}
    >
      {children}
    </Scroll>
  );
};

export default ScrollLink;
