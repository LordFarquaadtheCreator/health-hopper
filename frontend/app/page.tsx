import { Metadata } from "next";

import { Button } from "../components/ui/button";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { DatePicker } from "../components/home/datePicker";
import { Flex, Text } from "@radix-ui/themes";
import { LocationPicker } from "@/components/home/locationPicker";
import { TravellerPicker } from "@/components/home/travellerPicker";
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
    <Flex className="bg-white">
      <Flex className="border-gray-300 border rounded-3xl p-6">
        {/* <MiddleTabs propTabs={tabs} /> */}
        <Flex className="flex flex-col sm:flex-row gap-4">
          <LocationPicker />
          <DatePicker />
          <TravellerPicker />
          <Button className="flex h-[50px] rounded-3xl items-center gap-[0.15rem]">
            <IoSearch />
            <Text>GO</Text>
          </Button>
        </Flex>
      </Flex>
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
    </Flex>
  );
}
