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
import { Logo } from "./logo";

export default function Header() {
  return (
    <div className=" border-b ">
      <div className="flex py-4 flex-row items-center justify-between ml-[auto] mr-[auto] px-6 [maxWidth:_clamp(1200px,70vw,1400px)]">
        <Link href="/" className="flex flex-row items-center gap-[4px] ">
          <Logo width="150" height="150" />
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
    </div>
  );
}
