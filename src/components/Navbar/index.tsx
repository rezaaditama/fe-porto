import { Link } from 'react-scroll';

const Navbar = () => {
  const linkClass =
    'text-lg text-black/50 cursor-pointer transition duration-300 hover:text-blue-600 hover:font-medium';
  const activeClass = 'font-bold text-xl text-blue-800';
  return (
    <nav className='w-full flex justify-center fixed top-3 z-50'>
      <div className='px-10 py-5 border-1 w-[95vw] border-gray-100 rounded-xl backdrop-blur-sm bg-white shadow-md grid grid-cols-2 md:grid-cols-3'>
        <h1 className='font-extrabold text-lg capitalize text-blue-800 md:text-2xl'>
          ✨my portofolio
        </h1>
        <div className='space-x-5 font-semibold text-center hidden md:block'>
          {['home', 'about', 'project', 'contact'].map((section) => (
            <Link
              offset={-70}
              key={section}
              to={section}
              spy={true}
              smooth={true}
              duration={500}
              activeClass={activeClass}
              className={linkClass}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        <div className=''>
          <h1 className='text-right'>Admin</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
