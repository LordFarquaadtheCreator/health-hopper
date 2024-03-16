"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CameraIcon, ImageIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import Image from "next/image";
import { Flex } from "@radix-ui/themes";
import { cn } from "@/lib/utils";

export function SheetDemo() {
  const [photo, setPhoto] = useState<any>([]);
  const [quota, setQuota] = useState<any>();
  const fileInputRef: any = useRef(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setQuota(null);
      setPhoto(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    if (photo.name) {
      try {
        const formData = new FormData();
        formData.append("image", photo);
        const response = await fetch("/api/get_teeth_results", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        setQuota(result);
        setLoading(false);
        console.log(result);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    setLoading(false);
  };

  const LoadingSpinner = ({ className }: any) => {
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>;
  };

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Teeth Quota</SheetTitle>
        <SheetDescription>
          Upload picture of your teeth for a free instant quote. (Privacy
          Ensured)
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-row mt-6 gap-4  py-4">
        <Button className="flex-1">
          <CameraIcon />
        </Button>
        <Button onClick={triggerFileInput} className="flex-1">
          {photo.name ? <p>{photo.name}</p> : <ImageIcon />}
          <Input
            ref={fileInputRef}
            type="file"
            required
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Button>
      </div>
      <SheetFooter className="mt-6">
        <Flex className="flex flex-col w-full">
          {quota && (
            <h1 className="mt-4 ml-auto mr-auto">
              {quota[0] == 0 ? "Aligned Teeth, " : "Bad Alignment, "}
              {quota[1] ? "Good Gums, " : "Bad Gums, "}
              {quota[2] == 1 ? "Good Overall" : "Bad Overall"}
            </h1>
          )}
          {photo.name && (
            <Image
              className="mt-4 ml-auto mr-auto"
              src={URL.createObjectURL(photo)}
              alt=""
              width={200} // Set appropriate width
              height={200} // You can choose other layout options as well
            />
          )}

          <SheetClose asChild>
            <Button
              disabled={loading}
              className="flex-1 w-full mt-4"
              onClick={handleSubmit}
            >
              {loading ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn("animate-spin")}
                >
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
              ) : (
                <span>Upload</span>
              )}
            </Button>
          </SheetClose>
        </Flex>
      </SheetFooter>
    </SheetContent>
    // </Sheet>
  );
}
