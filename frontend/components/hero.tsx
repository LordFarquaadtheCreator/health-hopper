"use client";
import { Flex, Heading } from "@radix-ui/themes";
import { ActionBar } from "./actionBar";
import { Navbar } from "./navbar";
import Image from "next/image";
import img from "../public/background.jpg";
import darkImg from "../public/dark.jpg";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const { theme } = useTheme();
  const imageClass = "border rounded-3xl w-full h-[70vh] hidden object-cover";
  return (
    <Flex className="m-4 mx-3 small:mx-8 overflow-hidden flex flex-col gap-6">
      <Navbar className={"bg-white"} />
      <Flex className="relative">
        <div className="top-0 p-4 hidden small:block absolute w-full">
          <Heading
            style={{ lineHeight: "1" }}
            className="text-bigClamp small:text-start text-center tracking-tight font-bold text-[rgb(250,250,250)] subpixel-antialiased drop-shadow-[0_1.2px_1.2px_rgba(0,0,50,0.4)] text-pretty"
          >
            MEDICAL TOURISM MADE SIMPLE.
          </Heading>
        </div>
        <Image
          className={cn(imageClass, "dark:hidden small:block")}
          alt=""
          width={3000}
          height={3000}
          src={img}
        />
        <Image
          className={cn(imageClass, "hidden dark:small:block")}
          alt=""
          width={3000}
          height={3000}
          src={darkImg}
        />

        <div className="bottom-0 small:p-4 p-2 small:absolute block w-full">
          <ActionBar />
        </div>
      </Flex>
    </Flex>
  );
};
