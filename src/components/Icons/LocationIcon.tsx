interface LocationIconProps {
  size: number;
  className?: string;
  ariaLabel?: string;
}

const LocationIcon = ({
  size,
  className,
  ariaLabel = 'Location Icon',
}: LocationIconProps) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      width={size}
      height={size}
      className={className}
      aria-label={ariaLabel}
      role='img'
    >
      <g id='SVGRepo_iconCarrier'>
        <path d='M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z' />
        <path d='M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z' />
      </g>
    </svg>
  );
};

export default LocationIcon;
