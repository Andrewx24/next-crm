import { Inter } from 'next/font/google'
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo-client";
import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"

import "./globals.css"
import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <html lang="en">
      <body className={inter.className}>
        <ApolloProvider client={client}>
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
        </ApolloProvider>
      </body>
    </html>
  )
}

