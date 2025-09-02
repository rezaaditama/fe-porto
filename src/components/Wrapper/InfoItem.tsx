import clsx from 'clsx';
import IconWrapper from './IconWrapper';

interface InfoItemProps {
  icon: React.ReactNode;
  bgColor: string;
  title?: string;
  description?: string;
  detail?: string;
  className?: string;
}

const InfoItem = ({
  icon,
  bgColor,
  title,
  description,
  detail,
  className,
}: InfoItemProps) => {
  return (
    <div className={clsx('flex gap-3 items-center md:gap-4', className)}>
      <IconWrapper bgColor={bgColor} className={'p-1.5 shrink-0 md:p-2'}>
        {icon}
      </IconWrapper>
      <div>
        <h2 className='font-bold text-sm text-primary leading-tight md:text-base'>
          {title}
        </h2>
        <p className='text-xs text-neutral leading-snug md:text-sm'>
          {description}
          {detail && (
            <>
              <br />
              <span className='text-neutral/70 text-[11px] md:text-xs'>
                {detail}
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
