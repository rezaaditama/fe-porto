import { Link } from 'react-scroll';

const Navbar = () => {
  const linkClass =
    'text-lg text-black/50 cursor-pointer transition duration-300 hover:text-yellow-500';
  const activeClass = 'font-bold text-xl text-blue-700 cursor-pointer';
  return (
    <nav className='w-full flex justify-center fixed top-3 z-50'>
      <div className='px-10 py-5 border-b w-[95vw] border-gray-200 backdrop-blur-sm bg-white/80 shadow-sm grid grid-cols-2 md:grid-cols-3'>
        <h1 className='font-bold text-lg md:text-2xl capitalize text-blue-800'>
          ✨my portofolio
        </h1>
        <div className='space-x-5 font-semibold text-center hidden md:block'>
          <Link
            to='home'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={activeClass}
            className={linkClass}
          >
            Home
          </Link>
          <Link
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={activeClass}
            className={linkClass}
          >
            About
          </Link>
          <Link
            to='project'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={activeClass}
            className={linkClass}
          >
            Project
          </Link>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            activeClass={activeClass}
            className={linkClass}
          >
            Contact
          </Link>
        </div>
        <div className=''>
          <h1 className='text-right'>Admin</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
