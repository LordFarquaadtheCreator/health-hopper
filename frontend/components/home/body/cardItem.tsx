import { cn } from "@/lib/utils";
import { Skeleton, Text } from "@radix-ui/themes";
import Image from "next/image";

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
        " rounded-xl cursor-pointer flex-shrink-0 mb-2 flex-0 min-w-[400px] h-[300px] group/bento transition duration-200   dark:bg-black dark:border-white/[0.2] bg-white border  justify-between flex flex-col",
        className
      )}
    >
      <Image
        className="rounded-t-xl max-h-[225px] object-bottom object-cover border-none outline-none"
        alt=""
        width={400}
        height={225}
        src={header}
      />
      <div className=" p-4 pt-0 group-hover/bento:translate-x-2 transition duration-200 flex flex-col">
        <Text className="text-xs">{rating}/5</Text>

        <Text className="font-sans font-bold  dark:text-neutral-200 mb-2 -mt-1">
          {title}
        </Text>

        <Text className="font-sans font-normal -mt-3 text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </Text>
      </div>
    </div>
  );
};
