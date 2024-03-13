import { Metadata } from "next";

import { Button } from "../components/ui/button";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { CalendarDateRangePicker } from "../components/home/date-range-picker";
import { Flex, Text } from "@radix-ui/themes";
import { ComboboxDemo } from "@/components/home/comboBox";
import { PopoverDemo } from "@/components/home/travellers";
import { MiddleTabs } from "@/components/home/middleTabs";
import { DentalTab } from "@/components/home/dentalTab";
import { IoSearch } from "react-icons/io5";

export const metadata: Metadata = {
  title: "HealthHopper",
  description: "Simplify medical tourism.",
};

export default function MusicPage() {
  const tabs = [
    {
      title: "Dental",
      value: "dental",
    },
    {
      title: "Surgery",
      value: "surgery",
    },
    {
      title: "Cancer",
      value: "cancer",
    },
    {
      title: "Orthopedic",
      value: "orthopedic",
    },
    {
      title: "Transplant",
      value: "transplant",
    },
  ];
  return (
    <>
      <ComboboxDemo />
      {/* <Flex className="flex flex-col bg-background mt-44 border-gray-300 border rounded-3xl p-6"> */}
      {/* <MiddleTabs propTabs={tabs} /> */}
      {/* <Flex className="flex flex-col sm:flex-row gap-4"> */}
      <ComboboxDemo />
      <CalendarDateRangePicker />
      <PopoverDemo />
      <Button className="flex h-[50px] rounded-3xl items-center gap-[0.15rem]">
        <IoSearch />
        <Text>GO</Text>
      </Button>
      {/* </Flex> */}
      {/* <div className="col-span-3 lg:col-span-4 ">
      <div className="h-full py-6 ">
        <Tabs defaultValue="dental" className="h-full space-y-6">
          <TabsContent
            value="dental"
            className="border-none p-0 outline-none"
          >
            <DentalTab />
          </TabsContent>
        </Tabs>
      </div>
    </div> */}
      {/* </Flex> */}
    </>
  );
}
