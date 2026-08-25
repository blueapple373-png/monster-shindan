import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LP from './LP.jsx'
import Site from './Site.jsx'
import ServicesEditorial from './ServicesEditorial.jsx'
import MonstersEditorial from './MonstersEditorial.jsx'
import './services-desktop-overview.css'
import './services-desktop-tuning.css'

const path = window.location.pathname.replace(/\/$/, '') || '/'

let Page
if (path === '/lp') {
  Page = LP
} else if (path === '/diagnosis') {
  Page = App
} else if (path === '/services') {
  Page = ServicesEditorial
} else if (path === '/monsters') {
  Page = MonstersEditorial
} else {
  Page = () => <Site path={path} />
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />)
