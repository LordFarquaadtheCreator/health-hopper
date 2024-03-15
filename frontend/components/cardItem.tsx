import { cn } from "@/lib/utils";
import { Skeleton } from "@radix-ui/themes";

export const CardItem = ({
  className,
  title,
  description,
  header,
  icon,
}: any) => {
  return (
    <div
      className={cn(
        " rounded-xl  flex-0 w-[400px] h-[300px] group/bento transition duration-200  p-4 dark:bg-black dark:border-white/[0.2] bg-white border  justify-between flex flex-col",
        className
      )}
    >
      <Skeleton className="w-full h-full" />
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
