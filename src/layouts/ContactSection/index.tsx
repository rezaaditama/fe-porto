import { Link } from 'react-router-dom';
import EmailIcon from '../../components/Icons/EmailIcon';
import LocationIcon from '../../components/Icons/LocationIcon';
import InfoItem from '../../components/InfoItem';
import DownloadIcon from '../../components/Icons/DownloadIcon';

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
        <div className='bg-white rounded-md border-1 p-5 h-fit border-gray-200 shadow-md'>
          <h2 className='text-center text-2xl font-bold text-blue-800'>
            Send Me a Message
          </h2>
          {/* form mulai */}
          <form action='' className='space-y-2 pt-5'>
            <label
              htmlFor='fullname'
              className='font-semibold text-base text-slate-800'
            >
              Full Name
            </label>
            <input
              type='text'
              id='fullname'
              name='fullname'
              placeholder='Masukkan Nama Lengkap'
              className='w-full border-1 border-gray-300 py-1.5 rounded-md px-3'
            />
            <label
              htmlFor='email'
              className='font-semibold text-base text-slate-800'
            >
              Email Address
            </label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Masukkan Email'
              className='w-full border-1 border-gray-300 py-1.5 rounded-md px-3'
            />
            <label
              htmlFor='subject'
              className='font-semibold text-base text-slate-800'
            >
              Subject
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Masukkan Subject atau Topik'
              className='w-full border-1 border-gray-300 py-1.5 rounded-md px-3'
            />
            <label
              htmlFor='message'
              className='font-semibold text-base text-slate-800'
            >
              Your Message
            </label>
            <textarea
              name='message'
              id='message'
              placeholder='Tulis Pesan...'
              rows={5}
              className='w-full border-1 border-gray-300 py-1.5 rounded-md px-3'
            ></textarea>
            <button className='w-full bg-slate-800 font-bold text-white py-2 rounded-md cursor-pointer'>
              Submit
            </button>
          </form>
        </div>
        {/* form selesai */}
        {/* contact mulai */}
        <div className='grid grid-rows-3 gap-y-2'>
          <div className='bg-white rounded-md border-1 p-5 border-gray-200 shadow-md h-fit'>
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
          {/* contact selesai */}
          {/* connect mulai */}
          <div className='bg-white rounded-md border-1 p-5 border-gray-200 shadow-md h-fit'>
            <h2 className='text-center text-2xl font-bold text-blue-800'>
              Connect With Me
            </h2>
            <div className='flex flex-wrap space-x-2 pt-5 justify-center'>
              <Link
                to={'https://www.github.com/rezaaditama'}
                className='p-3 cursor-pointer flex flex-col w-fit bg-gray-100 rounded-md hover:bg-gray-300 transition duration-500 items-center'
              >
                <img
                  src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
                  alt='Connect To My Github'
                  className='w-10'
                />
                <h3 className='text-xs text-center font-semibold'>Github</h3>
              </Link>
              <Link
                to={'https://www.instagram.com/reza.aditama._/'}
                className='p-3 cursor-pointer flex flex-col w-fit bg-gray-100 rounded-md hover:bg-gray-300 transition duration-500 items-center'
              >
                <img
                  src='https://cdn.jsdelivr.net/npm/simple-icons/icons/instagram.svg'
                  alt='Connect To My Instagram'
                  className='w-10'
                />
                <h3 className='text-xs text-center font-semibold'>Instagram</h3>
              </Link>
              <Link
                to={'https://www.github.com/rezaaditama'}
                className='p-3 cursor-pointer flex flex-col w-fit bg-gray-100 rounded-md hover:bg-gray-300 transition duration-500 items-center justify-between'
              >
                <DownloadIcon size={30} color='#000000' />
                <h3 className='text-xs text-center font-semibold'>CV ATS</h3>
              </Link>
            </div>
          </div>
          {/* connect selesai */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
