import { NextResponse } from "next/server";
import { serialize } from "cookie"; // Import serialize directly

export async function POST(req) {
  const { phoneNumber, password } = await req.json();

  if (
    phoneNumber === process.env.ADMIN_PHONE_NUMBER &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    // Set the authentication cookie
    response.headers.set(
      "Set-Cookie",
      serialize("auth", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, // 1 hour
        path: "/",
      })
    );

    return response;
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 400 }
    );
  }
}
