import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LP from './LP.jsx'

const path = window.location.pathname
const Page = path === '/lp' ? LP : App

ReactDOM.createRoot(document.getElementById('root')).render(<Page />)
