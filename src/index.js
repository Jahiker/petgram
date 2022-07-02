import React from 'react'
import { ReactDOM } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-nine-phi.vercel.app/graphql',
  cache: new InMemoryCache()
})

const app = document.getElementById('app')

createRoot(app).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
