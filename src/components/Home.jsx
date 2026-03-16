export default function Home() {
  return (
    <section className="container min-h-screen py-40">
      <div className="max-w-lg max-md:text-center">
        <span className="bg-accent/10 text-accent inset-ring-accent/20 mb-4 inline-flex items-center rounded-lg px-2 py-1 font-medium inset-ring max-sm:text-sm">
          available for new opportunities
        </span>
        <h2 className="mb-6 text-5xl font-bold max-sm:text-4xl lg:text-7xl">
          Hi, I'm <span className="text-accent">Ziad</span>. Building digital
          experiences that matter.
        </h2>
        <p className="text-dark-5 dark:text-light-5 text-md max-md:text-md mb-8 lg:text-xl">
          A full-stack developer passionate about creating clean, performant,
          and user-centric applications.
        </p>
      </div>
    </section>
  );
}
