import React from 'react'
import ReactDOM from 'react-dom/client'
import { BooksApp } from './BooksApp'
import './styles.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './auth/context/AuthProvider'
import { BookProvider } from './books/context/BookProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
            <BooksApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
