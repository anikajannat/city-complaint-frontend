import {NextResponse} from "next/server";import type {NextRequest} from "next/server";
export function middleware(req:NextRequest){
  const res=NextResponse.next();
  res.headers.set("x-citycare-route",req.nextUrl.pathname);
  return res;
}
export const config={matcher:["/dashboard/:path*","/staff/:path*","/admin/:path*"]};
