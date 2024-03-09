"use client";
import { Flex, Grid } from "@radix-ui/themes";
import { Badge } from "@/components/ui/badge";
import { use, useEffect, useState } from "react";
import { listenNowAlbums } from "@/data/albums";
import Image from "next/image";
import { PhotoDisplay } from "@/components/clinic/photoDisplay";
import { MiddleTabs } from "@/components/home/middleTabs";
import { MiddleOptions } from "@/components/clinic/middleOptions";
import {
  CookieIcon,
  HeartFilledIcon,
  HeartIcon,
  PaperPlaneIcon,
  PersonIcon,
  StarFilledIcon,
  StarIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { IconRight } from "react-day-picker";
import { Button } from "@/components/ui/button";
export default function Clinic({ params }: { params: { slug: string } }) {
  const [photos, setPhotos] = useState<any>([]);
  const [clinic, setClinic] = useState<any>({});
  const [score, setScore] = useState(0);
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

    const fetchReviews = async () => {
      const res = await fetch(`/api/reviews?place_id=${params.slug}`);
      const data = await res.json();
      setScore(data.data);
    };

    if (!params.slug) {
      return;
    }
    fetchPhotos();
    const found = listenNowAlbums.find((element: any) => {
      return element.place_id === params.slug;
    });
    setClinic(found);
    fetchReviews();
    setLoading(false);
  }, [params.slug]);
  console.log(clinic);

  return (
    <div className="bg-background mt-14 px-20">
      {!loading && (
        <>
          <PhotoDisplay photos={photos} />
          <MiddleOptions>
            <Flex className="flex flex-col pt-8 pb-20">
              {/* <p className="text-xs text-black">{clinic.rating}/5</p> */}
              <Badge className="w-24 mb-2 font-light">VIP Access</Badge>
              <h3 className="font-medium text-3xl leading-none">
                {clinic.name.slice(0, 20)}
              </h3>
              {/* <p className="text-xs text-black">{clinic.rating}/5</p> */}
              <Flex className="flex flex-row mt-[0.25rem]">
                {[...Array(Math.floor(clinic.rating))].map((_, index) => (
                  <StarFilledIcon
                    key={index}
                    className="w-5 h-5 text-gray-800"
                  />
                ))}
                {[...Array(Math.ceil(5 - clinic.rating))].map((_, index) => (
                  <StarIcon key={index} className="w-5 h-5 text-gray-800" />
                ))}
              </Flex>
              <Flex className="mt-4 flex flex-row gap-2 font-normal  ">
                <Badge className="bg-green-700 font-medium w-10">
                  {(Math.round((score - 0.6) * 100) / 100) * 2}
                </Badge>
                <h3 className=" text-md">Wonderful</h3>
              </Flex>
              <Flex className="mt-6">
                <h3>Guests liked:</h3>
                <p className="text-xs font-light">
                  Transportation, service, friendly staff
                </p>
              </Flex>

              <Link
                className="mt-2"
                type="outline"
                href={`/clinic/${clinic.place_id}`}
              >
                <Flex className="flex flex-row items-center gap-[0.25rem] hover:border-b w-32 hover:border-blue-500   text-blue-500">
                  <p className="text-xs font-light">
                    See all {clinic.user_ratings_total} reviews
                  </p>
                  <IconRight className="w-2 h-2" />
                </Flex>
              </Link>
              <h3 className="mt-8">Popular Amenities</h3>
              <Flex className="mt-2 flex w-[300px] justify-between  flex-wrap gap-6">
                <Flex className="flex-row flex gap-[0.25rem]">
                  <CookieIcon />
                  <p className="text-xs text-[0.70rem]">Food Included</p>
                </Flex>
                <Flex className="flex-row flex gap-[0.25rem]">
                  <PaperPlaneIcon />
                  <p className="text-xs text-[0.70rem]">Travel Bound</p>
                </Flex>
                <Flex className="flex-row flex gap-[0.25rem]">
                  <HeartIcon />
                  <p className="text-xs text-[0.70rem]">Recovery Location</p>
                </Flex>
                <Flex className="flex-row flex gap-[0.25rem]">
                  <PersonIcon />
                  <p className="text-xs text-[0.70rem]">Free Checkup</p>
                </Flex>
              </Flex>
              <Link
                className="mt-[0.8rem]"
                type="outline"
                href={`/clinic/${clinic.place_id}`}
              >
                <Flex className="flex flex-row items-center gap-[0.25rem] hover:border-b w-32 hover:border-blue-500   text-blue-500">
                  <p className="text-xs font-light">See all amenities</p>
                  <IconRight className="w-2 h-2" />
                </Flex>
              </Link>
              <h3 className="mt-8">Surgery Costs</h3>
              <Flex className="mt-2 flex w-[300px] justify-between  flex-wrap gap-6">
                <Flex className="flex-row flex gap-[0.25rem]">
                  <p className="text-xs text-[0.70rem]">$0 - Consultation</p>
                </Flex>
                <Flex className="flex-row flex gap-[0.25rem]">
                  <p className="text-xs text-[0.70rem]">$215 - E-max</p>
                </Flex>
                <Flex className="flex-row flex gap-[0.25rem]">
                  <p className="text-xs text-[0.70rem]">
                    $425 - Dental Implant
                  </p>
                </Flex>
                <Flex className="flex-row flex gap-[0.25rem]">
                  <p className="text-xs text-[0.70rem]">$170 - Crown</p>
                </Flex>
              </Flex>
              <Link
                className="mt-[0.8rem]"
                type="outline"
                href={`/clinic/${clinic.place_id}`}
              >
                <Flex className="flex flex-row items-center gap-[0.25rem] hover:border-b w-32 hover:border-blue-500   text-blue-500">
                  <p className="text-xs font-light">See all prices</p>
                  <IconRight className="w-2 h-2" />
                </Flex>
              </Link>
            </Flex>
          </MiddleOptions>
        </>
      )}
    </div>
  );
}
