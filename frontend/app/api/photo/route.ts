import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const place_id = searchParams.get("place_id");

  const url = "https://maps.googleapis.com/maps/api/place/details/json";
  const fields = "?fields=photos";
  const placeId = `&place_id=${place_id}`;
  const apiKey = `&key=${process.env.GOOGLE_API}`;

  const res = await fetch(`${url}${fields}${placeId}${apiKey}`);
  const data = await res.json();

  return Response.json({ data });
}