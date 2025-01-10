'use client'

import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'
import createApolloClient from '@/lib/apollo-client'

interface ApolloWrapperProps {
  children: ReactNode
}

export function ApolloWrapper({ children }: ApolloWrapperProps) {
  const client = createApolloClient()

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}