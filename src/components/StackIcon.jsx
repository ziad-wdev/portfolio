import { Icon } from "@iconify/react";

export default function StackIcon({ icon, text }) {
  return (
    <div className="text-dark-5 dark:text-light-5 group flex cursor-default flex-col items-center gap-2">
      <Icon
        icon={icon}
        className="bg-light-3 dark:bg-dark-3 group-hover:text-accent size-12 rounded-lg p-2 transition-colors"
      ></Icon>
      <span className="text-[10px] font-bold tracking-wider uppercase">
        {text}
      </span>
    </div>
  );
}
