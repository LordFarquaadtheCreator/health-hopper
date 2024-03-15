import { cn } from "@/lib/utils";
import { PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

export const ActionTrigger = ({ children, className }: any) => {
  return (
    <PopoverTrigger asChild>
      <Button
        id="date"
        variant={"outline"}
        className={cn(
          "flex-1 justify-start text-left font-normal small:py-6 py-3 dark:bg-neutral-900 bg-white border-[#7B7B7B]"
        )}
      >
        {children}
      </Button>
    </PopoverTrigger>
  );
};
