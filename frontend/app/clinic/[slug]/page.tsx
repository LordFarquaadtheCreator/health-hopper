"use client";
import { Flex, Grid } from "@radix-ui/themes";
import { Badge } from "@/components/ui/badge";
import { use, useEffect, useState } from "react";
import { listenNowAlbums } from "@/data/albums";
import Image from "next/image";
import { PhotoDisplay } from "@/components/clinic/photoDisplay";
import { MiddleTabs } from "@/components/home/middleTabs";
import { MiddleOptions } from "@/components/clinic/middleOptions";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";
export default function Clinic({ params }: { params: { slug: string } }) {
  const [photos, setPhotos] = useState<any>([]);
  const [clinic, setClinic] = useState<any>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchPhotos = async () => {
      const res = await fetch(`/api/photo?place_id=${params.slug}`);
      const data = await res.json();

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
    const found = listenNowAlbums.find((element: any) => {
      return element.place_id === params.slug;
    });
    setClinic(found);
    setLoading(false);
  }, [params.slug]);

  return (
    <div className="bg-background mt-14 px-20">
      {!loading && (
        <>
          <PhotoDisplay photos={photos} />
          <MiddleOptions>
            <Flex className="flex flex-col pt-8">
              {/* <p className="text-xs text-black">{clinic.rating}/5</p> */}
              <Badge className="w-24 mb-[0.25rem]">VIP Access</Badge>
              <h3 className="font-medium text-3xl leading-none">
                {clinic.name.slice(0, 20)}
              </h3>
              {/* <p className="text-xs text-black">{clinic.rating}/5</p> */}
              <Flex className="flex flex-row mt-[0.25rem]">
                {[...Array(Math.floor(clinic.rating))].map((_, index) => (
                  <StarFilledIcon
                    key={index}
                    className="w-5 h-5 text-yellow-300"
                  />
                ))}
                {[...Array(Math.ceil(5 - clinic.rating))].map((_, index) => (
                  <StarIcon key={index} className="w-5 h-5 text-yellow-300" />
                ))}
              </Flex>
            </Flex>
          </MiddleOptions>
        </>
      )}
    </div>
  );
}
