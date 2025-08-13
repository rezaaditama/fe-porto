import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';
import ConnectWithMe from '../../components/Contact/ConnectWithMe';

const ContactSection = () => {
  return (
    <div id='contact' className='min-h-screen w-full py-10'>
      <div className='space-y-3'>
        <h1 className='text-center font-bold text-3xl capitalize text-blue-800'>
          Get In Touch
        </h1>
        <p className='text-center text-gray-500 text-base'>
          Saya terbuka untuk magang, proyek freelance atau kolaborasi menarik
          lainnya. Ayo mulai percakapan!
        </p>
      </div>
      <div className='pt-10 grid grid-cols-2 gap-x-10 px-10'>
        <ContactForm onSubmit={() => alert('clicked!!')} />
        <div className='grid grid-rows-3 gap-y-2'>
          <ContactInfo />
          <ConnectWithMe />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
