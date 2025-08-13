import InfoItem from '../Wrapper/InfoItem';
import EmailIcon from '../Icons/EmailIcon';
import LocationIcon from '../Icons/LocationIcon';

const ContactInfo = () => {
  return (
    <div className='bg-white rounded-md border-1 p-5 border-gray-200 shadow-md h-fit hover:shadow-xl hover:-translate-y-1 transition duration-300 hover:bg-slate-50'>
      <h2 className='text-center text-2xl font-bold text-blue-800'>
        Contact Information
      </h2>
      <div className='space-y-5 pt-5'>
        <InfoItem
          bgColor='bg-indigo-50'
          title='Email Address'
          description='aditamareza04@gmail.com'
          icon={<EmailIcon size={24} color='#6366f1' />}
        />
        <InfoItem
          bgColor='bg-indigo-50'
          title='Location'
          description='Bogor, Indonesia'
          icon={<LocationIcon size={24} color='#6366f1' />}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
