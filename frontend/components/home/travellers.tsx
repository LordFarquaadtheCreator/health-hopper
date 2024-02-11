"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  MinusIcon,
  PersonIcon,
  PlusIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";
import React from "react";

export function PopoverDemo() {
  const [open, setOpen] = React.useState(false);
  const [travellers, setTravellers] = React.useState(1);

  function onClick(adjustment: number) {
    setTravellers((prev) => prev + adjustment);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex-1 justify-start text-left font-normal border-[#7B7B7B]"
          )}
        >
          <PersonIcon className="-ml-2 mr-[0.25rem] h-4 w-4 shrink-0 " />
          Travellers, {travellers}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Travellers</h4>
            <p className="text-sm text-muted-foreground">
              Amount of people travelling.
            </p>
          </div>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-1)}
                disabled={travellers <= 1}
              >
                <MinusIcon className="h-4 w-4" />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {travellers}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(1)}
                disabled={travellers >= 5}
              >
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
          </div>
          {/* <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div> */}
        </div>
      </PopoverContent>
    </Popover>
  );
}
