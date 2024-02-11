import { Metadata } from "next";
import Image from "next/image";
import { PlusCircledIcon } from "@radix-ui/react-icons";

import { Button } from "../components/ui/button";
import { ScrollArea, ScrollBar } from "../components/ui/scroll-area";
import { Separator } from "../components/ui/separator";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

import { AlbumArtwork } from "../components/album-artwork";
import { Menu } from "../components/menu";
import { PodcastEmptyPlaceholder } from "../components/podcast-empty-placeholder";
import { Sidebar } from "../components/sidebar";
import { listenNowAlbums } from "../data/albums";
import { playlists } from "../data/playlists";
import { CalendarDateRangePicker } from "../components/date-range-picker";
import Link from "next/link";
import Header from "@/components/header";
import { Flex } from "@radix-ui/themes";
import { ComboboxDemo } from "@/components/comboBox";
import { PopoverDemo } from "@/components/travellers";
import { MiddleTabs } from "@/components/middleTabs";
import { DentalTab } from "@/components/dentalTab";

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
