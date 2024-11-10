import { NextResponse } from "next/server";

export function middleware(request) {
  // Check if the auth cookie exists
  const authCookie = request.cookies.get("auth");

  const isLoginPage = request.nextUrl.pathname === "/login";

  // If the user is not authenticated and is trying to access a protected route, redirect to login
  if (!authCookie && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // If the user is authenticated and tries to access the login page, redirect to the dashboard
  if (authCookie && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url)); // Redirect to a protected page
  }

  // Continue to the requested route if conditions are met
  return NextResponse.next();
}

// Apply middleware to specific routes only
export const config = {
  matcher: ["/private/:admin*", "/admin", "/login"], // Adjust routes as needed
};
