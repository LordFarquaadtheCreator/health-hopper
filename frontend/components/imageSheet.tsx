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

function SheetDemo() {
  const [photo, setPhoto] = useState<any>([]);
  const fileInputRef: any = useRef(null);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
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
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </Button>
      </div>
      <SheetFooter className="mt-6">
        <SheetClose asChild>
          <Button type="submit">Upload</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
    // </Sheet>
  );
}

export { SheetDemo }
