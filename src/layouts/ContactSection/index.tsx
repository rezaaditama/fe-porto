import ContactForm from '../../components/Contact/ContactForm';
import ContactInfo from '../../components/Contact/ContactInfo';
import ConnectWithMe from '../../components/Contact/ConnectWithMe';

const ContactSection = () => {
  return (
    <div id='contact' className='w-full py-10'>
      <div className='space-y-1 md:space-y-3 px-5'>
        <h1 className='text-center font-bold text-2xl capitalize text-primary md:text-3xl'>
          Get In Touch
        </h1>
        <p className='text-center text-neutral/50 text-sm md:text-base'>
          Saya terbuka untuk magang, proyek freelance atau kolaborasi menarik
          lainnya. Ayo mulai percakapan!
        </p>
      </div>

      <div className='pt-10 grid md:grid-cols-2 md:gap-x-10 px-10 grid-cols-1 gap-y-5'>
        <div className='order-1 md:order-2'>
          <ContactInfo />
          <ConnectWithMe />
        </div>
        <div className='order-2 md:order-1'>
          <ContactForm onSubmit={() => alert('clicked!!')} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
