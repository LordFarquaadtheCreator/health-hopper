import { cn } from "@/lib/utils";
import { Flex, Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Button } from "../../ui/button";

export const BigImage = ({ img, text }: any) => {
  const imageClass = "border rounded-3xl w-full h-[54vh] object-cover";
  return (
    <Flex className="relative">
      <div className="top-0 p-8 flex flex-col absolute text-left small:w-[50%] w-full">
        <Heading
          style={{ lineHeight: "1" }}
          className="[fontSize:_clamp(3rem,5vw,4rem)] text-left tracking-tight font-bold text-white subpixel-antialiased drop-shadow-[0_1.2px_1.2px_rgba(0,0,50,0.4)] text-pretty"
        >
          Find out the perfect clinic for you with our AI integration!
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
