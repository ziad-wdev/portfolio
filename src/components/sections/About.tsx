export default function About() {
  return (
    <section id="about">
      <div className="container flex gap-16 max-lg:flex-col lg:flex">
        <div className="w-full space-y-6">
          <h2>About My Journey</h2>
          <div className="space-y-4">
            <p>
              I started my coding journey a year ago, driven by a curiosity for how things work on
              the internet. What began as simple HTML/CSS experiments quickly evolved into a passion
              for building complex, scalable web applications.
            </p>
            <p>
              Today, I specialize in full-stack development, focusing on creating seamless user
              experiences backed by robust server-side logic. I believe in writing clean,
              maintainable code and constantly learning new technologies to stay at the forefront of
              the industry.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new video games, reading about
              science theories, or experimenting with new technologies.
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-2">
          <div className="dark-card">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="bg-accent inline-block size-2 rounded-full"></span> Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">HTML/CSS</span>
              <span className="skill-badge">JavaScript</span>
              <span className="skill-badge">TypeScript</span>
              <span className="skill-badge">React</span>
              <span className="skill-badge">Next.js</span>
              <span className="skill-badge">Vite</span>
              <span className="skill-badge">Tailwind CSS</span>
              <span className="skill-badge">Redux Toolkit</span>
              <span className="skill-badge">RTK Query</span>
              <span className="skill-badge">TanStack Query</span>
              <span className="skill-badge">TanStack Form</span>
            </div>
          </div>
          <div className="dark-card">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="bg-accent inline-block size-2 rounded-full"></span> Backend
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Node.js</span>
              <span className="skill-badge">Express.js</span>
              <span className="skill-badge">MongoDB</span>
              <span className="skill-badge">Mongoose</span>
              <span className="skill-badge">REST APIs</span>
              <span className="skill-badge">JWT</span>
              <span className="skill-badge">Redis</span>
            </div>
          </div>
          <div className="dark-card">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="bg-accent inline-block size-2 rounded-full"></span> Tools &amp;
              Integrations
            </h4>
            <div className="flex flex-wrap gap-2">
              <span className="skill-badge">Git &amp; GitHub</span>
              <span className="skill-badge">Docker</span>
              <span className="skill-badge">Turborepo</span>
              <span className="skill-badge">Vercel</span>
              <span className="skill-badge">Vitest</span>
              <span className="skill-badge">Stripe &amp; PayPal</span>
              <span className="skill-badge">Cloudinary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
