import React from 'react'
import { ReactDOM } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client"
import { setContext } from '@apollo/client/link/context'
import Context from './Context'

import { App } from './App'

const httpLink = createHttpLink({
  uri: "https://petgram-server-nine-phi.vercel.app/graphql",
})

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem("token")
  return {
      headers: {
          ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const app = document.getElementById('app')

createRoot(app).render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>
)
