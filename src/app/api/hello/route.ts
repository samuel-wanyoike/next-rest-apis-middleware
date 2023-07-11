import { NextResponse } from "next/server";
import { limiter } from "../config/limiter"

export async function GET(request: Request) {

  const remainig = await limiter.removeTokens(1);
  const origin = request.headers.get('origin');

  console.log('remaining: ', remainig );

  if(remainig < 0) return new NextResponse(null, {
    status: 429,
    statusText: "Too many Requests",
    headers: {
      "Access-Control-Allow-Origin": origin || "*",
      "Content-Type": "text/plain",
    }

  });

  return new Response('Hello, Next.js!')
}
