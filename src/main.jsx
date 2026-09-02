import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LP from './LP.jsx'
import Site from './Site.jsx'
import AboutEditorial from './AboutEditorial.jsx'
import ServicesEditorial from './ServicesEditorial.jsx'
import MonstersEditorial from './MonstersEditorial.jsx'
import AppEditorial from './AppEditorial.jsx'
import './marble-tuning.css'
import './profile.css'

const path = window.location.pathname.replace(/\/$/, '') || '/'

let Page
if (path === '/lp') {
  Page = LP
} else if (path === '/diagnosis') {
  Page = App
} else if (path === '/about') {
  Page = AboutEditorial
} else if (path === '/services') {
  Page = ServicesEditorial
} else if (path === '/monsters') {
  Page = MonstersEditorial
} else if (path === '/app') {
  Page = AppEditorial
} else {
  Page = () => <Site path={path} />
}

ReactDOM.createRoot(document.getElementById('root')).render(<Page />)
