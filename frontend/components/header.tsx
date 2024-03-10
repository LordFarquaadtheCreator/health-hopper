import {
  BellIcon,
  GlobeIcon,
  SketchLogoIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Flex, Text } from "@radix-ui/themes";
import { ThemeChange } from "./themeChange";
import Link from "next/link";
import Image from "next/image";
import { SheetDemo } from "./imageSheet";
import { Sheet, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <div className="flex p-4 flex-row items-center justify-between [paddingLeft:_clamp(1rem,2vw,5rem)] [paddingRight:_clamp(1rem,2vw,5rem)]  lg:[paddingLeft:_clamp(0.25rem,10vw,10rem)] lg:[paddingRight:_clamp(0.25rem,10vw,10rem)] border-b">
      <Link href="/" className="flex flex-row items-center gap-[4px] ">
        <h1 className="font-light tracking-tighter  subpixel-antialiased     text-2xl">
          HealthHopper
        </h1>
      </Link>

      <div className="flex flex-row items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <UploadIcon />
            </Button>
          </SheetTrigger>
          <SheetDemo />
        </Sheet>
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
