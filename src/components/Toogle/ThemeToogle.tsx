import { useEffect } from 'react';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import clsx from 'clsx';
import { useTheme } from '../../hooks/useTheme';

const ThemeToogle = () => {
  const { theme, toogleTheme } = useTheme();

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <button
      aria-label='Toogle theme'
      className={clsx(
        'relative flex items-center rounded-full border p-1 w-16 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-secondary/50',
        theme === 'dark'
          ? 'border-gray-900 bg-gray-700'
          : 'bg-gray-100 border-gray-400'
      )}
      onClick={toogleTheme}
    >
      <MoonIcon
        size={24}
        className={clsx(
          'absolute left-1 transition-opacity duration-300 text-blue-400',
          theme === 'dark' ? 'opacity-100' : 'opacity-0'
        )}
      />
      <SunIcon
        size={24}
        className={clsx(
          'absolute right-1 transition-opacity duration-300 text-yellow-500',
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        )}
      />

      <span
        className={clsx(
          'h-6 w-6 rounded-full border border-gray-400 bg-gray-300 transition-transform duration-300',
          theme === 'dark' ? 'translate-x-8' : 'translate-x-0'
        )}
      />
    </button>
  );
};

export default ThemeToogle;
