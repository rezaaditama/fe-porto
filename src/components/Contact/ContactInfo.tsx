import InfoItem from '../Wrapper/InfoItem';
import EmailIcon from '../Icons/EmailIcon';
import LocationIcon from '../Icons/LocationIcon';

const ContactInfo = () => {
  return (
    <div className='rounded-md border-1 p-5 border-gray-200 shadow-md h-fit animation-card dark:border-primary/20'>
      <h2 className='text-center text-2xl font-bold text-primary'>
        Contact Information
      </h2>
      <div className='space-y-5 pt-5'>
        <InfoItem
          bgColor='bg-indigo-100'
          title='Email Address'
          description='aditamareza04@gmail.com'
          icon={<EmailIcon size={24} className={'text-indigo-600'} />}
        />
        <InfoItem
          bgColor='bg-indigo-100'
          title='Location'
          description='Bogor, Indonesia'
          icon={<LocationIcon size={24} className={'text-indigo-600'} />}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
