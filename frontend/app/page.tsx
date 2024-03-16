import { Metadata } from "next";

import { Hero } from "@/components/hero";
import { ImagesRow } from "@/components/imagesRow";
import { Skeleton } from "@/components/ui/skeleton";
import { ClipboardCopyIcon } from "@radix-ui/react-icons";

export const metadata: Metadata = {
  title: "HealthHopper",
  description: "Simplify medical tourism.",
};

export default function MusicPage() {
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
  return (
    <>
      <Hero />
      {/* <DentalTab /> */}
      <ImagesRow items={items} />
    </>
  );
}

/* <div className="col-span-3 lg:col-span-4 ">
        <div className="h-full py-6 ">
          <Tabs defaultValue="dental" className="h-full space-y-6">
            <TabsContent
              value="dental"
              className="border-none p-0 outline-none"
            >
              <DentalTab />
            </TabsContent>
          </Tabs>
        </div>
      </div> */
