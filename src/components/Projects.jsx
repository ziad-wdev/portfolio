import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const projectsNames = ['html5-css3-project', 'bootstrap-project', 'tailwindcss-project'];

    async function fetchProject(name) {
      const response = await axios(`https://api.github.com/repos/ziad-wdev/${name}`);
      return response.data;
    }

    async function fetchScreenshot(homepage) {
      const response = await axios(`https://api.microlink.io?screenshot&url=${homepage}`);
      return response.data.data.screenshot.url;
    }

    const fetchedProjects = Promise.all(
      projectsNames.map(async name => {
        const project = await fetchProject(name);
        if (!project) return null;
        const screenshot = await fetchScreenshot(project.homepage);
        return { ...project, screenshot };
      })
    );

    fetchedProjects
      .then(fetchedProjects => {
        setProjects(fetchedProjects.filter(Boolean));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
            className='flex-center text-accent ml-auto gap-2 hover:underline'
          >
            View all on GitHub <Icon icon='lucide:chevron-right' />
          </a>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8'>
          {projects.map(project => (
            <div key={project.name} className='card group flex flex-col overflow-hidden p-0'>
              <div className='flex-center aspect-video overflow-hidden'>
                <img
                  src={project.screenshot}
                  alt={project.name.replaceAll('-', ' ')}
                  className='size-full object-cover object-top transition-transform duration-500 group-hover:scale-105'
                />
              </div>
              <div className='flex flex-1 flex-col p-6'>
                <h3 className='mb-2 truncate capitalize'>{project.name.replaceAll('-', ' ')}</h3>
                <p className='mb-4 line-clamp-2 text-base'>{project.description}</p>
                <div className='text-accent dark:text-accent-light flex flex-1 flex-wrap gap-2 text-xs font-bold tracking-wider uppercase'>
                  {project.topics.map(topic => (
                    <span key={topic} className='last:mb-6'>
                      #{topic}
                    </span>
                  ))}
                </div>
                <div className='flex gap-4 text-center text-sm'>
                  <a
                    href={project.homepage}
                    target='_blank'
                    className='bg-accent hover:bg-accent-dark flex-center flex-1 gap-2 rounded-lg p-2 font-medium text-white'
                  >
                    Live Demo <Icon icon='lucide:external-link' />
                  </a>
                  <a
                    href={project.html_url}
                    target='_blank'
                    className='bg-light-4 hover:bg-light-5 dark:bg-dark-4 dark:hover:bg-dark-5 flex-center flex-1 gap-2 rounded-lg p-2 font-medium'
                  >
                    Code <Icon icon='lucide:github' />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
