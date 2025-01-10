import { auth as middleware } from "@/lib/auth"
 
export default middleware((req) => {
  return req.auth
})
 
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}