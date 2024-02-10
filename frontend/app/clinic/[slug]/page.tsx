"use client";
import { useEffect, useState } from "react";

export default function Clinic({ params }: { params: { slug: string } }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(`/api/photo?place_id=${params.slug}`);
      const data = await res.json();
      console.log(data.data.result.photos);
    };

    if (!params.slug) {
      return;
    }
    fetchPhotos();
  }, []);
  return (
    <div>
      <h1>Clinic</h1>
      <p>{params.slug}</p>
    </div>
  );
}
