import { ApolloProvider } from '@apollo/client'
import client from '@/apolloClient'
import Button from '@/components/Button'
import Celebrities from '@/Celebrities'

import './scss/app.scss'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Hello world!</h1>
        <span>My first Apollo app 🚀</span>
        <br />
        <Celebrities />
        <Button
          variant="primary"
          shape="rounded"
          onClick={() => alert('Hello there!')}
        >
          Say hello
        </Button>
      </div>
    </ApolloProvider>
  )
}

export default App
