import { Flex } from "@radix-ui/themes";
import Image from "next/image";
export function PhotoDisplay({ photos }: any) {
  return (
    <Flex className=" justify flex flex-row flex-1 gap-[0.15rem] rounded-lg border p-2 ">
      <Image
        width={500}
        height={300}
        loading="eager"
        className="aspect-[4/3] object-cover"
        alt=""
        src={photos[0]}
      ></Image>
      <Flex className="flex flex-col gap-[0.15rem]">
        <Image
          width={300}
          height={100}
          loading="eager"
          alt=""
          className="flex-1 aspect-[4/3] object-cover"
          src={photos[1]}
        ></Image>
        <Image
          width={300}
          height={100}
          loading="eager"
          alt=""
          className="flex-1 aspect-[4/3] object-cover"
          src={photos[2]}
        ></Image>
      </Flex>
      <Flex className="flex flex-col gap-[0.15rem]">
        <Image
          width={300}
          height={100}
          loading="eager"
          alt=""
          className="flex-1 aspect-[4/3] object-cover"
          src={photos[3]}
        ></Image>
        <Image
          width={300}
          height={100}
          loading="eager"
          alt=""
          className="flex-1 aspect-[4/3] object-cover"
          src={photos[4]}
        ></Image>
      </Flex>
      {/* <Image
        width={200}
        height={100}
        loading="eager"
        alt=""
        className="flex-1"
        src={photos[5]}
      ></Image> */}
    </Flex>
  );
}
