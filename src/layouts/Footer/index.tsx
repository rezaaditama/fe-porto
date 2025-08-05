import { Link } from 'react-scroll';
import GithubIcon from '../../components/Icons/GithubIcon';
import InstagramIcon from '../../components/Icons/InstagramIcon';

const Footer = () => {
  return (
    <footer className='px-10 py-5 bg-slate-950'>
      <div className='grid grid-cols-2'>
        <div>
          <h1 className='text-2xl font-bold uppercase text-white'>
            Reza Aditama
          </h1>
          <p className='text-justify leading-tight tracking-wide text-sm text-gray-400'>
            Saya seorang<span className='font-bold'> Frontend Developer </span>
            yang fokus pada pengembangan UI dengan React + Vite dan Tailwind
            CSS. Saya senang membangun antarmuka yang cepat, responsif dan
            efisien menggunakan ekosistem JavaScript modern.
          </p>
        </div>
        <div className='flex text-white items-center flex-col space-y-2'>
          <h1 className='text-white font-bold capitalize text-xl'>
            Quick Links
          </h1>
          <div className='space-x-5 text-gray-400 text-sm'>
            <Link
              className='hover:text-white transition duration-300 cursor-pointer'
              to='home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
            <Link
              className='hover:text-white transition duration-300 cursor-pointer'
              to='about'
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
            <Link
              className='hover:text-white transition duration-300 cursor-pointer'
              to='project'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Project
            </Link>
            <Link
              className='hover:text-white transition duration-300 cursor-pointer'
              to='contact'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              contact
            </Link>
          </div>
          <div className='flex space-x-5'>
            <Link
              to={'https://www.github.com/rezaaditama'}
              className='cursor-pointer flex flex-col w-fit rounded-md items-center'
            >
              <GithubIcon color={'#9E9E9E'} size={24} />
            </Link>
            <Link
              to={'https://www.instagram.com/reza.aditama._/'}
              className='cursor-pointer flex flex-col w-fit rounded-md items-center'
            >
              <InstagramIcon color={'#9E9E9E'} size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-center text-sm text-gray-400 mt-10 border-gray-800 border-t'>
        <p className='py-2'>
          © 2025 Reza Aditama - Front End Developer. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
