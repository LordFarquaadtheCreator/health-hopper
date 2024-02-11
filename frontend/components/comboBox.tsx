"use client";

import * as React from "react";
import {
  CaretSortIcon,
  CheckIcon,
  SewingPinFilledIcon,
} from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
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

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex-1 justify-start text-left font-normal border-[#7B7B7B]"
          )}
        >
          <SewingPinFilledIcon className="-ml-2 mr-[0.25rem] h-4 w-4 shrink-0 " />
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Going to"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0">
        <Command>
          <CommandInput placeholder="Search Places..." className="h-9" />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
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
