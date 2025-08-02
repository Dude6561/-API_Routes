import { cookies } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));
  // const theme = request.cookies.get("Theme");
  // console.log(theme); one method of appproach of logging cookies
  const cookieStore = await cookies();
  cookieStore.set("resultPerpage", "20"); // method of sending the cookies
  console.log(cookieStore.get("resultPerpage"));
  return new Response(" THis is profile Api", {
    headers: { "Content-Type": "text/html", "Set-Cookie": "Theme=Dar" },
  });
}
