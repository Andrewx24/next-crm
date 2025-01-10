import { ApolloClient, InMemoryCache, createHttpLink, NormalizedCacheObject } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  const httpLink = createHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
  })

  const authLink = setContext((_, { headers }) => {
    let token: string | null = null
    
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token')
    }

    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  })
}

export default createApolloClient