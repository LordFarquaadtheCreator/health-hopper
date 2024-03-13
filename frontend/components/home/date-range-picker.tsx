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

export function CalendarDateRangePicker({
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
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={"outline"}
          className={cn(
            "flex-1 justify-start text-left font-normal py-6 bg-white border-[#7B7B7B]"
          )}
        >
          <BsCalendarEvent className="-ml-[0.25rem] mr-2 h-6 w-6 shrink-0" />
          <Flex className="flex flex-col ">
            {date?.from && (
              <Text className="text-[0.6rem]  -mt-2  font-light">Dates</Text>
            )}
            {date?.from ? (
              date.to ? (
                <Text className="font-light">
                  {format(date.from, "LLL dd")} - {format(date.to, "LLL dd")}
                </Text>
              ) : (
                <Text className="font-light">
                  {format(date.from, "LLL dd")}
                </Text>
              )
            ) : (
              <Text className="font-light">Dates</Text>
            )}
          </Flex>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="end">
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
    // </div>
  );
}
