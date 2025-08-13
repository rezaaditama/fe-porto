import type { ReactNode } from 'react';
import { RouterLink } from '../Navigate';
import IconWrapper from './IconWrapper';
import clsx from 'clsx';

type Variant = 'circle' | 'square';

interface SocialLinkCardProps {
  children: ReactNode;
  bgColor?: string;
  className?: string;
  variant?: Variant;
  title?: string;
  url: string;
}

const baseStyle =
  'w-20 aspect-square flex flex-col items-center justify-center space-y-1 rounded-lg transition duration-300 items-center aspect-square';

const SocialLinkCard = ({
  children,
  bgColor,
  className,
  variant = 'square',
  title,
  url,
}: SocialLinkCardProps) => {
  return (
    <RouterLink to={url} variant='custom'>
      <IconWrapper
        variant={variant}
        bgColor={bgColor}
        className={clsx(baseStyle, bgColor, className)}
      >
        {children}
        <span className='text-xs text-center font-semibold'>{title}</span>
      </IconWrapper>
    </RouterLink>
  );
};

export default SocialLinkCard;
