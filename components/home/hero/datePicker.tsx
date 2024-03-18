"use client";

import * as React from "react";
import { addDays, format, differenceInCalendarDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { BsCalendarEvent } from "react-icons/bs";
import { Calendar } from "../../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { Flex, Text } from "@radix-ui/themes";
import { ActionTrigger } from "./actionTrigger";

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
    </Popover>
  );
}
