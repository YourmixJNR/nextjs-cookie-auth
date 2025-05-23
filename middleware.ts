import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// define protected routes
const protectedRoutes = ["/dashboard"] as const;

const isProtectedRoute = (pathname: string) => {
  return protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );
};

export function middleware(request: NextRequest) {
  const cookies = request.cookies;
  const userEmail = cookies.get("user_email");
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname.startsWith("/auth");

  // redirect to login if accessing protected route without being "logged in"
  if (isProtectedRoute(pathname) && !userEmail) {
    const loginUrl = new URL("/auth/login", request.url);
    loginUrl.searchParams.set("returnTo", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  // if already logged in, prevent access to login/register pages
  if (
    isAuthPage &&
    (pathname === "/auth/login" || pathname === "/auth/register") &&
    userEmail
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/auth/login", "/auth/register"],
};
