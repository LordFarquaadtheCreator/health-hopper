"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../lib/utils";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  UploadIcon,
  BellIcon,
  HamburgerMenuIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { SheetDemo } from "./imageSheet";
import { Logo } from "./logo";
import { ThemeChange } from "./themeChange";
import { Sheet, SheetTrigger } from "./ui/sheet";

export const Navbar = ({ navItems, className }: any) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  // useMotionValueEvent(scrollYProgress, "change", (current) => {
  //   if (typeof current === "number") {
  //     let direction = current! - scrollYProgress.getPrevious()!;

  //     if (scrollYProgress.get() > 0.15) {
  //       setVisible(false);
  //     }
  //     if (direction < 0) {
  //       setVisible(true);
  //     } else {
  //       setVisible(false);
  //     }
  //     console.log("dir", direction);
  //     console.log("current", current);
  //     console.log("prog", scrollYProgress.get());
  //   }
  // });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        // initial={{
        //   opacity: 0,
        //   y: -10,
        // }}
        // animate={{
        //   y: 0,
        //   opacity: 1,
        // }}
        // transition={{
        //   ease: "easeInOut",
        // }}
        // bg-gradient-to-br from-white/20 to-white/5 backdrop-blur     dark:border-white/[0.2]
        className={cn(
          " border dark:bg-neutral-900 rounded-3xl   z-[10] pr-2 pl-8 py-2 ",
          className
        )}
      >
        <div className="flex py-4  flex-row items-center  justify-between  px-6 ">
          <Link href="/" className="flex flex-row items-center gap-[4px] ">
            <Logo width="150" height="150" />
          </Link>

          <div className="flex-row small:flex hidden items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost">
                  <UploadIcon />
                </Button>
              </SheetTrigger>
              <SheetDemo />
            </Sheet>
            <Button variant="ghost">
              <BellIcon className="w-4 h-4" />
            </Button>
            <ThemeChange />
            <Button
              variant={"secondary"}
              className="tracking-tight rounded-full font-light"
            >
              <Link href={"/auth/login"}>Sign in</Link>
            </Button>
          </div>
          <div className="small:hidden flex flex-row gap-2 items-center">
            {/* <Button variant="ghost">
              <PersonIcon className="w-4 h-4" />
            </Button> */}
            <Button variant="outline" className="rounded-full">
              <HamburgerMenuIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
