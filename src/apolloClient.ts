import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
      if (message === 'Not Authorized') {
        console.error('Not Authorized')
      }
    })
  if (networkError) {
    console.error(`[Network error]: ${networkError}`)
  }
})

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_APP_GRAPHQL_ENDPOINT,
  // credentials: 'include',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
})

export default client
