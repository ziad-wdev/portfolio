import { Icon } from '@iconify/react';

export default function ProjectCard({ key, project }) {
  const { name, description, topics, pageUrl, githubUrl, imageUrl } = project;

  return (
    <div key={key} className='card group flex flex-col overflow-hidden p-0'>
      <div className='flex-center aspect-video overflow-hidden'>
        <img
          src={imageUrl}
          alt={name}
          className='size-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
        />
      </div>
      <div className='flex flex-1 flex-col p-6'>
        <h3 className='mb-2 truncate capitalize'>{name}</h3>
        <p className='mb-4 line-clamp-2 text-base'>{description}</p>
        <div className='text-accent dark:text-accent-light flex flex-1 flex-wrap gap-2 text-xs font-bold tracking-wider uppercase'>
          {topics?.map(topic => (
            <span key={topic} className='last:mb-6'>
              #{topic}
            </span>
          ))}
        </div>
        <div className='flex gap-4 text-center text-sm'>
          <a
            href={pageUrl}
            target='_blank'
            className='bg-accent hover:bg-accent-dark flex-center flex-1 gap-2 rounded-lg p-2 font-medium text-white'
          >
            Live Demo <Icon icon='lucide:external-link' />
          </a>
          <a
            href={githubUrl}
            target='_blank'
            className='bg-light-4 hover:bg-light-5 dark:bg-dark-4 dark:hover:bg-dark-5 flex-center flex-1 gap-2 rounded-lg p-2 font-medium'
          >
            Code <Icon icon='lucide:github' />
          </a>
        </div>
      </div>
    </div>
  );
}
