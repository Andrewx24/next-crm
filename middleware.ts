import NextAuth from "next-auth"
import authConfig from "@/auth.config"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const { nextUrl } = req

  const isAuthPage = nextUrl.pathname.startsWith('/auth')

  if (isAuthPage) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/', nextUrl))
    }
    return null
  }

  if (!isLoggedIn) {
    return Response.redirect(new URL('/auth/login', nextUrl))
  }

  return null
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

