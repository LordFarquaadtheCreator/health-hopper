"use client";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Flex } from "@radix-ui/themes";
import { useState } from "react";

export function MiddleTabs({ propTabs }: any) {
  const [active, setActive] = useState<any>(propTabs[0]);
  const [tabs, setTabs] = useState<any>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <Flex className="p-[0.75rem] border-[1px] border-gray-300  rounded-b-none border-b-0 rounded-3xl flex justify-center">
      <Tabs
        className="bg-none w-full flex flex-row justify-center"
        defaultValue="dental"
      >
        <TabsList className="bg-transparent no-visible-scrollbar  overflow-x-scroll flex flex-row gap-4 font-medium text-sm">
          {propTabs.map((e: any, idx: any) => (
            <TabsTrigger
              key={e.value}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
              value={e.value}
            >
              {e.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </Flex>
  );
}
