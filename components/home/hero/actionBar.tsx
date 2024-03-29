import { Flex, Text } from "@radix-ui/themes";
import { LocationPicker } from "./locationPicker";
import { DatePicker } from "./datePicker";
import { TravellerPicker } from "./travellerPicker";
import { Button } from "../../ui/button";
import { IoSearch } from "react-icons/io5";

export const ActionBar = () => {
  return (
    <Flex className="border-gray-300 small:border border-none dark:bg-neutral-900 bg-white rounded-3xl small:p-6 p-0 ">
      {/* <MiddleTabs propTabs={tabs} /> */}
      <Flex className="flex flex-col small:flex-row gap-4">
        <LocationPicker />
        <DatePicker />
        <TravellerPicker />
        <Button className="flex h-[50px] small:rounded-3xl  items-center gap-[0.15rem]">
          <IoSearch />
          <Text>GO</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
