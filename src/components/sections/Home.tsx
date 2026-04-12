import Image from "next/image";
import Link from "next/link";

import StackIcon from "@/components/ui/StackIcon";

export default function Home() {
  return (
    <section id="home" className="min-h-screen py-40">
      <div className="flex-center container gap-8 max-lg:flex-col lg:justify-between">
        <div className="max-w-lg max-lg:text-center">
          <span className="bg-accent/10 text-accent inset-ring-accent/20 dark:bg-accent-light/10 dark:text-accent-light dark:inset-ring-accent-light/20 mb-4 inline-block rounded-lg p-2 font-medium uppercase inset-ring max-lg:text-sm">
            available for new opportunities
          </span>
          <h1 className="mb-6">
            Hi, I&apos;m <span className="text-accent dark:text-accent-light">Ziad</span>. Building digital experiences
            that matter.
          </h1>
          <p className="mb-8 lg:text-xl">
            A full-stack developer passionate about creating clean, performant, and user-centric applications.
          </p>
          <div className="flex-center flex-wrap gap-4 lg:justify-start">
            <Link
              href="/#projects"
              className="bg-accent hover:bg-accent-dark cursor-pointer rounded-xl px-4 py-2 font-medium text-white lg:px-6 lg:py-4"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="bg-light-2 hover:bg-light-3 border-light-3 dark:bg-dark-2 dark:hover:bg-dark-3 dark:border-dark-3 cursor-pointer rounded-xl border px-4 py-2 font-medium lg:px-6 lg:py-4"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative aspect-square w-full max-w-lg">
          <div className="absolute top-0 right-0 bottom-12 left-12 aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/homeImg.avif"
              alt=""
              width={500}
              height={500}
              loading="eager"
              className="size-full object-cover"
            />
            <div className="bg-accent dark:bg-accent-light absolute inset-0 mix-blend-soft-light"></div>
          </div>
          <div className="card absolute bottom-0 left-0 origin-bottom-left max-[500px]:scale-75">
            <h4 className="mb-4">Tech Stack</h4>
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
      </div>
    </section>
  );
}
