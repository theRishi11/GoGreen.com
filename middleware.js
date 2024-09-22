import { NextResponse } from 'next/server';

export function middleware(request) {
    const path = request.nextUrl.pathname;

    const protectedRoutes = ['/cart', '/myorder'];

    const token = request.cookies.get('token')?.value || '';

    if (protectedRoutes.includes(path) && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/cart', '/myorder'], 
};
