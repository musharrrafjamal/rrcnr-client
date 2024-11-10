import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logout successful" },
    { status: 200 }
  );

  // Clear the authentication cookie
  response.headers.set(
    "Set-Cookie",
    serialize("auth", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0, // Expires immediately
      path: "/",
    })
  );

  return response;
}
