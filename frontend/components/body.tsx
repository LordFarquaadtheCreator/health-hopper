import Image from "next/image";
import { clinics } from "../data/clinics";
import { ImagesRow } from "./imagesRow";
import { cn } from "@/lib/utils";
import img from "../public/background.jpg";

export const Body = () => {
  const imageClass = "border rounded-3xl w-full h-[70vh] object-cover";
  return (
    <div className="p-3 small:p-8 small:pt-4 flex flex-col gap-9 overflow-x-hidden">
      <ImagesRow items={clinics} text={"Explore trips to trending clinics"} />
      <ImagesRow items={clinics} text={"Last-minute deals for the week"} />
      <Image
        className={cn(imageClass)}
        alt=""
        width={3000}
        height={3000}
        src={img}
      />
      <ImagesRow items={clinics} text={"Explore trips to trending clinics"} />
      <ImagesRow items={clinics} text={"Last-minute deals for the week"} />
    </div>
  );
};
