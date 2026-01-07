import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("MIDDLEWARE HIT", req.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
