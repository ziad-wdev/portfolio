import { useEffect, useState } from 'react';

import { Icon } from '@iconify/react';
import axios from 'axios';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const projectsNames = ['AESTHETIC', 'FreshFlavor', 'DigitalPro'];

    async function fetchProjectData(name) {
      try {
        // 1. Check Cache
        const cached = localStorage.getItem(`repo-${name}`);
        if (cached) {
          const { data, timestamp } = JSON.parse(cached);
          if (Date.now() - timestamp < 3600000) return data;
        }

        // 2. Fetch GitHub Data
        const { data: repo } = await axios(`https://api.github.com/repos/ziad-wdev/${name}`);

        // 3. Fetch Screenshot (only if homepage exists)
        let screenshot = null;
        if (repo.homepage) {
          const scrRes = await axios(
            `https://api.microlink.io?screenshot.type=jpeg&viewport.width=1920&viewport.height=1080&url=${repo.homepage}`
          );
          screenshot = scrRes.data?.data?.screenshot?.url;
        }

        const finalProject = { ...repo, screenshot };

        // 4. Save to Cache
        localStorage.setItem(
          `repo-${name}`,
          JSON.stringify({
            data: finalProject,
            timestamp: Date.now()
          })
        );

        return finalProject;
      } catch (err) {
        console.error(`Error loading ${name}:`, err.message);
        return null;
      }
    }

    async function init() {
      const results = await Promise.all(projectsNames.map(name => fetchProjectData(name)));
      setProjects(results.filter(Boolean));
      setLoading(false);
    }

    init();
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
            className='flex-center text-accent dark:text-accent-light ml-auto gap-2 hover:underline'
          >
            View all on GitHub <Icon icon='lucide:chevron-right' />
          </a>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-8'>
          {loading ? (
            <div className='flex-center text-muted container text-4xl font-bold'>Loading projects...</div>
          ) : (
            projects.map(project => (
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
                    {project.topics?.map(topic => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
