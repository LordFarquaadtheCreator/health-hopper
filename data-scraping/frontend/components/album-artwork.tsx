"use client";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ui/context-menu";

// import { Album } from "../data/albums";
import { playlists } from "../data/playlists";
import { useEffect, useState } from "react";

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: any) {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    async function fetchPhoto() {
      if (album.photos && album.photos.length > 0) {
        const photoReference = album.photos[0].photo_reference;
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API; // Replace with your actual API key
        const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${photoReference}&key=${apiKey}`;
        setPhotoUrl(photoUrl);
      }
    }

    fetchPhoto();
  }, [album.photos]);

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={
            photoUrl ||
            "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"
          }
          alt={album.name}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[4/3]" : "aspect-square"
          )}
        />
      </div>

      <div className="space-y-1 text-sm ">
        <p className="text-xs text-black">{album.rating}/5</p>
        <h3 className="font-medium pt-[0.25rem] leading-none">{album.name}</h3>
        <p className="text-xs  text-muted-foreground">
          {album.formatted_address}
        </p>

        <h3 className="font-medium text-lg pt-2 leading-none">
          Our Score: 8.2/10
        </h3>
        {/* <p className="text-xs  text-black">Crown Service</p> */}
      </div>
    </div>
  );
}
