import { clinics } from "../../../data/clinics";
import { ImagesRow } from "./imagesRow";
import img from "../../../public/cool.jpg";
import { BigImage } from "./bigImage";

export const Body = () => {
  return (
    <div className="p-3 small:p-8 small:pt-4 flex flex-col gap-9 overflow-x-hidden">
      <ImagesRow items={clinics} text={"Explore trips to trending clinics"} />
      <ImagesRow items={clinics} text={"Last-minute deals for the week"} />
      <BigImage
        img={img}
        text={"Find out the perfect clinic for you with our AI integration!"}
      />
      <ImagesRow items={clinics} text={"Get instant free quotes"} />
      <ImagesRow items={clinics} text={"Certified VIP travel and booking"} />
    </div>
  );
};
