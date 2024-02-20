"use client";
import { Flex, Grid } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Image from "next/image";
function Clinic({ params }: { params: { slug: string } }) {
  const [photos, setPhotos] = useState<any>([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(`/api/photo?place_id=${params.slug}`);
      const data = await res.json();
      console.log(data.data.result.photos);

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API; // Replace with your actual API key

      setPhotos([
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.data.result.photos[0].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.data.result.photos[1].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.data.result.photos[2].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.data.result.photos[3].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.data.result.photos[5].photo_reference}&key=${apiKey}`,
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${data.data.result.photos[6].photo_reference}&key=${apiKey}`,
      ]);
    };

    if (!params.slug) {
      return;
    }
    fetchPhotos();
  }, [params.slug]);
  return (
    <div className="bg-background mt-14 px-20">
      <Flex className=" justify flex flex-row flex-1 gap-[0.25rem] rounded-lg border p-2 ">
        <Image
          width={500}
          height={300}
          priority={true}
          className="aspect-[4/3] object-cover"
          alt=""
          src={photos[0]}
        ></Image>
        <Flex className="flex flex-col gap-[0.25rem]">
          <Image
            width={200}
            height={100}
            priority={true}
            alt=""
            className="flex-1 aspect-[4/3] object-cover"
            src={photos[1]}
          ></Image>
          <Image
            width={200}
            height={100}
            priority={true}
            alt=""
            className="flex-1 aspect-[4/3] object-cover"
            src={photos[2]}
          ></Image>
        </Flex>
        <Flex className="flex flex-col gap-[0.25rem]">
          <Image
            width={200}
            height={100}
            priority={true}
            alt=""
            className="flex-1 aspect-[4/3] object-cover"
            src={photos[3]}
          ></Image>
          <Image
            width={200}
            height={100}
            priority={true}
            alt=""
            className="flex-1 aspect-[4/3] object-cover"
            src={photos[4]}
          ></Image>
        </Flex>
        <Image
          width={200}
          height={100}
          priority={true}
          alt=""
          className="flex-1"
          src={photos[5]}
        ></Image>
      </Flex>
    </div>
  );
}

export {
  Clinic  //duplicate function names, can be confusing for scalabillity purposes, suggest changing up the names of the functions you are working with
}