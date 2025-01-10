import { Inter } from 'next/font/google'

import { ApolloWrapper } from '@/context/apollo-provider';
import  { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react"

import "./globals.css"
import { Sidebar } from '@/components/sidebar';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <html lang="en">
      <hed>
      <script
  defer
  data-website-id="67818315ebaccf7afd593140"
  data-domain="next-crm-flame.vercel.app"
  src="https://datafa.st/js/script.js">
</script>
      </hed>
      <body className={inter.className}>
        <ApolloWrapper>
          <SessionProvider session={session}>
            {session ? (
              <div className="flex h-screen bg-gray-50">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                  <Header />
                  <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                  </main>
                </div>
              </div>
            ) : (
              children
            )}
          </SessionProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}

