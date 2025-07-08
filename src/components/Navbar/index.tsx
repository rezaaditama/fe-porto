import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navbarLinks = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? 'font-bold text-xl'
      : 'text-lg text-black/50 font-medium transition duration-300 hover:text-black';
  return (
    <nav className='px-10 py-5 border-b border-gray-200  top-0 fixed w-full z-50 bg-gray-100 grid grid-cols-2 md:grid md:grid-cols-3'>
      <h1 className='font-bold text-lg md:text-2xl'>Reza Aditama</h1>
      <div className='space-x-5 font-semibold text-center hidden md:block none'>
        <NavLink to={'/'} className={navbarLinks}>
          Home
        </NavLink>
        <NavLink to={'/about'} className={navbarLinks}>
          About
        </NavLink>
        <NavLink to={'/project'} className={navbarLinks}>
          Project
        </NavLink>
        <NavLink to={'/contact'} className={navbarLinks}>
          Contact
        </NavLink>
      </div>
      <div className=''>
        <h1 className='text-right'>Admin</h1>
      </div>
    </nav>
  );
};

export default Navbar;
