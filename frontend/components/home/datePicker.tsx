"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { addDays, format, differenceInCalendarDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { BsCalendarEvent } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Flex, Text } from "@radix-ui/themes";
import { ActionTrigger } from "./actionTrigger";
import { Anchor } from "@radix-ui/react-popover";

export function DatePicker({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: addDays(new Date(), 5),
    to: addDays(new Date(), 9),
  });

  function isPastDate(date: Date) {
    return differenceInCalendarDays(date, new Date()) < 0;
  }

  return (
    // <div className={cn("grid gap-2", className)}>
    <Popover>
      <ActionTrigger>
        <BsCalendarEvent className="-ml-[0.25rem] mr-2 h-6 w-6 shrink-0" />
        <Flex className="flex flex-col ">
          {date?.from && (
            <Text className="text-[0.6rem] pt-1  -mt-2  font-light">Dates</Text>
          )}
          {date?.from ? (
            date.to ? (
              <Text className="font-[350]">
                {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
              </Text>
            ) : (
              <Text className="font-[350]">{format(date.from, "LLL dd")}</Text>
            )
          ) : (
            <Text className="font-light">Dates</Text>
          )}
        </Flex>
      </ActionTrigger>
      {/* <Anchor
        className="absolute bg-red-500 top-0 left-0 z-[50000]"
        asChild={true}
      > */}
      <PopoverContent
        className="small:w-auto small:h-auto w-[100vw]   p-0"
        align="center"
      >
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          fromMonth={new Date()}
          disabled={(date) => isPastDate(date)}
        />
      </PopoverContent>
      {/* </Anchor> */}
    </Popover>
    // </div>
  );
}
