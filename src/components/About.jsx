import SkillBadge from "./SkillBadge";

export default function About() {
  return (
    <section className="bg-light-2 dark:bg-dark-2">
      <div className="flex-center container gap-8 py-20">
        <div className="flex-1 space-y-6">
          <h2>About My Journey</h2>
          <div className="space-y-4 md:text-lg">
            <p>
              I started my coding journey 5 years ago, driven by a curiosity for
              how things work on the internet. What began as simple HTML/CSS
              experiments quickly evolved into a passion for building complex,
              scalable web applications.
            </p>
            <p>
              Today, I specialize in full-stack development, focusing on
              creating seamless user experiences backed by robust server-side
              logic. I believe in writing clean, maintainable code and
              constantly learning new technologies to stay at the forefront of
              the industry.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails,
              reading about space exploration, or experimenting with digital
              photography.
            </p>
          </div>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-6">
          <div className="darker-card">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="bg-accent inline-block size-2 rounded-full"></span>{" "}
              Frontend
            </h4>
            <div className="flex flex-wrap gap-2">
              <SkillBadge text="Bootstrap" />
              <SkillBadge text="Tailwind CSS" />
              <SkillBadge text="Framer Motion" />
              <SkillBadge text="TypeScript" />
              <SkillBadge text="React" />
              <SkillBadge text="Vite" />
              <SkillBadge text="Next.js" />
              <SkillBadge text="Redux" />
              <SkillBadge text="TanStack Query" />
              <SkillBadge text="Zustand" />
            </div>
          </div>
          <div className="darker-card">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="bg-accent inline-block size-2 rounded-full"></span>{" "}
              Backend{" "}
              <span className="text-[12px] font-bold text-yellow-500">
                ( WiP )
              </span>
            </h4>
            <div className="flex flex-wrap gap-2">
              <SkillBadge text="Node.js" />
              <SkillBadge text="MongoDB" />
            </div>
          </div>
          <div className="darker-card">
            <h4 className="mb-4 flex items-center gap-2">
              <span className="bg-accent inline-block size-2 rounded-full"></span>{" "}
              Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              <SkillBadge text="Git" />
              <SkillBadge text="GitHub" />
              <SkillBadge text="Vercel" />
              <SkillBadge text="Zed" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
