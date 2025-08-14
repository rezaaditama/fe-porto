import { ScrollLink } from '../../components/Navigate';
import ThemeToogle from '../../components/Toogle/ThemeToogle';

const linkClass =
  'text-lg text-black/50 cursor-pointer transition duration-300 hover:text-blue-600 ';
const activeClass = 'font-bold text-xl text-blue-800';

const Navbar = () => {
  return (
    <nav className='w-full flex justify-center fixed top-3 z-50'>
      <div className='px-10 w-[95vw] py-5 rounded-md backdrop-blur-sm bg-white/90 shadow-md grid grid-cols-2 md:grid-cols-3'>
        <h1 className='font-extrabold capitalize text-blue-800 text-2xl'>
          ✨my portofolio
        </h1>
        <div className='space-x-5 font-semibold text-center'>
          {['home', 'about', 'project', 'contact'].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              variant='ghost'
              offset={-70}
              activeClass={activeClass}
              className={linkClass}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
        <div className='flex justify-end'>
          <ThemeToogle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
