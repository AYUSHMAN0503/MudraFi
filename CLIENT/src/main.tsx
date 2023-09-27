// main.tsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { ApolloProvider } from "@apollo/client";
import client from "../../SERVER/apollo-client.js"; // Import your Apollo Client instance

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  //</React.StrictMode>,
)
