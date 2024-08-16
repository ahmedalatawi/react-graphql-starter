import { ApolloProvider } from '@apollo/client'
import client from '@/apolloClient'
import Celebrities from '@/Celebrities'

import './scss/app.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <Celebrities />
    </ApolloProvider>
  )
}

export default App
