interface LinkedinIconProps {
  size: number;
  className?: string;
  ariaLabel?: string;
}

const LinkedinIcon = ({
  size,
  className,
  ariaLabel = 'Linkedin Icon',
}: LinkedinIconProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='currentColor'
      width={size}
      height={size}
      className={className}
      aria-label={ariaLabel}
      role='img'
    >
      <path d='M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.85-3.037-1.853 0-2.137 1.445-2.137 2.939v5.667H9.353V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.599 0 4.268 2.368 4.268 5.452v6.289zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.912 20.452H3.759V9h3.153v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.206 24 24 23.225 24 22.271V1.729C24 .774 23.206 0 22.225 0z' />
    </svg>
  );
};

export default LinkedinIcon;
