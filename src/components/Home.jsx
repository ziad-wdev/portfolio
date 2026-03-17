import StackIcon from "./StackIcon";

export default function Home() {
  function handleLinkClick(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="flex-center container min-h-screen gap-8 py-40 max-md:flex-col md:justify-between">
      <div className="max-w-lg flex-1 max-md:text-center">
        <span className="bg-accent/10 text-accent inset-ring-accent/20 mb-4 inline-block rounded-lg px-2 py-1 font-medium uppercase inset-ring max-md:text-sm">
          available for new opportunities
        </span>
        <h2 className="lg:text- mb-6 text-4xl font-bold md:text-5xl">
          Hi, I'm <span className="text-accent">Ziad</span>. Building digital
          experiences that matter.
        </h2>
        <p className="text-dark-5 dark:text-light-5 mb-8 md:text-lg">
          A full-stack developer passionate about creating clean, performant,
          and user-centric applications.
        </p>
        <div className="flex-center flex-wrap gap-4 md:justify-start">
          <a
            href="#projects"
            onClick={handleLinkClick}
            className="bg-accent hover:bg-accent-dark cursor-pointer rounded-xl px-4 py-2 font-medium text-white transition-colors md:px-6 md:py-4"
          >
            View Projects
          </a>
          <a
            href="#Contact"
            onClick={handleLinkClick}
            className="bg-light-2 hover:bg-light-3 border-light-3 dark:bg-dark-2 dark:hover:bg-dark-3 dark:border-dark-3 cursor-pointer rounded-xl border px-4 py-2 font-medium transition-colors md:px-6 md:py-4"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-lg flex-1">
        <div className="absolute top-0 right-0 bottom-12 left-12 overflow-hidden rounded-3xl">
          <img
            src="src/assets/laptop.jpg"
            alt=""
            className="size-full object-cover"
          />
          <div className="bg-accent absolute inset-0 mix-blend-soft-light"></div>
        </div>
        <div className="bg-light-2 border-light-3 dark:bg-dark-2 dark:border-dark-3 absolute bottom-0 left-0 rounded-2xl border p-6 transition-colors">
          <h3 className="mb-4 font-bold">Tech Stack</h3>
          <div className="grid grid-cols-3 gap-4">
            <StackIcon icon="mdi:language-typescript" text="TypeScript" />
            <StackIcon icon="mdi:tailwind" text="Tailwind CSS" />
            <StackIcon icon="mdi:react" text="React" />
            <StackIcon icon="devicon-plain:nextjs" text="Next.js" />
            <StackIcon icon="mdi:nodejs" text="Node.js" />
            <StackIcon icon="devicon-plain:mongodb" text="MongoDB" />
          </div>
        </div>
      </div>
    </section>
  );
}
