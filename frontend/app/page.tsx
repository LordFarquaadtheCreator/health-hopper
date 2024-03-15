import { Metadata } from "next";

import { Hero } from "@/components/hero";
import { Body } from "@/components/body";

export const metadata: Metadata = {
  title: "HealthHopper",
  description: "Simplify medical tourism.",
};

export default function MusicPage() {
  return (
    <>
      <Hero />
      {/* <DentalTab /> */}
      <Body />
    </>
  );
}

/* <div className="col-span-3 lg:col-span-4 ">
        <div className="h-full py-6 ">
          <Tabs defaultValue="dental" className="h-full space-y-6">
            <TabsContent
              value="dental"
              className="border-none p-0 outline-none"
            >
              <DentalTab />
            </TabsContent>
          </Tabs>
        </div>
      </div> */
