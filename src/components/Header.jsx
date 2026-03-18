import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import { cn } from 'clsx-for-tailwind';

import Nav from './Nav';

export default function Header() {
  const scrollMargin = 25;
  const [isScrolled, setIsScrolled] = useState(window.scrollY > scrollMargin);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > scrollMargin);
    };
    window.addEventListener('scroll', handleScroll);
    return window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'bg-light dark:bg-dark text-dark-3 dark:text-light-3 fixed top-0 right-0 left-0 z-50 py-6 transition-all',
        {
          'bg-light-2/75 dark:bg-dark-2/75 py-4 backdrop-blur-md': isScrolled
        }
      )}
    >
      <div className='container flex items-center justify-between'>
        <h1 className='text-accent dark:text-accent-light text-2xl'>ziad.dev</h1>
        <div className='flex-center gap-6 sm:gap-8'>
          <Nav></Nav>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={cn(
              'bg-light-2 dark:bg-dark-2 hover:bg-light-3 dark:hover:bg-dark-3 aspect-square cursor-pointer rounded-full p-2 text-xl transition-all active:scale-95',
              {
                'bg-light-3 dark:bg-dark-3 hover:bg-light-4 dark:hover:bg-dark-4': isScrolled
              }
            )}
          >
            {isDarkMode ? <Icon icon='lucide:moon' /> : <Icon icon='lucide:sun' />}
          </button>
        </div>
      </div>
    </header>
  );
}
