import type { ReactNode } from 'react';
import { RouterLink } from '../Navigate';
import IconWrapper from './IconWrapper';
import clsx from 'clsx';
import type { LinkProps } from 'react-router-dom';

type Variant = 'circle' | 'square';

interface SocialLinkCardProps extends LinkProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
  variant?: Variant;
  label?: string;
  to: string;
}

const baseStyle =
  'bg-surface flex flex-col items-center justify-center space-y-1 transition duration-300';

const SocialLinkCard = ({
  children,
  bgColor,
  className,
  variant = 'circle',
  label,
  to,
  ...props
}: SocialLinkCardProps) => {
  return (
    <RouterLink to={to} variant='ghost' {...props}>
      <IconWrapper
        variant={variant}
        bgColor={bgColor}
        className={clsx(baseStyle, bgColor, className)}
      >
        {children}
        <span className='text-xs text-center font-semibold text-neutral/80'>
          {label}
        </span>
      </IconWrapper>
    </RouterLink>
  );
};

export default SocialLinkCard;
