import type { ReactNode } from 'react';

interface IconWrapperProps {
  children: ReactNode;
  bgColor?: string;
  size?: string;
}

const IconWrapper = ({ children, bgColor, size = 'p-2' }: IconWrapperProps) => {
  return (
    <div className={`${bgColor} ${size} inline-flex rounded-full w-fit`}>
      {children}
    </div>
  );
};

export default IconWrapper;
