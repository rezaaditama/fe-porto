import clsx from 'clsx';
import type { ReactNode } from 'react';

type Variant = 'circle' | 'square';

interface IconWrapperProps {
  children: ReactNode;
  bgColor?: string;
  variant?: Variant;
  className?: string;
}

const baseStyle = 'w-fit';
const variantClass = {
  circle: 'rounded-full',
  square: 'rounded-md',
};

const IconWrapper = ({
  children,
  bgColor,
  variant = 'circle',
  className,
  ...props
}: IconWrapperProps) => {
  return (
    <div
      className={clsx(baseStyle, bgColor, variantClass[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default IconWrapper;
