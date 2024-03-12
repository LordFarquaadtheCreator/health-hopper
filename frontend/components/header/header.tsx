import {
  BellIcon,
  GlobeIcon,
  SketchLogoIcon,
  UploadIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Flex, Text } from "@radix-ui/themes";
import { ThemeChange } from "../themeChange";
import Link from "next/link";
import Image from "next/image";
import { SheetDemo } from "../imageSheet";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { Logo } from "../logo";
import { Navbar } from "./navbar";

export default function Header() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Logo width="150" height="150" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <UploadIcon />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <BellIcon className="w-4 h-4" />,
    },
  ];
  return (
    <div className="relative ">
      <Navbar navItems={navItems} />
    </div>
  );
}
