export default function SkillBadge({ text }) {
  return (
    <span className="bg-light-4 dark:bg-dark-4 hover:text-accent text-dark-4 dark:text-light-4 inline-block cursor-default rounded-lg p-2 text-[12px] font-bold tracking-wider transition-colors">
      {text}
    </span>
  );
}
