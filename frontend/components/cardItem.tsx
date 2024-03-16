import { cn } from "@/lib/utils";
import { Skeleton, Text } from "@radix-ui/themes";

export const CardItem = ({
  className,
  title,
  description,
  header,
  rating,
}: any) => {
  return (
    <div
      className={cn(
        " rounded-xl flex-shrink-0  flex-0 min-w-[400px] h-[300px] group/bento transition duration-200  p-4 dark:bg-black dark:border-white/[0.2] bg-white border  justify-between flex flex-col",
        className
      )}
    >
      <Skeleton className="w-full h-full" />
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col">
        <Text className="text-xs">{rating}/5</Text>

        <Text className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 -mt-1">
          {title}
        </Text>

        <Text className="font-sans font-normal -mt-3 text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </Text>
      </div>
    </div>
  );
};
