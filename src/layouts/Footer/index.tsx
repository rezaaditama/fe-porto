import { Link } from 'react-scroll';
import GithubIcon from '../../components/Icons/GithubIcon';
import InstagramIcon from '../../components/Icons/InstagramIcon';
import { RouterLink } from '../../components/Navigate';
import LinkedinIcon from '../../components/Icons/LinkedinIcon';

const Footer = () => {
  return (
    <footer className='px-10 py-5 bg-slate-950 dark:bg-surface dark:border-t dark:border-primary/30'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='hidden md:block'>
          <h1 className='text-2xl font-bold uppercase text-white dark:text-primary'>
            Reza Aditama
          </h1>
          <p className='text-justify leading-tight tracking-wide text-sm text-gray-400 dark:text-neutral/50'>
            Saya seorang<span className='font-bold'> Frontend Developer </span>
            yang fokus pada pengembangan UI dengan React + Vite dan Tailwind
            CSS. Saya senang membangun antarmuka yang cepat, responsif dan
            efisien menggunakan ekosistem JavaScript modern.
          </p>
        </div>
        <div className='flex items-center flex-col space-y-1 md:space-y-2'>
          <h1 className='text-white font-bold capitalize text-xl dark:text-primary'>
            Quick Links
          </h1>
          <div className='space-x-5 text-gray-400 text-sm'>
            {['home', 'about', 'project', 'contact'].map((section) => (
              <Link
                offset={-70}
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                className={
                  'hover:text-white transition duration-300 cursor-pointer dark:hover:text-primary'
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
          <div className='flex flex-wrap space-x-5'>
            <RouterLink
              variant={'ghost'}
              target='_blank'
              rel='noreferrer'
              to={'https://www.github.com/rezaaditama'}
              className='cursor-pointer flex flex-col w-fit rounded-md items-center'
            >
              <GithubIcon className='text-gray-400 w-5 transition duration-300 hover:text-white dark:hover:text-primary' />
            </RouterLink>
            <RouterLink
              variant={'ghost'}
              target='_blank'
              rel='noreferrer'
              to={'https://www.instagram.com/reza.aditama._/'}
              className='cursor-pointer flex flex-col w-fit rounded-md items-center'
            >
              <InstagramIcon className='text-gray-400 w-5 transition duration-300 hover:text-white dark:hover:text-primary' />
            </RouterLink>
            <RouterLink
              variant={'ghost'}
              target='_blank'
              rel='noreferrer'
              to={'https://www.instagram.com/reza.aditama._/'}
              className='cursor-pointer flex flex-col w-fit rounded-md items-center'
            >
              <LinkedinIcon
                className={
                  'text-gray-400 w-5 transition duration-300 hover:text-white dark:hover:text-primary'
                }
              />
            </RouterLink>
          </div>
        </div>
      </div>
      <div className='text-center text-sm text-gray-400 mt-10 border-gray-800 border-t dark:border-primary/30'>
        <p className='pt-2'>
          © 2025 Reza Aditama - Front End Developer. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
