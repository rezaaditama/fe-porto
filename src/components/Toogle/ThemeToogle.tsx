import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import { useTheme } from '../../context/ThemeContext';

const ThemeToogle = () => {
  const { toggleTheme } = useTheme();

  return (
    <button
      aria-label='Toogle theme'
      className={
        'relative flex items-center rounded-full border p-1 w-16 border-gray-400 focus:ring-1 focus:ring-secondary/50 focus:outline-none dark:border-gray-900 dark:bg-gray-700'
      }
      onClick={toggleTheme}
    >
      <MoonIcon
        size={24}
        className={
          'absolute left-1 transition-opacity duration-300 text-blue-400 opacity-0 dark:opacity-100'
        }
      />
      <SunIcon
        size={24}
        className={
          'absolute right-1 transition-opacity duration-300 text-yellow-500 opacity-100 dark:opacity-0'
        }
      />

      <span className='h-6 w-6 rounded-full border border-gray-400 bg-gray-300 transition-transform duration-300 translate-x-0 dark:translate-x-8' />
    </button>
  );
};

export default ThemeToogle;
