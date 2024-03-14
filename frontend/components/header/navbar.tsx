"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { UploadIcon, BellIcon } from "@radix-ui/react-icons";
import { SheetDemo } from "../imageSheet";
import { Logo } from "../logo";
import { ThemeChange } from "../themeChange";
import { Sheet, SheetTrigger } from "../ui/sheet";

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
        //   opacity: 1,
        //   y: -200,
        // }}
        // animate={{
        //   y: visible ? 0 : -100,
        //   opacity: visible ? 1 : 0,
        // }}
        // transition={{
        //   duration: 0.2,
        // }}
        className={cn(
          " border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur     dark:border-white/[0.2] rounded-3xl  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[10] pr-2 pl-8 py-2 ",
          className
        )}
      >
        <div className="flex py-4  flex-row items-center  justify-between  px-6 ">
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
            <Button variant="outline">
              <BellIcon className="w-4 h-4" />
            </Button>
            <ThemeChange />
            <Button variant={"outline"} className="tracking-tight  font-medium">
              <Link href={"/auth/login"}>Sign in</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
