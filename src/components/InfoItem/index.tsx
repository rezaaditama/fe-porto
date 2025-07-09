import IconWrapper from '../IconWrapper';

interface InfoItemProps {
  icon: React.ReactNode;
  bgColor: string;
  title: string;
  description: string;
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
    <div className={`${className} flex space-x-4 items-center`}>
      <IconWrapper bgColor={bgColor}>{icon}</IconWrapper>
      <div>
        <h2 className='font-bold text-base'>{title}</h2>
        <p className='text-sm leading-tight'>
          {description}
          {detail && (
            <>
              <br />
              <span className='text-gray-600'>{detail}</span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default InfoItem;
