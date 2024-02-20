import { NextRequest } from "next/server";

async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const place_id = searchParams.get("place_id");

  const url = `http://127.0.0.1:5000/get_pred_val/${place_id}`;

  const res = await fetch(url);
  const data = await res.json();

  return Response.json({ data });
}

export { GET }
