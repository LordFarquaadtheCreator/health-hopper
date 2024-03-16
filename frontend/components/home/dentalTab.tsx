"use client";

import { ScrollArea, Thumb } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { ScrollBar } from "../ui/scroll-area";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";

export function DentalTab() {
  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <div className="flex mt-10 items-center justify-between ">
        <div className="">
          <h2 className="text-2xl font-semibold tracking-tight">
            Travel to Your Dreams Now
          </h2>
          <p className="text-sm text-muted-foreground ">
            Our top clinics for you. Updated weekly based on performance,
            transperancy and more.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea type="scroll">
          <div className="flex space-x-4 pb-12 overflow-y-hidden flex-0 overflow-x-scroll no-scrollbar">
            {isLoading &&
              Array(10)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-[225px] min-w-[225px] h-[225px] min-h-[225px]"
                  />
                ))}
            {/* {listenNowAlbums.slice(0, 11).map((album: any) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[225px] "
                aspectRatio="portrait"
                //   setLoading={setLoading}
                width={225}
                height={200}
              />
            ))} */}
          </div>
          <Thumb />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">
          They Wanted to Get a Hollywood Smile
        </h2>
        <p className="text-sm text-muted-foreground">
          Because everyone, deserves a great smile.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea type="scroll">
          <div className="flex space-x-4 pb-16 overflow-x-scroll overflow-y-hidden no-scrollbar">
            {isLoading &&
              Array(10)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-[225px] min-w-[225px] h-[225px] min-h-[225px]"
                  />
                ))}
          </div>
          <ScrollBar typeof="scroll" orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="flex mt-4 items-center justify-between ">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Top picks</h2>
          <p className="text-sm text-muted-foreground">Users favorites</p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea type="scroll">
          <div className="flex space-x-4 pb-12 overflow-y-hidden flex-0 overflow-x-scroll no-scrollbar">
            {isLoading &&
              Array(10)
                .fill(0)
                .map((_, index) => (
                  <Skeleton
                    key={index}
                    className="w-[225px] min-w-[225px] h-[225px] min-h-[225px]"
                  />
                ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
