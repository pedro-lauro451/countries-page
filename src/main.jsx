import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './css/style.css'
import GlobalState from './GlobalContext'
import ThemeState from './ThemeContext'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <GlobalState>
      <ThemeState>
        <App />
      </ThemeState>
    </GlobalState>
  </QueryClientProvider>
  ,
)
