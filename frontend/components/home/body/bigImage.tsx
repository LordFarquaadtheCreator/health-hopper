import { cn } from "@/lib/utils";
import { Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "../../ui/button";

export const BigImage = ({ img, text }: any) => {
  const imageClass = "border rounded-3xl w-full h-[48vh] object-cover";
  return (
    <Flex className="relative">
      <div className="top-0 p-8 flex flex-col absolute text-left small:w-[65%] w-full">
        <Heading
          style={{ lineHeight: "0.9" }}
          className="[fontSize:_clamp(2.5rem,5vw,3.5rem)]  text-left tracking-tight font-bold text-white subpixel-antialiased drop-shadow-[0_1.2px_1.2px_rgba(0,0,50,0.4)] text-balance"
        >
          {text}
        </Heading>
        <Button className="mt-4 p-6 w-[200px] text-md">Try it out now</Button>
      </div>
      <Image
        className={cn(imageClass)}
        alt=""
        width={3000}
        height={3000}
        src={img}
      />
    </Flex>
  );
};
