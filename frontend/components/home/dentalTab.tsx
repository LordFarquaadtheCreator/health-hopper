"use client";
import { listenNowAlbums } from "@/data/albums";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { AlbumArtwork } from "./album-artwork";
import { ScrollBar } from "../ui/scroll-area";
import { useState, useEffect } from "react";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

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
          <h2 className="text-2xl font-semibold tracking-tight">Travel to Your Dreams Now</h2>
          <p className="text-sm text-muted-foreground">
            Our top clinics for you. Updated weekly based on performance, transperancy and more.
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
                  ))
              : */}
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
        <h2 className="text-2xl font-semibold tracking-tight">They Wanted to Get a Hollywood Smile</h2>
        <p className="text-sm text-muted-foreground">
          Because everyone, deserves a great smile.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="relative">
        <ScrollArea type="scroll">
          <div className="flex space-x-4 pb-16 overflow-x-scroll overflow-y-hidden no-scrollbar">
            {isLoading ? Array(10).fill(0).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="w-[225px] min-w-[225px] h-[225px] min-h-[225px]"
                    />
                  ))
              : (
                <>
                <Image
                  src="https://miro.medium.com/v2/resize:fit:1128/format:webp/0*lE67FyAw-jsRmMI3.jpg"
                  alt=""
                  width={150}
                  height={150}
                  className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />
                  <Image
                    src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/03/24/1161f794-6cee-11ea-b0ed-5e14cf8eb9e1_972x_165549.PNG"
                    alt=""
                    width={150}
                    height={150}
                    className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />
                  <Image
                     src="https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/03/24/8b3a7998-6ced-11ea-b0ed-5e14cf8eb9e1_972x_165549.PNG"
                      alt=""
                      width={150}
                      height={150}
                      className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />
                      
                  <Image
                      src="https://yalindentalclinic.com/wp-content/uploads/2023/10/Cristiano-Ronaldos-Teeth-Evolution.webp"
                      alt=""
                      width={150}
                      height={150}
                      className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />
                  <Image
                      src="https://dentx.international/wp-content/uploads/2024/01/morgan-freeman-840x473.webp"
                      alt=""
                      width={150}
                      height={150}
                      className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />
                    <Image
                      src=" https://dentx.international/wp-content/uploads/2024/01/George-Clooney-teeth-before-and-after.webp"
                      alt=""
                      width={150}
                      height={150}
                      className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />

                      <Image
                      src="https://dentx.international/wp-content/uploads/2024/01/emma-watson-teeth-implant-veneer.webp"
                      alt=""
                      width={150}
                      height={150}
                      className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />

                      <Image
                      src="https://dentx.international/wp-content/uploads/2024/01/miley-before-and-after-teeth-650x441.webp"
                      alt=""
                      width={150}
                      height={150}
                      className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />

                      <Image
                      src="https://dentx.international/wp-content/uploads/2024/01/Ed-Helms-teeth-veneer-implant.webp"
                      alt=""
                      width={150}
                      height={150}
                      className="w-[150px] min-w-[150px] h-[150px] min-h-[150px] aspect-square object-cover rounded-md" />
                    </>
                    
              )}
          </div>
          <ScrollBar typeof="scroll" orientation="horizontal" />
        </ScrollArea>
      </div>
    </>
  );
}
