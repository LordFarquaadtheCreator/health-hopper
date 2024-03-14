"use client";
import { Flex } from "@radix-ui/themes";
import { ActionBar } from "./actionBar";
import { Navbar } from "./navbar";
import Image from "next/image";
import img from "../public/background.jpg";
import darkImg from "../public/dark.jpg";
import { useTheme } from "next-themes";

export const Hero = () => {
  const { theme } = useTheme();
  return (
    <Flex className="m-4 mx-8 flex flex-col gap-6">
      <Navbar className={"bg-white"} />
      <Flex className="relative">
        <Image
          className="border dark:hidden rounded-3xl w-full h-[70vh] object-cover "
          alt=""
          width={3000}
          height={3000}
          src={img}
        />
        <Image
          className="border hidden dark:block rounded-3xl w-full h-[70vh] object-cover "
          alt=""
          width={3000}
          height={3000}
          src={darkImg}
        />

        <div className="bottom-0 p-4 absolute w-full">
          <ActionBar />
        </div>
      </Flex>
    </Flex>
  );
};
