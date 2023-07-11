import { NextResponse } from "next/server";

export function middleware(request: Request){

    console.log('middleware!');
    console.log(request.method);
    console.log(request.url);

    const origin = request.headers.get('origin');

    console.log(origin);
    return NextResponse.next()

}

//matcher allows you to filter middlewear to run on specific paths
export const config = {
    matcher: '/api/:path*'
}