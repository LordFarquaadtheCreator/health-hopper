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
} from "../ui/context-menu";

// import { Album } from "../data/albums";
import { clinics } from "@/data/clinics";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Skeleton } from "@radix-ui/themes";

export function AlbumArtwork({
  album,
  aspectRatio = "portrait",
  width,
  height,
  className,
  setLoading,
  small,
  ...props
}: any) {
  const [photoUrl, setPhotoUrl] = useState("");
  const [isImageLoaded, setImageLoaded] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchPhoto() {
      if (album.photos && album.photos.length > 0) {
        const res = await fetch(`/api/photo?place_id=${album.place_id}`);
        const data = await res.json();
        console.log(data);
        const random = Math.floor(
          Math.random() * data.data.result.photos.length
        );

        const photoReference = data.data.result.photos[random].photo_reference;

        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API;
        const maxWidth = 300;
        const maxHeight = 300;
        // Replace with your actual API key
        const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxWidth}&maxheight=${maxHeight}&photoreference=${photoReference}&key=${apiKey}`;

        setPhotoUrl(photoUrl);
      }
    }

    const fetchReviews = async () => {
      const res = await fetch(`/api/reviews?place_id=${album.place_id}`);
      const data = await res.json();
      setScore(data.data);
    };

    fetchReviews();
    fetchPhoto();
  }, [album.photos]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Link href={`/clinic/${album.place_id}`}>
      <div className={cn("space-y-3", className)} {...props}>
        <div className="overflow-hidden rounded-md">
          {photoUrl ? (
            <Image
              // priority={true}
              // loading="eager"
              // loading="eager"
              src={
                photoUrl ||
                "https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80"
              }
              alt={album.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[4/3]" : "aspect-square",
                `min-w-[${width}px] min-h-[${height}px]`
              )}
            />
          ) : (
            <Skeleton
              // key={index}
              className="w-[225px] min-w-[225px] h-[225px] min-h-[225px]"
            />
          )}
        </div>

        <div className="space-y-1 text-sm ">
          <p className="text-xs text-black">{album.rating}/5</p>
          <h3 className="font-medium pt-[0.25rem] leading-none">
            {album.name.slice(0, 20)}
          </h3>
          {!small && (
            <p className="text-xs text-balance text-muted-foreground">
              {album.formatted_address}
            </p>
          )}
          {!small && (
            <h3 className="font-medium text-lg pt-2 leading-none">
              Our Score: {(Math.round((score - 0.6) * 100) / 100) * 2}
              /10
            </h3>
          )}
          {/* <p className="text-xs  text-black">Crown Service</p> */}
        </div>
      </div>
    </Link>
  );
}
