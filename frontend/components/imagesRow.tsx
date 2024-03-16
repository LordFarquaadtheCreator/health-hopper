"use client";
import { CardItem } from "./cardItem";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const ImagesRow = ({ items, text }: any) => {
  const containerRef: any = useRef<any>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(true);
  const { scrollXProgress }: any = useScroll({
    container: containerRef,
  });
  const CURSOR_SIZE = 80;

  useMotionValueEvent(scrollXProgress, "change", (current) => {
    if (typeof current === "number") {
      if (current > 0.05) {
        setLeftVisible(true);
      } else if (current < 0.05) {
        setLeftVisible(false);
      }
      if (current > 0.95) {
        setRightVisible(false);
      } else if (current < 0.95) {
        setRightVisible(true);
      }
    }
  });

  return (
    <div className="relative  no-visible-scrollbar">
      <h2 className="!text-[2rem] pb-2 font-semibold tracking-tight">{text}</h2>
      <div
        ref={containerRef}
        className={cn(
          "flex flex-row flex-shrink-0   gap-4 w-full overflow-y-hidden flex-0 overflow-x-scroll no-visible-scrollbar"
        )}
      >
        {items.map((item: any, i: any) => (
          <Link key={i} href={`/clinic/${item.id}`}>
            <CardItem
              title={item.name}
              description={item.location}
              rating={item.rating}
              header={item.photos[i]}
              //   className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          </Link>
        ))}
      </div>
      {/* </div> */}

      {leftVisible && (
        <button
          type="button"
          className="group absolute left-[-2.2%] top-1/2 z-20 grid aspect-square place-content-center rounded-full transition-colors"
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
          }}
          onClick={() => {
            const container = containerRef.current;
            if (container) {
              container.scrollTo({
                left: container.scrollLeft - 200,
                behavior: "smooth",
              });
            }
          }}
        >
          <span className="sr-only">Previous Guide</span>
          <ArrowLeftIcon className="h-10 w-10 stroke-[1.5] bg-white light:hover:bg-black   light:hover:text-white dark:hover:bg-black dark:hover:text-white dark:text-black rounded-full border p-1  group-disabled:opacity-50" />
        </button>
      )}
      {rightVisible && (
        <button
          type="button"
          className="group  absolute right-[-2.2%] top-1/2 z-20 grid aspect-square place-content-center rounded-full transition-colors"
          style={{
            width: CURSOR_SIZE,
            height: CURSOR_SIZE,
          }}
          onClick={() => {
            const container = containerRef.current;
            if (container) {
              container.scrollTo({
                left: container.scrollLeft + 200,
                behavior: "smooth",
              });
            }
          }}
        >
          <span className="sr-only">Next Guide</span>
          <ArrowRightIcon className="h-10 w-10 stroke-[1.5] bg-white light:hover:bg-black   light:hover:text-white dark:hover:bg-black dark:hover:text-white dark:text-black rounded-full border p-1 transition-colors  group-disabled:opacity-50" />
        </button>
      )}
    </div>
  );
};
