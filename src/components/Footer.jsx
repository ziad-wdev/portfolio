import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <footer className='border-light-3 dark:border-dark-3 border-t py-12'>
      <div className='flex-center container gap-6 max-md:flex-col md:justify-between'>
        <p className='flex-center text-dark-5 dark:text-light-5 gap-1 text-center text-base'>
          <Icon icon='lucide:copyright' /> Ziad Dev. All rights reserved.
        </p>
        <div className='flex-center gap-6 text-xl'>
          <a
            href='https://github.com/ziad-wdev'
            target='_blank'
            className='text-dark-5 dark:text-light-5 hover:text-accent dark:hover:text-accent-light'
          >
            <Icon icon='lucide:github' />
          </a>
          <a
            href='https://www.linkedin.com/in/ziad2371'
            target='_blank'
            className='text-dark-5 dark:text-light-5 hover:text-accent dark:hover:text-accent-light'
          >
            <Icon icon='lucide:linkedin' />
          </a>
          <a
            href='mailto:ziadahmed2371@gmail.com'
            target='_blank'
            className='text-dark-5 dark:text-light-5 hover:text-accent dark:hover:text-accent-light'
          >
            <Icon icon='lucide:mail' />
          </a>
        </div>
      </div>
    </footer>
  );
}
