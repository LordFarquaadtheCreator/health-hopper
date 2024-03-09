import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const image: any = formData.get("image");
  console.log(image);
  const form = new FormData();
  form.append("image", image);

  const flaskResponse = await fetch("http://127.0.0.1:5000/get_teeth_results", {
    method: "POST",
    body: form,
  });

  // Get the response from the Flask server
  const data = await flaskResponse.json();

  // Return the response from the Flask server to the client
  return new Response(JSON.stringify({ data }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
