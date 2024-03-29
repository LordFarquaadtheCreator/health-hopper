"use client";

import * as React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { IoLocationSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Popover, PopoverContent } from "@/components/ui/popover";
import { Flex, Text } from "@radix-ui/themes";
import { ActionTrigger } from "./actionTrigger";

const locations = [
  {
    value: "turkey",
    label: "Turkey",
  },
  {
    value: "antayla, turkey",
    label: "Antayla, Turkey",
  },
  {
    value: "instanbul, turkey",
    label: "Instanbul, Turkey",
  },
  {
    value: "montreal, canada",
    label: "Montreal, Canada",
  },
];

export function LocationPicker() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("turkey");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <ActionTrigger>
        <IoLocationSharp className="-ml-2 mr-[0.25rem] h-6 w-6 shrink-0" />
        <Flex className="flex flex-col ">
          {value && (
            <Text className="text-[0.6rem] pt-1 -mt-2 font-light">
              Search location
            </Text>
          )}
          <Text className="font-[350]">
            {value
              ? locations.find((location) => location.value === value)?.label
              : "Search location"}
          </Text>
        </Flex>
      </ActionTrigger>
      <PopoverContent className="">
        <Command>
          <CommandInput placeholder="Search Places..." className="h-9" />
          <CommandEmpty>No location found.</CommandEmpty>
          <CommandGroup>
            {locations.map((location) => (
              <CommandItem
                key={location.value}
                value={location.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {location.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === location.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
