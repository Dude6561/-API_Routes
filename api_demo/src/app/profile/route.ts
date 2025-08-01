import { log } from "console";
import Head from "next/head";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  const theme = request.cookies.get("Theme");
  console.log(theme);
  return new Response(" THis is profile Api", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "Theme=Dark" },
  });
}
