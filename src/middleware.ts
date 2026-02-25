import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ─── Define your route protection rules here ───────────────────────────────

const isPublicRoute = createRouteMatcher([
  "/",                   // landing page
  "/sign-in(.*)",        // Clerk hosted sign-in
  "/sign-up(.*)",        // Clerk hosted sign-up
  "/api/webhooks(.*)",   // public webhooks (e.g. Stripe, Clerk)
  "/about",
  "/pricing",
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

// ─── Middleware ─────────────────────────────────────────────────────────────

export default clerkMiddleware(async (auth, req: NextRequest) => {
  try {
    const { userId, orgRole } = await auth();

    // 1. Protect all non-public routes — redirect to sign-in if unauthenticated
    if (!isPublicRoute(req)) {
      await auth.protect();
    }

    // 2. Restrict /admin routes to org admins only
    if (isAdminRoute(req)) {
      if (!userId || orgRole !== "org:admin") {
        const url = req.nextUrl.clone();
        url.pathname = "/";
        return NextResponse.redirect(url);
      }
    }

    // 3. Redirect signed-in users away from auth pages
    if (
      userId &&
      (req.nextUrl.pathname.startsWith("/sign-in") ||
        req.nextUrl.pathname.startsWith("/sign-up"))
    ) {
      const url = req.nextUrl.clone();
      url.pathname = "/dashboard";
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  } catch (err) {
    // Fail open — log the error but don't crash the request
    console.error("[Middleware] Unexpected error:", err);
    return NextResponse.next();
  }
});

// ─── Matcher ────────────────────────────────────────────────────────────────
// Skips Next.js internals and static assets, always runs for API routes.
// This is Clerk's recommended default matcher.

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};