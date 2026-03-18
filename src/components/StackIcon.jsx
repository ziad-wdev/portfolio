import { Icon } from '@iconify/react';

export default function StackIcon({ icon, text }) {
  return (
    <div className='text-dark-5 dark:text-light-5 group flex cursor-default flex-col items-center gap-2'>
      <Icon
        icon={icon}
        className='bg-light-3 dark:bg-dark-3 group-hover:text-accent dark:group-hover:text-accent-light size-12 rounded-lg p-2'
      ></Icon>
      <span className='text-2xs font-bold tracking-wider uppercase'>{text}</span>
    </div>
  );
}
