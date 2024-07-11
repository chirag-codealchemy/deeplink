import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(req: NextRequest) {
  try {
    const userData = await getToken({ req });
    console.log("🚀 ~ middleware ~ data 2 ------>", userData);
  } catch (error) {
    console.log("🚀 ~ middleware ~ error:", error);
  } finally {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = { matcher: ["/dashboard"] };
