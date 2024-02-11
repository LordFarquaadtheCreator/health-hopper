"use client";
import { listenNowAlbums } from "@/data/albums";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { AlbumArtwork } from "./album-artwork";
import { ScrollBar } from "./ui/scroll-area";
import { useState, useEffect } from "react";
import { Skeleton } from "./ui/skeleton";

export function DentalTab() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a fetch call
    setTimeout(() => setLoading(false), 1500); // Remove this line when implementing actual data fetching
    // Fetch your data here and set loading to false when done
    // fetch different images when loadign
  }, []);

  return (
    <>
      <div className="flex mt-10 items-center justify-between ">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Travel Now</h2>
          <p className="text-sm text-muted-foreground">
            Top picks for you. Updated daily.
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea type="scroll">
          <div className="flex space-x-4 pb-12 overflow-y-hidden flex-0 overflow-x-scroll no-scrollbar">
            {/* {isLoading
              ? Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      className="w-[225px] min-w-[225px] h-[225px] min-h-[225px]"
                    />
                  )) */}
            {/* :  */}
            {listenNowAlbums.slice(0, 11).map((album: any) => (
              <AlbumArtwork
                key={album.name}
                album={album}
                className="w-[225px] "
                aspectRatio="portrait"
                //   setLoading={setLoading}
                width={225}
                height={200}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="mt-6 space-y-1">
        <h2 className="text-2xl font-semibold tracking-tight">Just for You</h2>
        <p className="text-sm text-muted-foreground">
          Medical options that can fit your needs.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea type="scroll">
          <div className="flex space-x-4 pb-12 overflow-x-scroll overflow-y-hidden no-scrollbar">
            {isLoading
              ? Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <Skeleton
                      key={index}
                      className="w-[225px] min-w-[225px] h-[225px] min-h-[225px]"
                    />
                  ))
              : listenNowAlbums
                  .slice(16, 24)
                  .map((album: any) => (
                    <AlbumArtwork
                      key={album.name}
                      album={album}
                      className="w-[150px] "
                      aspectRatio="square"
                      width={150}
                      small={true}
                      height={150}
                    />
                  ))}
          </div>
          <ScrollBar typeof="scroll" orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
