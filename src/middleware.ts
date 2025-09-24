import { getToken } from 'next-auth/jwt'
import { NextResponse, NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {



  const token =await getToken({req:request})
  const {pathname} =request.nextUrl

  const authpage =["/login" , "/register"]

  const routes =["/" ,"/allorders", "/cart" ,"/brands" ,"/categories" ,"/ProductDetailes" ,"/wishlist"]


if(!token && routes.includes(pathname)){
      return NextResponse.redirect(new URL('/login', request.url))

}



if(token && authpage.includes(pathname)){
    return NextResponse.redirect(new URL('/', request.url))
}



  return NextResponse.next()



}
 
export const config = {
  matcher: ["/" ,"/allorders" , "/cart" ,"/brands" ,"/categories" ,"/ProductDetailes" ,"/wishlist" ,"/login" , "/register"],
}