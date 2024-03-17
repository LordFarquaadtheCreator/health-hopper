"use client";
import { Flex, Grid } from "@radix-ui/themes";
import { Badge } from "@/components/ui/badge";
import { use, useEffect, useState } from "react";
import { clinics } from "@/data/clinics";
import Image from "next/image";
import { PhotoDisplay } from "@/components/clinic/photoDisplay";
import { MiddleTabs } from "@/components/home/middleTabs";
import { MiddleOptions } from "@/components/clinic/middleOptions";
import {
  CheckIcon,
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
import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
export default function Clinic({ params }: { params: { slug: string } }) {
  const [clinic, setClinic] = useState<any>({});
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setClinic(clinics?.filter((e: any, i: any) => params.slug == e.id)[0]);
    setLoading(false);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut" }}
      className="bg-background pt-4 w-[full]  px-3 small:px-8 overflow-hidden"
    >
      {!loading && clinic && (
        <>
          <Navbar className={"bg-white mb-4"} />
          <PhotoDisplay photos={clinic.photos} />
          <Flex className="p-4  border  rounded-b-none border-none w-full overflow-hidden   flex flex-col">
            <MiddleOptions></MiddleOptions>
            <Flex className="flex flex-row  justify-between  w-full flex-wrap">
              <Flex className="flex flex-col pt-8 pb-20">
                {/* <p className="text-xs text-black">{clinic.rating}/5</p> */}
                <Badge className="w-24 mb-2 font-light">VIP Access</Badge>
                <h3 className="font-medium text-4xl leading-none">
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
                    {clinic.rating * 2}.0
                  </Badge>
                  <h3 className=" text-md">Wonderful</h3>
                </Flex>

                <h4 className="text-neutral-600 -ml-2 mt-8 max-w-[600px] text-sm dark:bg-black bg-white border rounded-3xl p-4 dark:text-neutral-300">
                  {clinic.description}
                </h4>
                <Flex className="mt-6">
                  <h3>Guests liked:</h3>
                  <p className="text-xs font-light">
                    Transportation, service, friendly staff
                  </p>
                </Flex>

                <Link
                  className="mt-2"
                  type="outline"
                  href={`/clinic/${clinic.id}`}
                >
                  <Flex className="flex flex-row items-center gap-[0.25rem] hover:border-b w-32 hover:border-blue-500   text-blue-500">
                    <p className="text-xs font-light">
                      See all {clinic.reviewAmount} reviews
                    </p>
                    <IconRight className="w-2 h-2" />
                  </Flex>
                </Link>
                <h3 className="mt-8">Popular Amenities</h3>
                <Flex className="mt-2 flex w-[300px] justify-between flex-wrap gap-6">
                  {clinic.ammenities.map((e: any, id: any) => (
                    <Flex key={id} className="flex-row flex gap-[0.25rem]">
                      <CheckIcon />
                      <p className="text-xs text-[0.70rem]">{e.title}</p>
                    </Flex>
                  ))}
                </Flex>
                <Link
                  className="mt-[0.8rem]"
                  type="outline"
                  href={`/clinic/${clinic.id}`}
                >
                  <Flex className="flex flex-row items-center gap-[0.25rem] hover:border-b w-32 hover:border-blue-500   text-blue-500">
                    <p className="text-xs font-light">See all amenities</p>
                    <IconRight className="w-2 h-2" />
                  </Flex>
                </Link>
              </Flex>
              <Flex className="flex flex-col  pb-20">
                <h3 className="mt-8">Surgery Costs</h3>
                <Flex className="mt-2 flex flex-col flex-wrap gap-6">
                  {Object.entries(clinic.treatments.paidServices).map(
                    ([category, treatments]: [string, any]) =>
                      Object.entries(treatments).map(
                        ([name, details]: [string, any]) => (
                          <Flex
                            key={name}
                            className="flex-row flex gap-[0.25rem]"
                          >
                            <p className="text-xs text-[0.70rem]">
                              {details.price_gbp} GBP - {name}
                            </p>
                          </Flex>
                        )
                      )
                  )}
                </Flex>
                <Link
                  className="mt-[0.8rem]"
                  type="outline"
                  href={`/clinic/${clinic.id}`}
                >
                  <Flex className="flex flex-row items-center gap-[0.25rem] hover:border-b w-32 hover:border-blue-500 text-blue-500">
                    <p className="text-xs font-light">See all prices</p>
                    <IconRight className="w-2 h-2" />
                  </Flex>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </>
      )}
    </motion.div>
  );
}
