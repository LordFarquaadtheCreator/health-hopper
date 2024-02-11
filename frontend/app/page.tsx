import { Metadata } from "next";

import { Button } from "../components/ui/button";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { CalendarDateRangePicker } from "../components/home/date-range-picker";
import { Flex } from "@radix-ui/themes";
import { ComboboxDemo } from "@/components/home/comboBox";
import { PopoverDemo } from "@/components/home/travellers";
import { MiddleTabs } from "@/components/home/middleTabs";
import { DentalTab } from "@/components/home/dentalTab";

export const metadata: Metadata = {
  title: "HealthHopper",
  description: "Simplify medical tourism.",
};

export default function MusicPage() {
  return (
    <>
      <div className="">
        <Flex className="bg-background mt-14 px-20">
          <Flex>
            <MiddleTabs />
            <Flex className="flex flex-row pb-10 p-6 gap-4 border-gray-300 rounded-t-none border-[1px] rounded-lg ">
              <ComboboxDemo />
              <CalendarDateRangePicker />
              <PopoverDemo />
              <Button className="flex items-center gap-2">Search</Button>
            </Flex>
          </Flex>

          <div className="col-span-3 lg:col-span-4 ">
            <div className="h-full py-6 ">
              <Tabs defaultValue="music" className="h-full space-y-6">
                <TabsContent
                  value="music"
                  className="border-none p-0 outline-none"
                >
                  <DentalTab />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </Flex>
      </div>
    </>
  );
}
