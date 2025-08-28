import InfoItem from '../Wrapper/InfoItem';
import EmailIcon from '../Icons/EmailIcon';
import LocationIcon from '../Icons/LocationIcon';

const ContactInfo = () => {
  return (
    <div className='rounded-md border-1 p-5 border-gray-200 shadow-md h-fit animation-card dark:border-primary/20'>
      <h2 className='text-center font-bold text-primary text-xl md:text-2xl'>
        Contact Information
      </h2>
      <div className='space-y-5 pt-5'>
        <InfoItem
          bgColor='bg-indigo-100'
          title='Email Address'
          description='aditamareza04@gmail.com'
          icon={<EmailIcon className={'text-indigo-600 w-7'} />}
        />
        <InfoItem
          bgColor='bg-indigo-100'
          title='Location'
          description='Bogor, Indonesia'
          icon={<LocationIcon className={'text-indigo-600 w-7'} />}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
