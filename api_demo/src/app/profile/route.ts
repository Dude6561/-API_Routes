import Head from "next/head";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  return new Response(" THis is profile Api", {
    headers: { "Content-Type": "text/" },
  });
}
