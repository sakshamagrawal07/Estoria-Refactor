export { default } from 'next-auth/middleware'

import { NextRequest, NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {

    const token = await getToken({ req: request })
    const url = request.nextUrl

    if(token && (
        url.pathname === '/admin' || 
        url.pathname === '/api/auth/signin'
    )){
        return NextResponse.redirect(new URL('/admin/auth/home', request.url))
    }

    if(!token && url.pathname.startsWith('/admin/auth')){
        return NextResponse.redirect(new URL('/admin', request.url))
    }

    return NextResponse.next()
}

export const config = {
    macther: ['/admin', '/admin/auth/:path*']
}