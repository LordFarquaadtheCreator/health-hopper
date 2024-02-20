"use client";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Flex } from "@radix-ui/themes";

function MiddleTabs() {
  return (
    <Flex className="p-4 border-[1px] border-gray-300  rounded-b-none border-b-0 rounded-lg flex justify-center">
      <Tabs className="bg-none" defaultValue="Dental">
        <TabsList className="shrink-0 bg-transparent flex flex-row gap-4">
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Dental"
          >
            Dental
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Surgery"
          >
            Surgery
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Cancer"
          >
            Cancer
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Orthopedics"
          >
            Orthopedics
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:text-black data-[state=active]:dark:text-white rounded-none   data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0px] data-[state=active]:border-b border-black dark:border-white  outline-none cursor-pointer"
            value="Transplant"
          >
            Transplant
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </Flex>
  );
}

export { MiddleTabs }
