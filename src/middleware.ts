import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const config = {
  matcher: ['/acesso'],
}

export function middleware(req: NextRequest) {
  const url = new URL('/login', req.url)
  return NextResponse.redirect(url)
}
