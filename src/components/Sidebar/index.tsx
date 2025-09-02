import { ScrollLink } from '../Navigate';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const linkClass =
  'text-sm text-neutral/50 cursor-pointer transition duration-300 hover:text-primary/80';
const activeClass = 'font-bold text-primary';

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      className={`w-full h-full fixed z-20 md:hidden block ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed h-full right-0 w-2/3 pt-20 px-5 bg-surface/95 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='text-center border-b pb-2 border-primary/80'>
          <h1 className='font-bold text-xl text-primary leading-tight'>
            REZA ADITAMA
          </h1>
          <p className='text-sm text-neutral/50'>Frontend Developer</p>
        </div>
        <div className=' pt-5 text-center'>
          <h1 className='font-bold text-primary'>Quick Link</h1>
          <div className='flex justify-center flex-col space-y-2'>
            {['home', 'about', 'project', 'contact'].map((section) => (
              <ScrollLink
                key={section}
                to={section}
                variant='ghost'
                offset={-70}
                activeClass={activeClass}
                className={linkClass}
                onClick={onClose}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

//  className={`fixed inset-0 z-50 bg-surface/80 backdrop-blur-md transform transition-transform duration-300
//       ${isShow ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
