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
import { IoPersonSharp } from "react-icons/io5";
import React from "react";
import { Flex, Text } from "@radix-ui/themes";
import { ActionTrigger } from "./actionTrigger";

export function TravellerPicker() {
  const [open, setOpen] = React.useState(false);
  const [travellers, setTravellers] = React.useState(1);

  function onClick(adjustment: number) {
    setTravellers((prev) => prev + adjustment);
  }

  return (
    <Popover>
      <ActionTrigger>
        <IoPersonSharp className="-ml-2 mr-[0.35rem] h-6 w-6 shrink-0 " />
        <Flex className="flex flex-col">
          <Text className="font-light text-[0.6rem] pt-1 -mt-2">
            Travellers
          </Text>
          <Text className="font-[350]">
            {travellers} {travellers == 1 ? "traveller" : "travellers"}{" "}
          </Text>
        </Flex>
      </ActionTrigger>
      <PopoverContent>
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
                <div className="text-7xl font-bold tracking-tighter ">
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
