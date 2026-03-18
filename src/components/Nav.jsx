import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import { cn } from 'clsx-for-tailwind';

export default function Nav() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsOpened(false);
    });
    window.addEventListener('resize', () => {
      setIsOpened(false);
    });
    return () => {
      window.removeEventListener('scroll', () => {
        setIsOpened(false);
      });
      window.removeEventListener('resize', () => {
        setIsOpened(false);
      });
    };
  }, []);

  function handleLinkClick(e) {
    e.preventDefault();
    setIsOpened(false);
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpened(!isOpened)}
        className='hover:text-accent inline-block cursor-pointer text-2xl transition-all active:scale-95 sm:hidden'
      >
        {isOpened ? <Icon icon='lucide:x' /> : <Icon icon='lucide:menu' />}
      </button>
      <nav
        className={cn(
          'bg-light-2 dark:bg-dark-2 border-light-3 dark:border-dark-3 absolute top-full right-0 left-0 flex origin-top flex-col gap-2 border-y px-4 py-2 transition-all sm:hidden',
          {
            'scale-y-0 opacity-0': !isOpened
          }
        )}
      >
        <a
          href='#home'
          onClick={handleLinkClick}
          className='hover:text-accent hover:bg-light-3 dark:hover:bg-dark-3 inline-block rounded-xl p-4 font-medium transition-all active:scale-x-95'
        >
          Home
        </a>
        <a
          href='#about'
          onClick={handleLinkClick}
          className='hover:text-accent hover:bg-light-3 dark:hover:bg-dark-3 inline-block rounded-xl p-4 font-medium transition-all active:scale-x-95'
        >
          About
        </a>
        <a
          href='#projects'
          onClick={handleLinkClick}
          className='hover:text-accent hover:bg-light-3 dark:hover:bg-dark-3 inline-block rounded-xl p-4 font-medium transition-all active:scale-x-95'
        >
          Projects
        </a>
        <a
          href='#contact'
          onClick={handleLinkClick}
          className='hover:text-accent hover:bg-light-3 dark:hover:bg-dark-3 inline-block rounded-xl p-4 font-medium transition-all active:scale-x-95'
        >
          Contact
        </a>
      </nav>
      <nav className='flex-center gap-8 max-sm:hidden'>
        <a
          href='#home'
          onClick={handleLinkClick}
          className='hover:text-accent inline-block font-medium transition-all active:scale-95'
        >
          Home
        </a>
        <a
          href='#about'
          onClick={handleLinkClick}
          className='hover:text-accent inline-block font-medium transition-all active:scale-95'
        >
          About
        </a>
        <a
          href='#projects'
          onClick={handleLinkClick}
          className='hover:text-accent inline-block font-medium transition-all active:scale-95'
        >
          Projects
        </a>
        <a
          href='#contact'
          onClick={handleLinkClick}
          className='hover:text-accent inline-block font-medium transition-all active:scale-95'
        >
          Contact
        </a>
      </nav>
    </>
  );
}
