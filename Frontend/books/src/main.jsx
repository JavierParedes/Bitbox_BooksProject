import React from 'react'
import ReactDOM from 'react-dom/client'
import {BooksApp} from './BooksApp.jsx'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooksApp />
  </React.StrictMode>,
)
