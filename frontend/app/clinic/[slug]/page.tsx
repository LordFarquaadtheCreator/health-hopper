"use client";
import { Flex, Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
import { PhotoDisplay } from "@/components/clinic/photoDisplay";
import { MiddleTabs } from "@/components/home/middleTabs";
export default function Clinic({ params }: { params: { slug: string } }) {
  const [photos, setPhotos] = useState<any>([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(`/api/photo?place_id=${params.slug}`);
      const data = await res.json();
      console.log(data.data.result.photos);

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API; // Replace with your actual API key

      setPhotos([
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&maxheight=500&photoreference=${data.data.result.photos[0].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&maxheight=300&photoreference=${data.data.result.photos[1].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&maxheight=300&photoreference=${data.data.result.photos[2].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&maxheight=300&photoreference=${data.data.result.photos[3].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&maxheight=300&photoreference=${data.data.result.photos[5].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&maxheight=300&photoreference=${data.data.result.photos[6].photo_reference}&key=${apiKey}`,
      ]);
    };

    if (!params.slug) {
      return;
    }
    fetchPhotos();
  }, [params.slug]);
  return (
    <div className="bg-background mt-14 px-20">
      <PhotoDisplay photos={photos} />
      <MiddleTabs />
    </div>
  );
}
