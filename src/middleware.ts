// middleware.ts (place in root of your project)

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // ── Auth example ──────────────────────────────────────────
  const token = request.cookies.get('token')?.value

  if (pathname.startsWith('/dashboard') && !token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // ── Clone & modify request headers ────────────────────────
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  // ── Build response ────────────────────────────────────────
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // ── Set response headers ──────────────────────────────────
  response.headers.set('x-custom-header', 'my-value')

  // ── Set / delete cookies ──────────────────────────────────
  // response.cookies.set('my-cookie', 'value', { httpOnly: true })
  // response.cookies.delete('old-cookie')

  return response
}

// ── Matcher: control which routes trigger middleware ──────────
export const config = {
  matcher: [
    /*
     * Match all paths EXCEPT:
     * - _next/static  (static files)
     * - _next/image   (image optimisation)
     * - favicon.ico
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}