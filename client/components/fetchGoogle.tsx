"use client";
import { Button } from "./ui/button";

export function FetchGoogleButton() {
  const handleFetch = async () => {
    const response = await fetch("/api/fetchGoogle");
    const data = await response.json();
    console.log("data", data);
  };
  return <Button onClick={handleFetch}>Fetch</Button>;
}
