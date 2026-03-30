import { Icon } from '@iconify/react';

import projectsData from '../data/projects-data.json';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const projects = projectsData;

  return (
    <section id='projects'>
      <div className='container'>
        <div className='mb-12 flex flex-wrap items-end justify-between gap-8'>
          <div className='space-y-4'>
            <h2>Featured Projects</h2>
            <p className='max-w-md text-base'>
              A selection of my recent work, ranging from complex web platforms to creative experiments.
            </p>
          </div>
          <a
            href='https://github.com/ziad-wdev'
            target='_blank'
            className='flex-center text-accent dark:text-accent-light ml-auto gap-2 hover:underline'
          >
            View all on GitHub <Icon icon='lucide:chevron-right' />
          </a>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8'>
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
