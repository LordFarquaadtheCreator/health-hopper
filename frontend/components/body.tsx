import Image from "next/image";
import { clinics } from "../data/clinics";
import { ImagesRow } from "./imagesRow";
import { cn } from "@/lib/utils";
import img from "../public/background.jpg";
import { Flex, Heading } from "@radix-ui/themes";
import { Button } from "./ui/button";

export const Body = () => {
  const imageClass = "border rounded-3xl w-full h-[54vh] object-cover";
  return (
    <div className="p-3 small:p-8 small:pt-4 flex flex-col gap-9 overflow-x-hidden">
      <ImagesRow items={clinics} text={"Explore trips to trending clinics"} />
      <ImagesRow items={clinics} text={"Last-minute deals for the week"} />
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

      <ImagesRow items={clinics} text={"Get instant free quotes"} />
      <ImagesRow items={clinics} text={"Certified VIP travel and booking"} />
    </div>
  );
};
