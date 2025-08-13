import { useEffect, useState } from 'react';
import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';
import clsx from 'clsx';

const ThemeToogle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    console.log(isDark);
  }, [isDark]);

  return (
    <button
      aria-label='Toogle theme'
      className={clsx(
        'relative flex items-center rounded-full border p-1 w-16 transition-colors duration-300 focus:outline-none focus:ring-1 focus:ring-blue-500',
        isDark ? 'border-gray-900 bg-gray-700' : 'bg-gray-100 border-gray-400'
      )}
      onClick={() => setIsDark(!isDark)}
    >
      <MoonIcon
        size={24}
        className={clsx(
          'absolute left-1 transition-opacity duration-300 text-blue-400',
          isDark ? 'opacity-100' : 'opacity-0'
        )}
      />
      <SunIcon
        size={24}
        className={clsx(
          'absolute right-1 transition-opacity duration-300 text-yellow-500',
          isDark ? 'opacity-0' : 'opacity-100'
        )}
      />

      <span
        className={clsx(
          'h-6 w-6 rounded-full border border-gray-400 bg-white transition-transform duration-300',
          isDark ? 'translate-x-8' : 'translate-x-0'
        )}
      />
    </button>
  );
};

export default ThemeToogle;
