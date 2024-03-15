import { CardItem } from "./cardItem";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Skeleton } from "./ui/skeleton";

export const Body = () => {
  return (
    <div className="relative p-3 small:p-8 small:pt-4 no-scrollbar">
      <ScrollArea type="scroll">
        <div className="flex flex-row flex-shrink-0   gap-4 w-full overflow-y-hidden flex-0 overflow-x-scroll no-scrollbar">
          {items.map((item, i) => (
            <CardItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              //   className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
        <ScrollBar typeof="scroll" orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton className="w-full h-full" />,
    icon: <ClipboardCopyIcon className="h-4 w-4 text-neutral-500" />,
  },
];
