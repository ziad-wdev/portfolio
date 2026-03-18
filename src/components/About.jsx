export default function About() {
  return (
    <section id='about' className='bg-light-2 dark:bg-dark-2'>
      <div className='lg:flex-center container flex gap-8 py-20 max-lg:flex-col'>
        <div className='flex-1 space-y-6'>
          <h2>About My Journey</h2>
          <div className='space-y-4'>
            <p>
              I started my coding journey 5 years ago, driven by a curiosity for how things work on the internet. What
              began as simple HTML/CSS experiments quickly evolved into a passion for building complex, scalable web
              applications.
            </p>
            <p>
              Today, I specialize in full-stack development, focusing on creating seamless user experiences backed by
              robust server-side logic. I believe in writing clean, maintainable code and constantly learning new
              technologies to stay at the forefront of the industry.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, reading about space exploration, or
              experimenting with digital photography.
            </p>
          </div>
        </div>
        <div className='grid flex-1 grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-2'>
          <div className='darker-card'>
            <h4 className='mb-4 flex items-center gap-2'>
              <span className='bg-accent inline-block size-2 rounded-full'></span> Frontend
            </h4>
            <div className='flex flex-wrap gap-2'>
              <span className='skill-badge'>Bootstrap</span>
              <span className='skill-badge'>Tailwind CSS</span>
              <span className='skill-badge'>Framer Motion</span>
              <span className='skill-badge'>TypeScript</span>
              <span className='skill-badge'>React</span>
              <span className='skill-badge'>Vite</span>
              <span className='skill-badge'>Next.js</span>
              <span className='skill-badge'>Redux</span>
              <span className='skill-badge'>TanStack Query</span>
              <span className='skill-badge'>Zustand</span>
            </div>
          </div>
          <div className='darker-card'>
            <h4 className='mb-4 flex items-center gap-2'>
              <span className='bg-accent inline-block size-2 rounded-full'></span> Backend{' '}
              <span className='text-[12px] font-bold text-yellow-500'>( WiP )</span>
            </h4>
            <div className='flex flex-wrap gap-2'>
              <span className='skill-badge'>Node.js</span>
              <span className='skill-badge'>MongoDB</span>
            </div>
          </div>
          <div className='darker-card'>
            <h4 className='mb-4 flex items-center gap-2'>
              <span className='bg-accent inline-block size-2 rounded-full'></span> Tools
            </h4>
            <div className='flex flex-wrap gap-2'>
              <span className='skill-badge'>Git</span>
              <span className='skill-badge'>GitHub</span>
              <span className='skill-badge'>Vercel</span>
              <span className='skill-badge'>npm</span>
              <span className='skill-badge'>Zed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
