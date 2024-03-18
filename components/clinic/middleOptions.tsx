"use client";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Flex, TabsContent } from "@radix-ui/themes";

export function MiddleOptions({ children }: any) {
  return (
    <Flex className=" ">
      <Tabs className="bg-none" defaultValue="Overview">
        <TabsList className="shrink-0 bg-transparent flex flex-row gap-4 overflow-hidden">
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Overview"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Amenities"
          >
            Amenities
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Options"
          >
            Options
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Accessibility"
          >
            Accessibility
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Polices"
          >
            Polices
          </TabsTrigger>
        </TabsList>
        {/* <TabsContent>
          {children}
        </TabsContent> */}
      </Tabs>
    </Flex>
  );
}
