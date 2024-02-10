import { BellIcon, GlobeIcon, SketchLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Flex, Text } from "@radix-ui/themes";
import { ThemeChange } from "./themeChange";
import Link from "next/link";
import img from "../public/DALL_E-2024-02-10-00.31-removebg-preview.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex p-4 flex-row items-center justify-between px-10 border-b">
      <Link href="" className="flex flex-row items-center gap-[4px] ">
        {/* <SketchLogoIcon className="w-[2.0rem] h-[2.0rem] text-[#3B9EFF] bg-slate-100 p-[0.3rem] rounded-lg" /> */}
        {/* <Image
          alt=""
          width={50}
          className="w-[100px] absolute left-16"
          src={img}
        /> */}
        <h1 className="font-light tracking-tighter  subpixel-antialiased     text-2xl">
          HealthHopper
          {/* </em> */}
        </h1>
      </Link>
      <div className="flex flex-row items-center gap-2">
        <Button variant="ghost">
          <BellIcon className="w-4 h-4" />
        </Button>
        <ThemeChange />
        <Button variant={"link"} className="tracking-tight font-medium">
          <Link href={"/auth/login"}>Sign in</Link>
        </Button>
      </div>
    </div>
  );
}
